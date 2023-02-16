<template>
  <el-container>
    <el-header class="header-form">
      <h1>我的购物车</h1>
    </el-header>
    <el-main>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="search">搜索书本</el-menu-item>
        <el-menu-item index="2" @click="book">全部书籍</el-menu-item>
        <el-menu-item index="3" @click="shopping">购物车</el-menu-item>
        <el-menu-item index="4" @click="orders">历史订单</el-menu-item>
        <el-menu-item index="5" @click="help">帮助</el-menu-item>
        <el-menu-item index="6" @click="register">创建新账号</el-menu-item>
        <el-menu-item v-show="isShow" index="7" @click="login">登录</el-menu-item>
        <el-menu-item v-show="isShow1" index="8" @click="home" >退出登录</el-menu-item>
      </el-menu>
      <div style="margin-top: 20px;">
        <el-table
          ref="multipleTable"
          :data="tableData"
          @selection-change="handleSelectionChange"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55" center>
          </el-table-column>
          <el-table-column
            prop="bname"
            label="书名"
            min-width="7%" align="center">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格"
            min-width="7%" align="center">
          </el-table-column>
          <el-table-column
            label="数量" min-width="5%" align="center">
            <template slot-scope="scope">
              <el-input min="1" type="number" v-model="scope.row.num" ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" min-width="10%" align="center">
            <template slot-scope="scope">
              <el-button size="small" @click="del(scope.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="margin-top: 30px;">
        <el-button type="primary" plain @click="comfirm">确认</el-button>
      </div>
      <el-drawer
        title="确认订单"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose">
        <div v-for="book in multipleSelection">
          <div>
            <p>书名：{{book.bname}}</p>
            <p>价格：{{book.price}}</p>
            <p>数量：{{book.num}}</p>
          </div>
          <el-divider></el-divider>
        </div>
        <h1>总价：{{this.sum}}</h1>
        <el-button type="primary" plain @click="makeOrder">提交订单</el-button>
      </el-drawer>
    </el-main>
  </el-container>
</template>

<script>
import store from "../store";

export default {
  name:'Shopping',
  data(){
    return{
      isShow:true,
      isShow1:false,
      tableData:[
        {
          bname:'三体',
          price:'30',
          num:1
        },
        {
          bname:'三体',
          price:'30',
          num:1
        },
        {
          bname:'三体',
          price:'30',
          num:1
        }
      ],
      drawer:false,
      sum:0,
      multipleSelection:[],
      orderItem:{
        oid:'store190876',
        orderTime:'2021-10-19',
        state:'未发货',
        uid:'12',
        bid:'5',
        bnumber:'34',
        totalPrice:'333'
      },
      newOrder:[]
    }
  },
  methods:{
    load(){
      this.tableData=store.state.cart;
    },
    //生成当前时间
    timestampToTime(times) {
      let time = times[1]
      let mdy = times[0]
      mdy = mdy.split('/')
      let month = parseInt(mdy[0]);
      let day = parseInt(mdy[1]);
      let year = parseInt(mdy[2])
      return year + '-' + month + '-' + day + ' ' + time
    },
    //生成订单后发送给后端
    makeOrder(){
      console.log(this.multipleSelection[0].num*this.multipleSelection[0].price)
      let time = new Date()
      let nowTime = (this.timestampToTime(time.toLocaleString('en-US',{hour12: false}).split(" "))).toString()

      if(store.state.user.uid===''){
        alert('登录后才可生成订单');
        this.$router.push('/login');
      }else{
        var url=this.$baseUrl+'/ord/addOrd';
        // console.log(this.searchForm)
        let i=0;
        console.log(nowTime);
        for(i=0;i<this.multipleSelection.length;i++){
          this.orderItem.bid=this.multipleSelection[i].bid;
          //this.orderItem.orderTime=nowTime;
          this.orderItem.uid=store.state.user.uid;
          this.orderItem.state=this.multipleSelection[i].state;
          this.orderItem.bnumber=this.multipleSelection[i].num;
          this.orderItem.totalPrice=this.multipleSelection[i].num*this.multipleSelection[i].price;
          this.$axios.post(url,{
            //orderTime:this.orderItem.orderTime,
            state:this.orderItem.state,
            uid:this.orderItem.uid,
            bid:this.orderItem.bid,
            bnumber:this.orderItem.bnumber,
            totalPrice:this.orderItem.totalPrice
          }).then(res=>{
            let message = res.data.msg;
            if (message==='success'){
              alert('订单生成成功！')
              //新生成的订单加入订单界面，获取信息，获取所有订单！
              var url=this.$baseUrl+'/ord/getOrds';
              this.$axios.get(url,{
                params: {
                  uid:store.state.user.id
                }
              }).then(res=>{
                let message = res.data.msg;
                if (message==='success'){
                  store.commit('setOrders',res.data);
                }
              })
            }else{
              /*打印错误信息*/
              alert("生成订单失败");
            }
          })
        }

      }

    },
    search(){
      this.$router.push('/search');
    },
    book(){
      this.$router.push('/book');
    },
    shopping(){
      this.$router.push('/shopping');
    },
    help(){
      this.$router.push('/help');
    },
    faq(){
      this.$router.push('/faq');
    },
    rule(){
      this.$router.push('/rule');
    },
    contact(){
      this.$router.push('/contact');
    },
    home(){
      this.$router.push('/');
    },
    orders(){
      if(store.state.user.uid===''){
        alert('未登录用户不可查看订单界面')
      }else{
        this.$router.push('/orders');
      }
    },
    register(){
      this.$router.push('/register');
    },
    login(){
      //if(state.user.uid!=)
      this.$router.push('/login');
    },
    comfirm(){
      if(Object.keys(this.multipleSelection).length!==0){
        this.drawer=true;
        this.sum=0;
        Object.keys(this.multipleSelection).forEach((item)=>{
          this.sum+=this.multipleSelection[item].price*this.multipleSelection[item].num;
        })
        console.log(this.sum);
      }else{
        alert("请选择要购买的书籍！！");
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },mounted() {
    if(store.state.user.uid===''){
      this.isShow=true;
      this.isShow1=false;
    }else{
      this.isShow=false;
      this.isShow1=true;
    }
    this.load();
  }
}
</script>

<style scoped>
.header-form {
  margin-top: 20px;
}
</style>

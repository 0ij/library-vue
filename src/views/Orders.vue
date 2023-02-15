<template>
  <body>
  <h1>全部订单</h1>
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
<!--  界面显示订单内容-->
  <el-table
    :data="orders"
    style="width: 100%">
    <el-table-column
      prop="oid"
      label="订单号"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="bid"
      label="bid"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="bid"
      label="书名"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="totalPrice"
      label="价格"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      label="数量" min-width="5%" align="center">
      <template slot-scope="scope">
        <el-input min="1" type="number" v-model="scope.row.bnumber" ></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="orderTime"
      label="下单时间"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column
      prop="state"
      label="状态"
      min-width="7%" align="center">
    </el-table-column>
    <el-table-column label="操作" min-width="10%" align="center">
      <template slot-scope="scope">
        <el-button size="small" @click="pay(scope.row.oid,scope.row.state)">支付</el-button>
        <el-button size="small" @click="del(scope.row.oid,scope.row.state)">撤除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </body>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
import Element from "element-ui";
export default {
  name: "order",
  components:{
    MyNav
  },
  data(){
    return{
      isShow:true,
      isShow1:false,
      orders:[{
        oid:'190876',
        orderTime:'2021-10-19',
        state:'未发货',
        uid:'12',
        bid:'3',
        bnumber:'34',
        totalPrice:'333'
      },
        {oid:'213341',
          orderTime:'2021-10-19',
          state:'未支付',
          uid:'12',
          bid:'3',
          bnumber:'34',
          totalPrice:'333'
        }],
    }

  },methods:{
    load(){
      console.log(store.state.user.uid);
      let uid=Number(store.state.user.uid);
      var url=this.$baseUrl+'/ord/getOrds';
      this.$axios.get(url,{
        params: {
          uid:uid
        }
      }).then(res=>{
        this.orders=res.data;
        store.commit('setOrders',res.data)
        console.log(res.data.message);
      },err=>{
        console.log(err);
      })
      this.orders=store.state.orders;
    },
    //撤销订单
      del(oid,state){
        console.log(oid);
        if(state=='未支付'||state=='已支付未发货'){
          var url=this.$baseUrl+'/ord/deleteOrd';
          store.commit('delOrder',oid);
          this.load();
          this.$axios.post(url,{
            oid:oid,
          }).then(response =>{
            if(response.data=="删除成功"){
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              var url=this.$baseUrl+'/ord/getOrds';
              this.$axios.get(url,{
                params: {
                  uid:uid
                }
              }).then(res=>{
                this.orders=res.data;
                store.commit('setOrders',res.data)
                console.log(res.data.message);
              },err=>{
                console.log(err);
              })
            }
          });
        }else{
          alert('此订单当前状态不允许撤销')
        }
      },
    //支付订单
    pay(oid,state){
      if(state=='未支付'){
        store.commit('payOrder',oid);
        this.load();
        var url=this.$baseUrl+'/ord/changeOrd1';
        this.$axios.post(url,{
          oid:oid,
        }).then(response =>{
          console.log(response.data)
        });
      }else{
        alert('此订单已支付')
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
    }
  },
  created() {
    this.load();
  },mounted() {
    if(store.state.user.uid===''){
      this.isShow=true;
      this.isShow1=false;
    }else{
      this.isShow=false;
      this.isShow1=true;
    }
  }
}
</script>

<style scoped>

</style>

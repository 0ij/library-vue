<template>
  <el-container>
    <el-header class="header-form">
      <h1>详情信息</h1>
    </el-header>
    <el-main>
      <MyNav></MyNav>
      <el-container>
        <el-aside width="40%">
          <div class="cover">
            <img :src="book.pic">
          </div>
        </el-aside>
        <el-main class="des">
          <div style="width: 600px;margin-left:100px;">
            <p>书名：{{book.bname}}</p>
            <p>作者：{{book.author}}</p>
            <p>ISBN:{{book.ISBN}}</p>
            <p style="text-align: left;">简介：{{book.info}}</p>
            <p>价格：{{book.price}}</p>
            <p><el-input-number v-model="num" :min="1" :max="10"></el-input-number></p>
            <el-button type="primary" plain style="margin-top: 10px;"  @click="addIntoCart()">加入购物车</el-button>
          </div>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
import router from "../router";


export default {
    name:'BookDetail',
  components:{
    MyNav
  },
    data(){
        return{
          book:{
          },
          order:{
          },
          num:1
        }
    },
    methods:{
      //加入购物车，生成订单及填入数据等未完成，生成订单时判断是否登录
      //if(state.user.uid)===''  通过判断state中是否存在用户信息来完成
      //加入购物车
      addIntoCart(){
        // let formdata=new FormData();
        // console.log(this.num)
        // formdata.append("num",this.num);
        // formdata.append("pic",this.book.pic);
        // formdata.append("ISBN",this.book.ISBN);
        // formdata.append("bname",this.book.bname);
        // formdata.append("author",this.book.author);
        // formdata.append("price",this.book.price);
        // formdata.append("abs",this.book.abs);
        console.log(this.num);
        console.log('bookdetail:'+this.book.bname);
        store.commit('addIntoCart',this.book);
        alert('成功加入购物车');
      },
      //生成订单后发送给后端
      makeOrder(){
        var time = new Date();
        //生成关于订单的表单数据
        let formdata=new FormData();
        //此时订单号为空
        formdata.append("oid",'');
        formdata.append("orderTime",time.toLocaleString());
        formdata.append("state",'0');
        formdata.append("uid",store.state.user.uid);
        formdata.append("bid",this.book.bid);
        //此处传入的数据界面中还没有，传入书本的数量
        formdata.append("bnumber",this.num);
        //传入总价，数量乘单价
        formdata.append("totalPrice",(this.num*this.book.price).toString());

        var url=this.$baseUrl+'/ord/addOrd';
        // console.log(this.searchForm)
        this.$axios.post(url,{
          oid:formdata.oid,
          orderTime:formdata.orderTime,
          state:formdata.state,
          uid:formdata.uid,
          bid:formdata.bid,
          bnumber:formdata.bnumber,
          totalPrice:formdata.totalPrice
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
    },
  mounted() {
      console.log(store.state.book);
      this.book= store.state.book;
  },
  created() {

  }
}
</script>

<style scoped>
.header-form {
    margin-top: 20px;
}
.cover{
    margin-top: 80px;
}
.des{
    margin-top: 140px;
}
</style>

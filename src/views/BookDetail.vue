<template>
  <el-container>
    <el-header class="header-form">
      <h1>详情信息</h1>
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
          isShow:true,
          isShow1:false,
          book:{
          },
          cartItem:{
            num:'',
            pic: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
            ISBN:'12121',
            bname: 'store里被选中的三体',
            author: '刘慈欣',
            price: '30',
            info: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'

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
        // console.log(formdata.get("bname"));
        // console.log(this.num);
        // console.log('bookdetail:'+this.book.bname);
        this.cartItem.pic=this.book.pic;
        this.cartItem.bname=this.book.bname;
        this.cartItem.author=this.book.author;
        this.cartItem.abs=this.book.abs;
        this.cartItem.price=this.book.price;
        this.cartItem.ISBN=this.book.ISBN;
        this.cartItem.num=this.num;
        store.commit('addIntoCart',this.cartItem);
        alert('成功加入购物车');
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
  mounted() {
    if(store.state.user.uid===''){
      this.isShow=true;
      this.isShow1=false;
    }else{
      this.isShow=false;
      this.isShow1=true;
    }
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

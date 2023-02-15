<template>
    <el-container>
      <h1>欢迎来到网上书店</h1>
        <el-header><el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" @click="search">搜索书本</el-menu-item>
          <el-menu-item index="2" @click="book">全部书籍</el-menu-item>
          <el-menu-item index="3" @click="shopping">购物车</el-menu-item>
          <el-menu-item index="4" @click="orders">历史订单</el-menu-item>
          <el-menu-item index="5" @click="help">帮助</el-menu-item>
          <el-menu-item index="6" @click="register">创建新账号</el-menu-item>
          <el-menu-item v-show="isShow" index="7" @click="login">登录</el-menu-item>
          <el-menu-item v-show="isShow1" index="8" @click="home" >退出登录</el-menu-item>
        </el-menu></el-header>
        <el-container>

            <el-main width="50%">
              <el-button type="primary" plain @click="register">注册</el-button>
            </el-main>
            <el-main>
              <el-button type="primary" plain @click="login">登录</el-button>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
export default {
  name: "Welcome",
  components: {MyNav},
  data(){
    return{
      isShow:true,
      isShow1:false,
    }
  },
  methods:{
    register(){
      this.$router.push('/register');
    },
    login(){
      this.$router.push('/login');
    },search(){
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
    }
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
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-header {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-bottom: 50px;
}
</style>

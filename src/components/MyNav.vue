<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="search">搜索书本</el-menu-item>
      <el-menu-item index="2" @click="book">全部书籍</el-menu-item>
      <el-menu-item index="3" @click="shopping">购物车</el-menu-item>
      <el-menu-item index="4" @click="orders">历史订单</el-menu-item>
      <el-menu-item index="5" @click="help">帮助</el-menu-item>
      <el-menu-item index="6" @click="register">创建新账号</el-menu-item>
      <el-menu-item v-show="iShow" index="7" @click="login">
        登录
      </el-menu-item>
      <el-menu-item index="7" @click="login">
        登录
      </el-menu-item>
      <el-menu-item v-show="iShow1" index="8" @click="home" >退出登录</el-menu-item>
    </el-menu>
  </div>

</template>

<script>
import store from "../store";

export default {
  name: "MyNav",
  date(){
    return{
      iShow:true,
      isShow1:false,
    }
  },
  methods:{
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
      this.$router.push('/welcome');
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
      this.$router.push('/login');
    },
    mounted() {
      if(store.state.user.uid===''){
        this.isShow=true;
        this.isShow1=false;
      }
      this.load();
    }
  }
}
</script>

<style scoped>

</style>

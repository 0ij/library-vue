<template>
    <el-container>
        <el-header class="header-form">
            <h1>帮助界面</h1>
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
            <div class="header">
                <el-page-header @back="goBack" content="FAQ">
                </el-page-header>
            </div>
            <div v-for="question in questions">
                <el-card class="card" shadow="hover">
                    <div class="question">{{question.value}}</div>
                    <div class="answer">{{question.answer}}</div>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
export default {
    name:'FAQ',
  components:{
      MyNav
  },
    data(){
        return{
          isShow:true,
          isShow1:false,
            questions:[
                {
                    value:'如何加入网上书店？',
                    answer:'注册账号登录之后即可进入网上书店购物。'
                },
                {
                    value:'怎么找到想要购买的书籍？',
                    answer:'本站支持通过书名、作者、IBSN搜索想要的书籍。'
                }
            ]
        }
    },
    methods:{
      goBack() {
        this.$router.push('/help');
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
.header-form {
    margin-top: 20px;
}
.card {
    margin-top: 30px;
    margin-left: 330px;
    width: 800px;
    /*padding: 100px,100px,100px,100px;*/
}
.question {
    font-weight: bold;
    font-size: 20px;
}
.answer {
    margin-top: 20px;
    line-height: 150%;
}
.header {
    margin-top: 30px;
    margin-left:10px;
}
</style>

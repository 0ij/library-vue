<template>
    <el-container>
        <el-header class="header-form">
            <h1>帮助界面</h1>
        </el-header>
        <el-main>
<!--        <MyNav></MyNav>-->
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
            <el-form>
              <el-form-item class="info-form">
                <el-button plain @click="faq">FAQ</el-button>
                <el-button type="primary" plain @click="rule">系统规则</el-button>
                <el-button type="info" plain @click="contact">联系方式</el-button>
              </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
export default {
    name:'Help',
  components:{
    MyNav
  },
  data(){
      return{
        isShow:true,
        isShow1:false,
    }
  },
    methods:{
        faq(){
            this.$router.push('/faq');
        },
        rule(){
            this.$router.push('/rule');
        },
        contact(){
            this.$router.push('/contact');
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
      home(){
        store.state.user.password='';
        store.state.user.name='';
        store.state.user.mail='';
        store.state.user.uid='';
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
.info-form {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 200px auto;
    width: 350px;
    padding: 35px 35px 35px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
</style>

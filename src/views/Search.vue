<template>
    <el-container>
        <el-header class="header-form">
            <h1>网上书店搜索界面</h1>
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
            <el-container :model="searchForm" class="search-form">
                <div style="display: flex;flex-direction: column ">
                  <el-input placeholder="书名" type="text" v-model="searchForm.bname"></el-input>
                  <el-input  style="padding-top: 10px" placeholder="作者" type="text" v-model="searchForm.author"></el-input>
                  <el-input  style="padding-top: 10px" placeholder="IBSN" type="text" v-model="searchForm.ISBN"></el-input>
                </div>
                <el-button icon="el-icon-search" @click="onSearch('searchForm')"></el-button>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";
import router from "../router";
export default {
    name:'Search',
  components:{
    MyNav
  },
    data(){
        return{
          isShow:true,
          isShow1:false,
            searchForm:{
              bname:'',
              author:'',
              ISBN:''
            }
        }
    },
    methods:{
      onSearch(){
        if(this.searchForm.author===''&&this.searchForm.bname===''&&this.searchForm.ISBN===''){
          alert("搜索关键词不能全为空！")
        }else{
          var url=this.$baseUrl+'/book/search';
         // console.log(this.searchForm)
          this.$axios.post(url,{
            bname:this.searchForm.bname,
            author:this.searchForm.author,
            isbn:this.searchForm.ISBN
          }).then(res=>{
            console.log(res.data);
            store.commit("getSearchResult",res.data);
            router.push("/searchBook")
          },err=>{
            console.log(err);
          })
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
.el-input {
    width: 600px;
}
.search-form {
  margin-top: 10%;
  margin-left: 20%;
}
</style>

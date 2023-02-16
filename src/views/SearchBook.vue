<template>
    <el-container>
        <el-header class="header-form">
            <h1>搜索结果</h1>
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
            <div>
                <el-row style="height: 840px;margin-top:30px;">
                  <el-tooltip effect="dark" placement="right"
                              v-for="item in books"
                              :key="item.id">
                    <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.bname}}</p>
                    <p slot="content" style="font-size: 13px;margin-bottom: 6px">
                      <span>{{item.author}}</span> /
                      <span>{{item.price}}元</span>
                    </p>
                    <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
                    <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                             bodyStyle="padding:10px" shadow="hover">
                      <div class="cover" @click="detail(item)">
                        <img :src="require('../assets/'+item.pic)" alt="封面">
                      </div>
                      <div class="info">
                        <div class="title">
                            {{item.bname}}
                        </div>
                      </div>
                      <div class="author">{{item.author}}</div>
                    </el-card>
                  </el-tooltip>
                </el-row>
                <el-row>
                  <el-pagination
                    :current-page="1"
                    :page-size="10"
                    :total="20">
                  </el-pagination>
                </el-row>
              </div>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";
import store from "../store";

export default {
    name:'SearchBook',
  components:{
    MyNav
  },
    data(){
        return{
          isShow:true,
          isShow1:false,
            books: [
                {
                    cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
                    ISBN:'12121',
                    title: '三体',
                    author: '刘慈欣',
                    price: '30',
                    abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
                },
                {
                    cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
                    ISBN:'12121',
                    title: '三体',
                    author: '刘慈欣',
                    price: '30',
                    abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
                },
                {
                    cover: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
                    ISBN:'12121',
                    title: '三体',
                    author: '刘慈欣',
                    price: '30',
                    abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'
                }
            ]
        }
    },
    methods:{
        detail(item){
          console.log(item)
          store.state.book=item;
          this.$router.push({
            name:'bookhome.jsp',
            query:{ISBN:item.isbn}
          })
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
    },
  mounted() {
    if(store.state.user.uid===''){
      this.isShow=true;
      this.isShow1=false;
    }else{
      this.isShow=false;
      this.isShow1=true;
    }
    this.books=store.state.searchBookResult;
  }
}
</script>

<style scoped>
.header-form {
    margin-top: 20px;
}
.cover {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .abstract {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>

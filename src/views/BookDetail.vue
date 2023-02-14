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
                        <p style="text-align: left;">简介：{{book.abs}}</p>
                        <p>价格：{{book.price}}</p>
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


export default {
    name:'BookDetail',
  components:{
    MyNav
  },
    data(){
        return{
          book:{
            pic: 'https://i.loli.net/2019/04/10/5cada7e73d601.jpg',
            ISBN:'12121',
            bname: 'bookdetail三体',
            author: '刘慈欣',
            price: '30',
            abs: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……'

          }
             }
    },
    methods:{
      addIntoCart(){
        store.commit('addIntoCart',this.book);
      }
    },
  created() {
      this.book= store.state.book;
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

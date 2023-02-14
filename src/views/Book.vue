<template>
    <el-container>
        <el-header class="header-form">
            <h1>全部书籍</h1>
        </el-header>
        <el-main>
            <MyNav></MyNav>
            <div>
              <h1>热销书</h1>
              <h2>新进书</h2>
                <el-row style="height: 840px;margin-top:30px;">
                  <el-tooltip effect="dark" placement="right"
                              v-for="item in books"
                              :key="item.id">
                    <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.title}}</p>
                    <p slot="content" style="font-size: 13px;margin-bottom: 6px">
                      <span>{{item.author}}</span> /
                      <span>{{item.price}}元</span>
                    </p>
                    <p slot="content" style="width: 300px" class="abstract">{{item.abs}}</p>
                    <el-card style="width: 135px;margin-bottom: 20px;height: 233px;float: left;margin-right: 15px" class="book"
                             bodyStyle="padding:10px" shadow="hover">
                      <div class="cover">
                        <img :src="item.cover" alt="封面">
                      </div>
                      <div class="info">
                        <div class="title" @click="toDetail(item)">
                            {{item.title}}
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
import router from "../router";
import store from "../store";

export default {
    name:'Book',
  components:{
    MyNav
  },
    data(){
        return{
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
            ],
          //存放销量好的书籍
          bookSaledGood:[{

          }],
          //存放新进书籍
          bookRecent: [{

          }]
        }
    },
    methods:{
      //加载页面中的基础数据
      load(){
        //获取销量好的书籍
        var url=this.$baseUrl+'/book/getBooksBySales';
        this.$axios.get(url).then(res => {
          this.bookSaledGood=res.data;
          store.commit('setBookSaledGood',res.data);
        })
        //获取新进书籍
        var url1=this.$baseUrl+'/book/getBooksByDate';
        this.$axios.get(url1).then(res => {
          this.bookRecent=res.data;
          store.commit('setBookRecent',res.data);
        })
        //以上传递的两个都是包含所有书籍的数据

      },
      toDetail(item){
        //传入被点击的书籍的数据
       console.log(item)
        store.commit('setBook',item)
        this.$router.push({
            name:'bookhome.jsp',
            query:{ISBN:item.ISBN}
        })
      }
    },
    created() {
      this.load();
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

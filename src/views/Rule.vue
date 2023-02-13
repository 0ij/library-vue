<template>
    <el-container>
        <el-header class="header-form">
            <h1>帮助界面</h1>
        </el-header>
        <el-main>
          <MyNav></MyNav>
            <div class="header">
                <el-page-header @back="goBack" content="系统规则">
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
    name:'Rule',
  components:{
    MyNav
  },
    data(){
        return{
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
    padding: 100px,100px,100px,100px;
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

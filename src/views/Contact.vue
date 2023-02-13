<template>
    <el-container>
        <el-header class="header-form">
            <h1>帮助界面</h1>
        </el-header>
        <el-main>
            <MyNav></MyNav>
            <div class="header">
                <el-page-header @back="goBack" content="联系方式">
                </el-page-header>
            </div>
            <div>
                <el-card class="card" shadow="hover">
                    <div v-for="contact in contacts" class="contact">
                        <li>{{contact.name}}    {{contact.email}}</li>
                    </div>
                </el-card>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import MyNav from "../components/MyNav";

export default {
    name:'Contact',
  components:{
    MyNav
  },
    data(){
        return{
           contacts:[
            {
                name:'管理员',
                email:'xxxxx@163.com'
            },
            {
                name:'售后服务',
                email:'37e6r392@163.com'
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
    margin-top: 170px;
    margin-left: 330px;
    width: 800px;
    padding: 100px,100px,100px,100px;
}
.contact {
    line-height: 200%;
}
.header {
    margin-top: 30px;
    margin-left:10px;
}
</style>

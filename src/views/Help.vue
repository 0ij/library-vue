<template>
    <el-container>
        <el-header class="header-form">
            <h1>帮助界面</h1>
        </el-header>
        <el-main>
        <MyNav></MyNav>
<!--            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">-->
<!--              <el-menu-item index="1" @click="search">搜索书本</el-menu-item>-->
<!--              <el-menu-item index="2" @click="book">全部书籍</el-menu-item>-->
<!--              <el-menu-item index="3" @click="shopping">购物车</el-menu-item>-->
<!--              <el-menu-item index="4" @click="shopping">历史订单</el-menu-item>-->
<!--              <el-menu-item index="5" @click="help">帮助</el-menu-item>-->
<!--              <el-menu-item index="6" @click="home">退出登录</el-menu-item>-->
<!--            </el-menu>-->
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
export default {
    name:'Help',
  components:{
    MyNav
  },
    methods:{

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

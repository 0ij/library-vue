<template>
    <el-container>
        <el-header>欢迎来到网上书店！！</el-header>
        <el-container>
            <el-main width="50%">
              <el-button type="primary" plain @click="register">注册</el-button>
            </el-main>
            <el-main>
              <el-button type="primary" plain @click="login">登录</el-button>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: "Welcome",
  methods:{
    register(){
      this.$router.push('/register');
    },
    login(){
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-header {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-bottom: 50px;
}
</style>

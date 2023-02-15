<template>
  <body id="poster">
  <el-form class="login-container" label-position="left">
    <h3 class="login-title">忘记密码</h3>
    <el-form-item>
      <el-input v-model="name" placeholder="用户名" type="text"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="password" placeholder="新密码" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="newpassword" placeholder="确认新密码" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" plain @click="comfirm">确认修改</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: "Reset",
  data(){
    return{
      name:'',
      password:'',
      newpassword:''
    }
  },
  methods:{
    comfirm(){

    }
  }
}
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 200px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
#poster {
  background:url("../assets/1.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body {
  margin: 0px;
}
</style>

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
      form:{
        mail:'',
        password:'',
        newpassword:''
      }
    }
  },
  methods:{
    comfirm(){
      ///changePassword
      if(this.form.password===this.form.newpassword){
        var url=this.$baseUrl+'user/changePassword';
        let formdata=new FormData();
        formdata.append("email",this.form.email);
        formdata.append("password",this.form.password);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$axios.post(url, {
          mail:this.form.email,
          password:this.form.password
        }).then(res => {
            //console.log(res.uname);
            let message = res.data.msg;
            // 判断结果
            if (message === "修改成功") {
              /*修改密码成功*/
              this.$router.push("/login");
            } else {
              /*打印错误信息*/
              alert("修改未成功");
            }
          }
        )
      }else{
        alert('两次密码不同！')
      }
    },

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

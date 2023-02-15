<template>
  <body id="poster">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-container" label-position="left">
      <h3 class="login-title">登录在线图书馆</h3>
      <el-form-item label="邮箱号" prop="username">
        <el-input v-model="loginForm.email" type="text"></el-input>
      </el-form-item>
      <el-form-item  label="密码" prop="password" >
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="login('loginFrom')">登录</el-button>
          <el-button type="primary" plain @click='toRegister'>注册</el-button>
        <el-button plain @click="forgetPassword">忘记密码</el-button>
      </el-form-item>
    </el-form>

  </body>

</template>

<script>
import router from "../router";
import store from "@/store";
export default {
  name: "Login",
  data(){
    return{
      // 表单信息
      loginForm: {
        // 账户数据
        email: '',
        // 密码数据
        password: '',
        // 验证码数据
      },
      // 表单验证
      rules: {
        // 设置账户效验规则
        email: [
          {required: true, message: '请输入邮箱号', trigger: 'blur'},
          {min: 1, max: 30, message: '请输入正确的账号名', trigger: 'blur'}
        ],
        // 设置密码效验规则
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 6, max: 20, message: '长度在 6 到 20 个字符的密码', trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    login(formName) {
      if(this.loginForm.email!=''&&this.loginForm.password!=''){
        var url=this.$baseUrl+'user/login';
        let formdata=new FormData();
        formdata.append("email",this.loginForm.email);
        formdata.append("password",this.loginForm.password);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        this.$axios.post(url, {
          mail:this.loginForm.email,
          password:this.loginForm.password
        }).then(res => {
          //console.log(res.uname);
          let message = res.data.msg;
          // 判断结果
          if (message === "wrong") {
            /*打印错误信息*/
            alert("账号或密码错误");
          } else if(message === "nouser") {
            alert("无此账号信息");
          }else{
            /*登陆成功*/
            //alert("登陆成功");
            store.commit('login', res.data);
            this.$router.push("/shopping");
          }
        }
        )
      }else{
        alert('请输入完整信息')
      }
    },
   toRegister(){
     router.push("/register")
   },
    //忘记密码
    forgetPassword() {
        this.$router.push('/reset');

      // this.$alert('发送用户名到管理员邮箱xxxxx@163.com找回密码', '忘记密码？', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info',
      //       message: `action: ${action}`
      //     });
      //   }
      // });
      // //传数据
      // var url=this.$baseUrl+'user/mailPassword';
      // let formdata=new FormData();
      // formdata.append("username",this.loginForm.email);
      // formdata.append("password",this.loginForm.password);
      // let config = {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
      // this.$axios.post(url, {
      //   mail:this.loginForm.email,
      //   password:this.loginForm.password
      // }).then(res => {
      //   console.log(res.uname);
      //   // 拿到结果
      //   //let result = JSON.parse(res.data.data);
      //   let message = res.data.msg;
      //   // 判断结果
      //   if (message==='true')                        {
      //     alert("密码为"+message.password+",建议您修改密码");
      //     router.push("/shopping")
      //   }else{
      //     /*打印错误信息*/
      //     alert("账号或密码错误");
      //   }}
      // )
    },
    //修改密码
    changePassword(){
      var url=this.$baseUrl+'user/changePassword';
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios.post(url, {
        mail:this.loginForm.email,
        password:this.loginForm.password
      }).then(res => {

      })
    }
  }
}
</script>

<style scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 220px auto;
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

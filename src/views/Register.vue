<template>
    <body id="poster">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="login-container" label-position="left">
      <h3 class="login-title">注册在线图书馆账号</h3>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" type="text"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" type="text"></el-input>
      </el-form-item>
      <el-form-item  label="密码" prop="password" >
        <el-input type="password" v-model="registerForm.password" ></el-input>
      </el-form-item>
      <el-form-item  label="确认密码" prop="passwordconf" >
        <el-input type="password" v-model="registerForm.passwordconf"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click='register(registerForm)'>注册</el-button>
      </el-form-item>
    </el-form>
    </body>
</template>

<script>
import router from "@/router";
export default {
    name:"Register",
    data(){
        return{
          registerForm:{
            email:'',
            username:'',
            password:'',
            passwordconf:''
          },
          // rules:{
          //   password: [{
          //     required: true,
          //     message: '请输入用户密码',
          //     trigger: 'blur'
          //   },
          //     {
          //       min: 6,
          //       max: 30,
          //       message: '请输入至少6字节的字母和数字混合密码',
          //       trigger: 'blur'
          //     },
          //     {
          //       pattern: /^(\w){6,20}$/,
          //       message: '只能输入6-20个字母、数字、下划线',
          //       trigger: 'blur'
          //
          //     },
          //     {
          //       validator: validatePass, trigger: 'blur' ,
          //     }
          //   ],
          //   email: [{
          //     required: true,
          //     message: '请输入电子邮箱',
          //     trigger: 'blur'
          //   },
          //     {
          //       pattern: /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/,
          //       message: '请输入正确的电子邮箱',
          //       trigger: 'blur'
          //     }
          //   ]
          // }
          // 表单验证
          // rules: {
          //   // 设置邮箱效验规则
          //   email: [
          //     {
          //       required: true,
          //       message: "请输入邮箱",
          //       trigger: "blur"
          //     },
          //     {
          //       validator: function(rule, value, callback) {
          //         if (
          //           /^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i.test(
          //             value
          //           ) === false
          //         ) {
          //           callback(new Error("邮箱格式错误"));
          //         } else {
          //           callback();
          //         }
          //       },
          //       trigger: "blur"
          //     }
          //   ],
          //   // 设置账户效验规则
          //   username: [
          //     {required: true, message: '请输入账户', trigger: 'blur'},
          //     {min: 1, max: 30, message: '请输入正确的账号名', trigger: 'blur'}
          //   ],
          //   // 设置密码效验规则
          //   password: [
          //     {required: true, message: '请输入密码', trigger: 'blur'},
          //     {min: 6, max: 20, message: '长度在 6 到 20 个字符的密码', trigger: 'blur'}
          //   ],
          //   passwordconf: [
          //     {required: true, message: '请输入密码', trigger: 'blur'},
          //     {min: 6, max: 20, message: '长度在 6 到 20 个字符的密码', trigger: 'blur'}
          //   ],
          // },

        }
    },
    methods:{
        register(){
          console.log("注册")
          if(this.registerForm.password!=this.registerForm.passwordconf){
            alert('两处密码不一致！')
          }else{
            var url=this.$baseUrl+'/user/register';
            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            this.$axios.post(url, {
              mail:this.registerForm.email,
              uname:this.registerForm.username,
              password:this.registerForm.password
            }).then(res => {
              // 拿到结果
              let message = res.data.msg;
              // 判断结果，是否存在重复等由后端验证
              if (message==='该邮箱已经注册过，请登录！')                        {
                /*打印错误信息*/
                alert("该邮箱已经注册过，请登录！");
              }else{

                /*注册成功*/
                alert("注册成功");
                router.push("/shopping")
              }})
          }
        }
    }
}
</script>

<style scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 20px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  #poster {
    background:url("../assets/2.jpg") no-repeat;
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

<template>
    <div id='login'>
        <div class='form'>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input placeholder="请输入用户名" v-model="ruleForm.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input placeholder="请输入密码" v-model="ruleForm.password" show-password></el-input>
          </el-form-item>
        </el-form>
        </div>
        <span class="radio">记住密码：  
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>
        </span>
        <div>
          <el-button class="login" type="primary" plain @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ]
        },
        radio: '1'
      };
    },
    methods: {
      login() {
        if(this.ruleForm.name.slice('').length >= 3 && this.ruleForm.name.slice('').length <= 10 && this.ruleForm.password.slice('').length >= 6 && this.ruleForm.password.slice('').length <= 16) {
          // console.log(this.ruleForm.name + this.radio + this.ruleForm.password);
        }
      }
    }

}
</script>
<style lang="scss">
#login{
    .form{
      padding: 0 6% 0 0;
    }
    .login{
      margin-top: 15%;
      width: 40%;
    }
    .radio{
        font-size: 14px;
    }
}
</style>




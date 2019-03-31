<template>
    <div id='register'>
      <Header />
        <div class='form'>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input placeholder="请输入用户名" v-model="ruleForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input placeholder="请输入密码" type="password" v-model="ruleForm.pass" show-password autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input placeholder="请确认密码" type="password" v-model="ruleForm.checkPass" show-password autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        </div>
        <span class='radio'>选择身份：  
          <el-radio v-model="radio" label="1">学生</el-radio>
          <el-radio v-model="radio" label="2">管理员</el-radio>
        </span>
        <div>
          <el-button class="login" type="primary" plain @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
import Header from '../components/header'
export default {
    name: 'register',
    components:{
      Header
    },
    data() {
        var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
          this.isOk = true;
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
          checkPass: '',
          isOK: false
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur', validator: validatePass },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
          checkPass: [
              { required: true, validator: validatePass2, trigger: 'blur'}
          ]
        },
        radio: '1'
      };
    },
    methods: {
      login() {
        if(this.ruleForm.name.slice('').length >= 3 && this.ruleForm.name.slice('').length <= 10 && this.ruleForm.pass.slice('').length >= 6 && this.ruleForm.pass.slice('').length <= 16 && this.isOk) {
        //   console.log(this.ruleForm.name + this.radio + this.ruleForm.pass);
        }
      }
    }

}
</script>
<style lang="scss">
#register{
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




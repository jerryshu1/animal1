<template>
  <div class="reg_container" style="margin-top: 10%;margin-left: 32%">
    <div style="width: 150px;height: 60px;font-size: 24px; margin-left: 170px">创建新用户</div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户" prop="id">
        <el-input v-model="ruleForm.id" style="width: 300px" placeholder="请输入登录工号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" style="width: 300px" placeholder="请输入登录密码" type="password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" style="width: 300px" placeholder="请输入员工姓名"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="ruleForm.phone" style="width: 300px" placeholder="请输入员工联系电话"></el-input>
      </el-form-item>
      <el-form-item label="员工权限" prop="role">
        <el-radio-group v-model="ruleForm.role">
          <el-radio label="超级管理员"></el-radio>
          <el-radio label="饲养员"></el-radio>
          <el-radio label="实验员"></el-radio>
          <el-radio label="观察员"></el-radio>
          <el-radio label="鉴定员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="gousers">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: "Register",
  data() {
    return {
      ruleForm: {
        id: '',
        name: '',
        phone: '',
        companyname: '',
        companyid: '',
        password: '',
        role: '普通用户',
      },
      rules: {
        phone: [
          {message: '请输入手机号', trigger: 'change'},
          {pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'change'},
          {min: 9, message: '密码位数需大于8位', trigger: 'change'}
        ],
        name: [
          {required: true, message: '请输入姓名', trigger: 'change'},
        ],
        companyname: [
          {required: true, message: '请输入所属分公司名称', trigger: 'change'},
        ],
        companyid: [
          {required: true, message: '请输入所属分公司id', trigger: 'change'},
          {pattern: /^\w+$/, message: 'id由大小写字母以及数字', trigger: 'change'},
        ],
        id: [
          {required: true, trigger: 'change'},
        ],
        role: [
          {required: true, trigger: 'change'},
        ]
      }
    }
  },
  computed: {

  },
  methods: {
    superadminsubmitForm() {
    },
    submitForm() {
    },
    gousers() {
        this.$router.push('usermanage')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="less" scoped>
.reg_container{
    width:450px;
    height:450px;

    border:1px solid black ;
    box-shadow: 1px 1px 5px #888888;

    margin: 0 auto;
    padding: 30px;
  
}


</style>
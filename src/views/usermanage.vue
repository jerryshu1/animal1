<template>
    <div>
        <head-top></head-top>
        <div class="contentPart">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="name" label="角色名称" align="center">
                </el-table-column>
                <el-table-column prop="address" label="角色描述" align="center">
                </el-table-column>
                <el-table-column prop="role" label="权限类别" align="center">
                </el-table-column>
                <el-table-column fixed="right" label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除用户</el-button>
                        <el-button type="text" size="small" @click="changeinfo(scope.row)">修改用户信息</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 10px;">
                <el-button style="margin-left: 45%;" type="info" @click="adduser"><i class="el-icon-plus"></i> 新建用户
                </el-button>
            </div>
        </div>
        <el-dialog title="修改用户信息" :visible.sync="dialogTableVisible" center>
            <el-form :model="form" label-width="80px" :rules="rules1">
                <el-form-item label="账号" prop="id">
                    <el-input v-model="form.id"></el-input>
                </el-form-item>
                 <el-form-item label="姓名" prop="id">
                    <el-input v-model="form.id"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="phone">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="权限" prop="role">
                    <el-radio-group v-model="form.role">
                        <el-radio label="实验员"></el-radio>
                        <el-radio label="饲养员"></el-radio>
                        <el-radio label="观察员"></el-radio>
                        <el-radio label="鉴定员"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="adminupdate">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import headTop from '../components/headTop.vue'

export default {
    data() {
        return {
            tableData: [{
                role: '超级管理员',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            dialogTableVisible: false,

            form: {
                id: '',
                // password: '',
                password: '',
                name: '',
                phone: '',
                role: ''
            },
            rules1: {
                phone: [
                    { message: '请输入手机号', trigger: 'change' },
                    { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '请输入正确的号码格式', trigger: 'change' }
                ],
                // password: [
                //   {message: '请输入密码', trigger: 'change'},
                //   {min: 9, message: '密码位数需大于8位', trigger: 'change'}
                // ],
                name: [
                    { message: '请输入手机号', trigger: 'change' },
                ],
                id: [
                    { required: true, trigger: 'change' },
                ],
                role: [
                    { trigger: 'change' },
                ]
            }
        }
    },
    components: {
        headTop,
    },
    methods: {
        handleClick(row) {
            this.$confirm('是否删除人员?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        adduser() {
            this.$router.push('register')
        },
        changeinfo(row) {
            this.dialogTableVisible = true
        },
        adminupdate() {
            this.dialogTableVisible = false
        }
    }
}
</script>

<style lang="less" scoped>
.header_container{
    position: absolute;
    top: 0;
}

.el-table{
    margin-top: 60px;

}

tr{
    color: black;
    td{
        font-size: 14px;
    }
}


</style>

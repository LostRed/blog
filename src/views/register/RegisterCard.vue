<template>

    <el-card class="box-card">
        <h2 style="color:#303133">用户注册</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" label-position="left">
            <br/>
            <h4 style="color:#303133;margin-bottom: 40px;">账号信息</h4>
            <el-form-item label="用户名" prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" prefix-icon="el-icon-user"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" prefix-icon="el-icon-lock"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" prefix-icon="el-icon-lock"
                          placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <br/>
            <h4 style="color:#303133;margin-bottom: 40px;">基本信息</h4>
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm.name" autocomplete="off" prefix-icon="el-icon-user"
                          placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="1"><i class="el-icon-male"></i></el-radio>
                    <el-radio label="2"><i class="el-icon-female"></i></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input type="text" v-model="ruleForm.email" autocomplete="off" prefix-icon="el-icon-message"
                          placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <br/>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-card>


</template>

<script>
export default {
    name: "RegisterCard",
    data: function () {
        let validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (this.ruleForm.username !== '') {
                    let regex = /^[a-zA-Z0-9]{6,8}$/;
                    if (!regex.test(this.ruleForm.username)) {
                        callback(new Error('用户名必须为6-8位字母或数字'));
                    }
                }
                callback();
            }
        };
        let validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.password !== '') {
                    let regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
                    if (!regex.test(this.ruleForm.password)) {
                        callback(new Error('密码必须为6-16位字母和数字的组合'));
                    }
                }
                callback();
            }
        };
        let validateCheckPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        let validateName = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入姓名'));
            } else {
                callback();
            }
        };
        let validateSex = (rule, value, callback) => {
            if (!value) {
                callback(new Error('请选择性别'));
            } else {
                callback();
            }
        };
        let validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入邮箱'));
            } else {
                if (this.ruleForm.email !== '') {
                    let regex = /^[A-Za-z0-9]+([_.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
                    if (!regex.test(this.ruleForm.email)) {
                        callback(new Error('请输入正确的邮箱格式'));
                    }
                }
                callback();
            }
        };
        return {
            ruleForm: {
                username: '',
                password: '',
                checkPass: '',
                name: '',
                avatar: '',
                sex: null,
                email: '',
            },
            rules: {
                username: [
                    {validator: validateUsername, required: true, trigger: 'blur'},
                ],
                password: [
                    {validator: validatePassword, required: true, trigger: 'blur'}
                ],
                checkPass: [
                    {validator: validateCheckPass, required: true, trigger: 'blur'}
                ],
                name: [
                    {validator: validateName, required: true, trigger: 'blur'}
                ],
                sex: [
                    {validator: validateSex, required: true, trigger: 'change'}
                ],
                email: [
                    {validator: validateEmail, required: true, trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.register();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        register() {
            this.$axios.put('/api/blog/user/',
                {
                    username: this.ruleForm.username,
                    password: this.ruleForm.password,
                    name: this.ruleForm.name,
                    sex: this.ruleForm.sex,
                    email: this.ruleForm.email
                })
                .then(response => {
                    if (response.data.code === 200) {
                        this.$message.success('注册成功!');
                        this.$router.push('/login');
                    } else {
                        this.$message.error('注册失败!');
                    }
                })
                .catch(error => {
                    console.log(error);
                    this.$message.error('注册失败!');
                });
        }
    }
}
</script>

<style scoped>
.box-card {
    padding: 0 20%;
}
</style>
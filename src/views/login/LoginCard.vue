<template>
    <el-card class="box-card">
        <h2 style="color:#303133">用户登录</h2>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="top">
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" prefix-icon="el-icon-user"
                          placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off" prefix-icon="el-icon-lock"
                          placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
                <el-row :gutter="5">
                    <el-col :span="18">
                        <el-input type="captcha" v-model="ruleForm.captcha" autocomplete="off"
                                  prefix-icon="el-icon-picture-outline"
                                  placeholder="请输入验证码"></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-image fit="cover" class="captcha-image">
                            <div slot="error" class="image-slot">
                                <i class="el-icon-picture-outline"></i>
                            </div>
                        </el-image>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-button class="login-button" type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <div class="other-button">
                <el-button class="register-button" type="text">忘记密码</el-button>
                <el-button class="register-button" type="text">立即注册</el-button>
            </div>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: "LoginCard",
    data() {
        let validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入用户名'));
            } else {
                if (this.ruleForm.username !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        let validatePassword = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };
        let validateCaptcha = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入验证码'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: '',
                password: '',
                captcha: ''
            },
            rules: {
                username: [
                    {validator: validateUsername, trigger: 'blur'}
                ],
                password: [
                    {validator: validatePassword, trigger: 'blur'}
                ],
                captcha: [
                    {validator: validateCaptcha, trigger: 'blur'}
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style scoped>
.box-card {
    width: 400px;
}

.login-button {
    width: 100%;
}

.other-button {
    display: flex;
    justify-content: space-between;
}

.el-col {
    height: 40px;
}

.captcha-image {
    width: 100%;
    background: #E9EEF3;
    text-align: center;
}
</style>
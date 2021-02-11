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
                <el-row :gutter="10">
                    <el-col :span="17">
                        <el-input type="captcha" v-model="ruleForm.captcha" autocomplete="off"
                                  prefix-icon="el-icon-picture-outline"
                                  placeholder="请输入验证码"></el-input>
                    </el-col>
                    <el-col :span="7">
                        <img :src="url" class="captcha-image" @click="getCaptcha" alt="验证码"/>
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
            },
            url: "api/blog/authentication/captcha"
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.login();
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getCaptcha() {
            this.url = "api/blog/authentication/captcha?" + Math.random();
        },
        login() {
            this.$axios.get('/api/blog/authentication/user/login',
                    {
                        params: {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                            captcha: this.ruleForm.captcha
                        }
                    })
                    .then(response => {
                        console.log('结果：', response.data);
                        if (response.data.code === 200) {
                            this.$store.commit('login', response.data.data);
                            this.$router.push('/');
                        } else {
                            this.getCaptcha();
                        }
                    })
                    .catch(error => {
                        console.log(error);
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
    width: 90px;
    background: #E9EEF3;
    text-align: center;
    cursor: pointer;
}
</style>
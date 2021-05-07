<template>
    <div class="login-container">
        <el-form
                :model="userInfo"
                :rules="loginRules"
                class="login-form"
                label-position="left"
                ref="loginForm">
            <div class="title-container">
                <h3 class="title">Login Form</h3>
            </div>
            <!--username input-->
            <span class="item-title">Account</span>
            <el-form-item prop="userName" style="margin: 10px 0 48px 0">
                <span class="svg-container"><svg-icon svg-name="user"/></span>
                <el-input
                        ref="userName"
                        v-model="userInfo.userName"
                        placeholder="userName"
                        name = "userName"
                        type="text"
                        tabindex='1'
                        auto-complete="on"/>
            </el-form-item>
            <!--password input-->
            <span class="item-title">Password</span>
            <el-form-item prop="password" style="margin: 10px 0 48px 0">
                <span class="svg-container"><svg-icon svg-name="password"/></span>
                <el-input ref="password"
                          v-model="userInfo.password"
                          placeholder="password"
                          name="password"
                          :type="passwordType"
                          tabindex='2'
                          auto-complete="on"
                          @keyup.enter.native = "handleLogin"/>
                <span class="show-pwd" @click="showPwd">
                    <svg-icon :svg-name="passwordType === 'password'? 'eye':'eye-open'"/>
                </span>
            </el-form-item>
            <!--submit button-->
            <el-button
                    type="primary"
                    style="width:100%;margin-bottom:30px;"
                    @click="handleLogin"
                    :loading="loading">
                Login
            </el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            const validateUserName = (rule,value,callback)=>{
                if(value === '')
                    callback('UserName can not be null')
                else
                    callback()
            }
            const validatePassword = (rule,value,callback)=>{
                if(value.length < 1)
                    callback('Password can not be less then 1 letters')
                else
                    callback()
            }
            return{
                userInfo:{
                    userName:'admin',
                    password:'admin'
                },
                loginRules:{
                    userName:[{required:true,trigger:'blur',validator: validateUserName}],
                    password:[{required:true,trigger:'blur',validator: validatePassword}]
                },
                loading:false,
                passwordType:'password'
            }
        },
        methods:{
            showPwd(){
                if(this.passwordType === 'password')
                    this.passwordType = ''
                else
                    this.passwordType = 'password'
                this.$nextTick(()=>{
                    this.$refs.password.focus()
                })
            },
            handleLogin(){
                this.$refs.loginForm.validate(valid => {
                    if(valid){
                        this.loading = true
                        this.$store.dispatch('user/login',this.userInfo).then(()=>{
                            this.loading = false
                            this.$router.push({path:'/'})
                        }).catch(()=>{
                            this.$message({
                                showClose:true,
                                message:'帳號或密碼錯誤',
                                type:'error'
                            })
                            this.loading = false
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    $bg:#283443;
    $light_gray:#fff;
    $cursor: #fff;
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 80%;

            input {
                background: transparent;
                border: 0;
                -webkit-appearance: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;

                &:-webkit-autofill {
                    box-shadow: 0 0 0 1000px $bg inset !important;
                    -webkit-text-fill-color: $cursor !important;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;
    $cursor: #fff;
    .login-container {
        min-height: 100%;
        width: 100%;
        background-color: #2b435f;
        overflow: hidden;

        .login-form {
            border-radius: 30px;
            background-color: $bg;
            max-width: 330px;
            padding: 0 35px 35px 35px;
            margin: 200px auto;
            overflow: hidden;
        }

        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 15px;
            display: inline-block;
        }

        .title-container {
            margin-top: 20px;
            position: relative;
            .title {
                font-size: 26px;
                color: $light_gray;
                margin: 0 auto 40px auto;
                text-align: center;
                font-weight: bold;
            }
        }

        .item-title{
            color: $light_gray;
            font-weight: bold;
        }

        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }

        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }
</style>

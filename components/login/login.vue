<template>
    <div id="login-page">
        <nav-bar></nav-bar>

        <!--登录框部分-->

        <div id="login-layout" ref="login">
            <div id="login">
                <i class="el-icon-close disappear" @click="disappear()"></i>
                <div id="login-center">
                    <p class="baidu-icon"><span class="point">・</span><span>用户名密码登录</span></p>
                    <el-input v-model="input" placeholder="手机/邮箱/用户名" class="login-input-user"></el-input>
                    <el-input v-model="input" placeholder="密码" class="login-input-password"></el-input>
                    <el-checkbox v-model="checked" class="auto-login">下次自动登录</el-checkbox>
                    <br/>
                    <el-button type="primary" class="login-btn">登录</el-button>
                    <br/>
                    <a href="#" class="login-link login-forget-password">忘记密码？</a><br/>
                </div>

            </div>
            <div class="login-bottom">
                <a href="#" class="login-link login-scan">扫码登录</a>
                <a href="#" class="login-link login-register">立即注册</a>
            </div>
        </div>

        <footer-vue></footer-vue>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style >
    /*登录部分开始*/
    body {
        background-color: rgba(0,0,0,.02);
    }
    #login-page {
        position: relative;
        z-index: 999;
        background-color: rgba(0,0,0,.2);

    }

    router-link {
        text-decoration: underline;
        cursor: pointer;
    }

    #login-layout {
        width: 356px;
        height: 420px;
        position: absolute;
        top: 254px;
        left: 773px;
    }

    #login {
        width: 302px;
        height: 335px;
        background-color: #fff;
        padding: 25px 26px 0 28px;
    }
    #login-layout #login .disappear {
        cursor: pointer;
    }
    .el-icon-close {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    #login .baidu-icon {
        width: 300px;
        height: 32px;
        background: url(../../src/static/imgs/baidu.png) no-repeat left top;
        background-size: 30%;
        margin-bottom: 42px;
    }

    #login .baidu-icon .point {
        margin: 21px 12px 6px 92px;
    }

    #login .baidu-icon span {
        line-height: 40px;
    }

    .login-input-user {
        margin-bottom: 16px;
    }

    .login-input-password {
        margin-bottom: 22px;
    }

    .auto-login {
        margin-bottom: 16px;
    }

    .login-btn {
        width: 100%;
        margin-bottom: 14px;
    }

    .login-link {
        text-decoration: none;
        color: #3282FD;
    }

    .login-forget-password {
        font-size: 10px;
    }

    .login-bottom {
        height: 36px;
        width: 302px;
        padding: 24px 26px 0 28px;
        background-color: #EFF5FE;
        font-size: 13px;
    }

    .login-bottom .login-scan {
        margin-right: 190px;
    }
</style>
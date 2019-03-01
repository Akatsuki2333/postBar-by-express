<template>
    <div id="top" ref="top" :modal-append-to-body="false">
        <!--连接部分 遮罩部分-->
        <div id="top-banner" :modal-append-to-body="false">
            <ul id="top-banner-list">
                <li class="before banner-list"><a href="" class="top-banner-link">网页</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">资讯</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">贴吧</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">知道</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">视频</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">音乐</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">图片</a></li>
                <li class="before banner-list"><a href="" class="top-banner-link">地图</a></li>
                <li class="before banner-list before-last-one"><a href="" class="top-banner-link">文库</a></li>
                <li class="line banner-list">|</li>
                <li class="after banner-list"><a href="" class="top-banner-link">百度首页</a></li>

                <li class="after banner-list"><a href="#" class="top-banner-link">{{userName}}</a></li>
                <li class="after banner-list"><a href="" class="top-banner-link">问题反馈</a></li>

                <li class="after banner-list"><a class="top-banner-link logout" @click="logout">退出</a></li>
                <li class="after banner-list" @mouseenter="pullDown" @mouseleave="pullUp">
                    <a href="" class="top-banner-link">
                        <i class="member"></i>
                        会员
                        <i class="pull-down"></i>
                    </a>
                    <ul class="pull-down-box" ref="pullDown">
                        <li class="pull-down-change-bgc"><a href=""><i class="money"></i>T豆钱包</a></li>
                        <li class="pull-down-change-bgc"><a href=""><i class="shop"></i>T豆商城</a></li>
                        <li class="pull-down-change-bgc"><a href=""><i class="member-net"></i>会员官网</a></li>
                    </ul>
                </li>
            </ul>
        </div>

        <!--搜索部分-->
        <div id="banner-search">
            <div class="banner-search-center">
                <span class="baidu-icon"></span>
                <span class="search-box"><el-input v-model="search" placeholder="耳机"></el-input></span>
                <el-button type="primary">进入贴吧</el-button>
                <el-button type="primary" plain class="search-all">全吧搜索</el-button>
                <a href="" class="high-class-search">高级搜索</a>
            </div>
        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm :{
                    userName: "",
                    password: "",
                },
                search: "",
                dialogFormVisible: false,
                formLabelWidth: '120px',
                checked : true,
                isShow : true,
            }
        },

        props : [ "userName" ],//声明接收父组件参数

        methods: {
            //当鼠标经过时
            pullDown() {
                this.$refs.pullDown.style.display = "block";
            },
            // 当鼠标离开时
            pullUp() {
                this.$refs.pullDown.style.display = "none";
            },
            login(){
                var obj = JSON.stringify(this.ruleForm);
                this.$ajax.post("http://192.168.0.122:8081/api/user/login",JSON.parse(obj))
                    .then( res => {  //用户登录成功，头部变成已登录状态。此时后台也返回了所有的信息。
                        this.isShow = false
                    })
                    .catch( err => {
                            console.log(err);
                        }
                    )

            },
            logout(){
                this.$ajax.get("/user/logout")
                    .then( res => {
                        console.log(res.data);
                    })
                    .catch( err => {
                        console.log(err);
                    })
                this.$router.push({name : "/"});
            },
        },

    }
</script>
<style scoped>
    #top {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
    }

    #top-banner {
        height: 32px;
        width: 100%;
        border-bottom: 1px solid #EAEAEA;
        position: relative;
        background-color: #fff;

    }

    #top-banner-list {
        position: absolute;
        right: 20px;
    }

    #top-banner-list .banner-list {
        float: left;
        margin-right: 22px;
    }

    #top-banner-list .banner-list .top-banner-link {
        text-decoration: underline;
        line-height: 32px;
        color: #323232;
        font-size: 13px;
    }

    #top-banner-list .banner-list .top-banner-link-login {
        padding: 0;
    }
    #top-banner-list .logout {
        cursor: pointer;
    }
    

    #top-banner-list .before {
        font-weight: bold;
    }

    /*中间的分割线*/
    #top-banner-list .line {
        line-height: 32px;
        margin-right: 24px;
        color: #EAEAEA;
    }

    /*会员部分开始*/
    #top-banner-list li:last-child {
        margin-right: 0;
        position: relative;
        width: 90px;
    }

    /* 小图标的公共部分 */
    #top-banner-list li:last-child i {
        display: inline-block;
        width: 16px;
        height: 16px;
        position: relative;
        top: 4px;
        font-size: 12px;
        margin-right: 4px;
    }

    #top-banner-list li:last-child .member {
        background: url(../../src/static/imgs/member.png) no-repeat center center;
    }

    /*会员部分下拉框*/
    #top-banner-list li:last-child .pull-down {
        font-size: 12px;
        background: url(../../src/static/imgs/pull-down.png) no-repeat center center;
    }

    /* 下拉框突出部分 */
    #top-banner-list li:last-child .pull-down-box {
        display: none;
        width: 90px;
        height: 78px;
        border: 1px solid #d0d0d0;
    }

    #top-banner-list li:last-child .pull-down-box li {
        line-height: 26px;
        font-size: 10px;
    }

    #top-banner-list li:last-child .pull-down-box li .money {
        background: url(../../src/static/imgs/money.png) no-repeat center center;
    }

    #top-banner-list li:last-child .pull-down-box li .shop {
        background: url(../../src/static/imgs/shop.png) no-repeat center center;
    }

    #top-banner-list li:last-child .pull-down-box li .member-net {
        background: url(../../src/static/imgs/member2.png) no-repeat center center;
    }

    #top-banner-list li:last-child .pull-down-box li a {
        text-decoration: none;
        line-height: 20px;
        margin-left: 11px;
    }

    #top-banner-list .before-last-one {
        margin-right: 25px;
    }

    /*搜索栏部分开始*/
    #banner-search {
        height: 102px;
        background-color: #fff;
    }

    #banner-search .banner-search-center {
        width: 1034px;
        height: 102px;
        margin: 0 auto;
        line-height: 102px;
    }

    #banner-search .baidu-icon {
        display: inline-block;
        width: 135px;
        height: 45px;
        position: relative;
        top: 10px;
        font-size: 12px;
        margin-right: 12px;
        background: url(../../src/static/imgs/baidu.png) no-repeat center center;
        background-size: 100%;
    }

    .search-box {
        display: inline-block;
        width: 534px;
        height: 38px;
    }

    .el-input__inner {
        border: 1px solid #B7B7B7;
    }

    .el-button--primary.is-plain {
        background: #fff;
        color: #409EFF;
    }

    .high-class-search {
        margin-left: 10px;
        color: #000;
        font-size: 14px;
    }

    .el-button {
        border-radius: 0;
    }

    /*登录弹框部分开始*/
    .el-dialog__body {
        padding: 0;
    }
    .el-dialog__header {
        padding: 0;
    }
    router-link {
        text-decoration: underline;
        cursor: pointer;
    }

    #login-layout {
        width: 356px;
        height: 420px;
    }

    #login {
        width: 302px;
        height: 335px;
        background-color: #fff;
        padding: 25px 26px 0 28px;
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
<template>
    <div id="post-center">
        <!--左边评论信息部分，左浮动-->
        <div id="post-content-left">
            <div class="post-content-detail">
                <!--头部的title部分-->
                <div id="post-content-title">
                    <span class="content-title">刚才看推送，笑死我了。难怪HiFi交易经常看到甩卖谢兰图的，</span>
                    <span class="content-title-icon">
                        <i class="title-icon title-icon-editor">只看楼主</i>
                        <i class="title-icon title-icon-collect">收藏</i>
                        <i class="title-icon title-icon-reply" @click="replyButton">回复</i>
                   </span>
                </div>
                <div id="post-content">
                    <!--左边的头像用户名部分-->
                    <ul class="author">
                        <li class="author-logo"></li>
                        <li class="author-pic">
                            <img src="../../src/static/imgs/author-pic.jpg" alt="">
                        </li>
                        <li class="author-id">earth姓冷淡</li>
                        <li class="author-icons"></li>
                        <li class="author-badge">小鹿乱撞 <i class="author-badge-icon">3</i></li>
                    </ul>
                    <!--右边的评论部分-->
                    <div class="post-content-main">
                        <p>刚才看推送，笑死我了。难怪HiFi交易经常看到甩卖谢兰图的，原来被Gr09秒杀了</p>
                        <img src="../../src/static/imgs/main-img.jpg" alt="">

                        <div class="floor">
                            <i class="tip-off"></i>
                            <i class="floor-num">1楼</i>
                            <i class="floor-time">2018-11-26 10:26</i>
                            <div class="floor-reply">
                                <span @click="showReply" ref="reply" class="reply">回复</span>
                                <span ref="pullUpReply" class="pullUpReply" @click="hideReply">收起回复</span>
                            </div>
                            <ul class="reply-reply" ref="replyReply">

                                <!--作为回复内容动态插入-->
                                <li class="reply-author" v-show="replyAuthor">
                                    <i class="reply-avatar"></i>
                                    <i class="reply-name">ww楚钦</i>
                                    <span class="reply-content">:&nbsp; {{textReply}}</span>
                                    <p>
                                        <i class="reply-time">2018-11-27 13:09</i>
                                        <i class="reply-reply-reply">回复</i>
                                    </p>
                                </li>

                                <li>
                                    <textarea name="" id="" cols="30" rows="10" class="reply-box"
                                              v-model="textReply"></textarea>
                                    <p v-show="warning" class="warning">发贴内容需包含文字</p>
                                    <div>
                                        <span class="submit" @click="submit">发表</span>
                                        <span class="emoji"></span>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--右边登录框部分，右浮动-->
        <div id="post-content-right">
            <div class="post-content-login">
                <div id="login">
                    <span class="login-logo">登录百度帐号</span>
                    <div class="login-center">
                        <el-input v-model="ruleForm.userName" placeholder="手机/邮箱/用户名"
                                  class="login-input-user"></el-input>
                        <el-input v-model="ruleForm.password" placeholder="密码" class="login-input-password"
                                  type="password"></el-input>
                        <el-checkbox v-model="checked" class="auto-login">下次自动登录</el-checkbox>
                        <a href="#" class="login-link login-forget-password">忘记密码？</a><br/>
                        <span v-show="isShow" class="warning"> 用户名或者密码错误，请重试</span>
                        <br/>
                        <el-button type="primary" class="login-btn" @click="login">登录</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>

    export default {
        data() {
            return {
                input: "",
                input1: "",
                checked: true,
                ruleForm: {
                    userName: "",
                    password: "",
                },
                isShow: false,
                warning: false,
                textReply: "",
                replyAuthor: false,
            }
        },
        methods: {
            // 登录
            login() {
                var obj = JSON.stringify(this.ruleForm);
                this.$ajax.post("http://192.168.0.122:8081/api/user/login", JSON.parse(obj))
                    .then(res => {  //用户登录成功，跳转到已登录的首页
                        alert("已登录啦，随便啦，这里是写来玩的 ！！")
                    })
                    .catch(err => {  //用户账号或者密码错误，报错。
                            this.isShow = true;
                        }
                    )
            },
            // 发送点击回复按钮的信号给 topic 父亲
            replyButton() {
                this.$emit('blur')
            },
            showReply() {
                this.$refs.reply.style.display = "none";
                this.$refs.pullUpReply.style.display = "block";
                this.$refs.replyReply.style.display = "block";


            },
            hideReply() {
                this.$refs.reply.style.display = "block";
                this.$refs.pullUpReply.style.display = "none";
                this.$refs.replyReply.style.display = "none";
            },
            submit() {
                if (this.textReply == "") {
                    this.warning = true;
                } else {
                    //如果内容不为空，把数据插到数据库，然后拿到返回的数据更新到页面中。
                    this.warning = false;
                    this.replyAuthor = true;
                }
            }
        }
    }
</script>
<style scoped>
    #post-center {
        width: 980px;
        background-color: #FEFEFE;
        overflow: hidden;
    }

    #post-content-left {
        float: left;
        width: 739px;
        overflow: hidden;
        border: 1px solid #E0E3E5;
        margin-top: -1px;

    }

    #post-content-left .post-content-detail {
        width: 739px;
        border: 1px solid #E0E3E5;
    }

    /*左边帖子具体内容开始*/
    #post-content-title {
        width: 719px;
        height: 57px;
        border-bottom: 1px solid #BABCBE;
        padding-left: 20px;
        line-height: 57px;
        overflow: hidden;
    }

    #post-content-title .content-title {
        float: left;
    }

    #post-content-title .content-title-icon {
        float: right;
        margin-right: 8px;
    }

    #post-content-title .title-icon {
        display: inline-block;
        width: 67px;
        height: 25px;
        background: url(../../src/static/imgs/tipicDetail.png) no-repeat -8px -7px;
        font-size: 10px;
        text-align: center;
        line-height: 25px;
        cursor: pointer;
    }

    #post-content-title .title-icon-reply {
        width: 60px;
        height: 25px;
        background-position: -174px -8px;
    }

    #post-content {
        position: relative;
        padding-left: 130px;
    }

    /*左边的用户信息部分*/
    #post-content .author {
        position: absolute;
        left: 0;
        top: 0;
        width: 88px;
        height: 192px;
        padding: 19px 21px;
    }

    #post-content .author-logo {
        position: absolute;
        top: 0;
        right: 0;
        width: 36px;
        height: 36px;
        background: url(../../src/static/imgs/tipicDetail.png) no-repeat -172px -120px;
    }

    #post-content .author-pic {
        width: 86px;
        height: 83px;
        border: 1px solid #CBCBCB;
        text-align: center;
        padding-top: 3px;
        margin-bottom: 8px;
    }

    #post-content .author-pic img {
        width: 80px;
        height: 80px;

    }

    #post-content .author-id {
        height: 39px;
        line-height: 39px;
        width: 88px;
        font-size: 12px;
        margin-left: 10px;
    }

    #post-content .author-icons {
        width: 83px;
        height: 20px;
        margin: 0 auto;
        border: 1px solid #E5E5E5;

    }

    #post-content .author-badge {
        width: 98px;
        height: 28px;
        margin-top: 9px;
        margin-left: -7px;
        border: 1px solid #E5E5E5;
        font-size: 14px;
        line-height: 28px;
        text-align: center;
    }

    #post-content .author-badge .author-badge-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        line-height: 23px;
        background: url(../../src/static/imgs/tipicDetail.png) no-repeat -9px -93px;
        color: #B55D06;
        font-size: 12px;
    }

    #post-content .post-content-main {
        padding-left: 20px;
        padding-top: 19px;
    }

    #post-content .post-content-main .floor {
        margin: 40px 21px 15px 0;
        text-align: right;
        font-size: 10px;
        color: #B29898;
    }

    #post-content .post-content-main .floor i {
        margin-right: 5px;
    }

    #post-content .post-content-main .floor .tip-off {
        display: inline-block;
        width: 40px;
        height: 12px;
        background: url(../../src/static/imgs/tip-off.png) no-repeat;
        background-size: 40px 13px;

    }

    #post-content .post-content-main .floor .floor-reply {
        display: inline-block;
        cursor: pointer;
        color: #2E64B1;
    }

    /* 收起回复部分*/
    #post-content .post-content-main .floor .pullUpReply {
        display: none;
        text-align: center;
        line-height: 27px;
        width: 80px;
        height: 27px;
        background-color: #F6F7F9;
        border-top: 1px solid #EFF0F1;
        border-left: 1px solid #EFF0F1;
        border-right: 1px solid #EFF0F1;
        border-bottom: 1px solid #F6F7F9;
    }

    /*回复中的回复区域*/
    #post-content .post-content-main .floor .reply-reply {
        width: 536px;
        border: 1px solid #EFF0F1;
        background-color: #F6F7F9;
        margin-top: -1px;
        padding: 3px 15px;
        color: #323232;
        display: none;
    }

    #post-content .post-content-main .floor .reply-reply .warning {
        text-align: left;
        font-size: 12px;
        color: red;
        margin-bottom: 5px;
    }

    #post-content .post-content-main .floor .reply-reply .reply-box {
        width: 525px;
        height: 43px;
        resize: none;
        border-color: #D5DEF9;
        margin: 16px 8px 11px 0;
    }

    /*控制底部表情和回复的盒子*/
    #post-content .post-content-main .floor .reply-reply div {
        line-height: 24px;
        overflow: hidden;
        margin-bottom: 15px;
    }

    #post-content .post-content-main .floor .reply-reply .emoji {
        cursor: pointer;
        float: right;
        width: 33px;
        height: 22px;
        margin-right: 15px;
        background: url(../../src/static/imgs/insertsmiley_icon_711ec2d.png) no-repeat;
    }

    #post-content .post-content-main .floor .reply-reply .submit {
        cursor: pointer;
        text-align: center;
        color: #FEFEFE;
        float: right;
        width: 51px;
        height: 23px;
        background: url(../../src/static/imgs/tipicDetail.png) no-repeat -344px -7px;
    }

    /*回复的具体内容，动态添加*/
    #post-content .post-content-main .floor .reply-reply .reply-author {
        width: 504px;
        border-bottom: 1px dotted #D6D6D6;
        position: relative;
        padding: 14px 0 12px 40px;
        text-align: left;
    }

    #post-content .post-content-main .floor .reply-author .reply-avatar {
        position: absolute;
        top: 10px;
        left: 0;
        width: 32px;
        height: 32px;
        background: url(../../src/static/imgs/avatar.jpg) no-repeat;
        background-size: 100%;
    }

    #post-content .post-content-main .floor .reply-author .reply-name {
        color: #2E64B1;
    }

    #post-content .post-content-main .floor .reply-author p {
        margin-top: 12px;
        text-align: right;
    }

    #post-content .post-content-main .floor .reply-author p .reply-time {
        color: #A498B1;
    }

    #post-content .post-content-main .floor .reply-author p .reply-reply-reply {
        cursor: pointer;
    }

    /*右边的评论内容部分*/
    #post-content-right {
        float: right;
        width: 238px;
        border: 1px solid #E0E3E5;
        margin-left: -1px;
        margin-top: -1px;

    }

    /*右边登录框部分*/
    #post-content-right .post-content-login {
        border: 1px solid #E0E3E5;
    }

    router-link {
        text-decoration: underline;
        cursor: pointer;
    }

    #login {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    /*密码或用户名错误提示*/
    #login .warning {
        color: red;
        font-size: 10px;
    }

    #login .login-logo {
        display: inline-block;
        width: 191px;
        height: 37px;
        background: url(../../src/static/imgs/baidu_logo.png) no-repeat 10px center;
        background-color: #F6F6F6;
        padding-left: 45px;
        margin-bottom: 30px;
        line-height: 37px;
    }

    .login-center {
        padding: 10px;
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
        margin-bottom: 50px;
        height: 30px;
        line-height: 4px;
    }

    .login-link {
        text-decoration: none;
        color: #3282FD;
    }

    .login-forget-password {
        font-size: 14px;
        margin-left: 33px;
    }

</style>
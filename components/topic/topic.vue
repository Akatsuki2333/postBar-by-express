<template>
    <div>
        <nav-bar></nav-bar>
        <!--头部部分-->
        <div id="content">
            <!--头部部分-->
            <div id="content-introduce">
                <span class="earphone-img"></span>
                <i class="title">耳机吧 </i> <i class="interest">关注：</i><i class="amount">1,816,854</i> &nbsp &nbsp <i
                    class="interest">帖子：</i><i class="amount">39,922,983</i>

            </div>
            <!--tab栏部分-->
            <ul id="content-tab">
                <li class="content-txt"><i class="el-icon-document"></i>看贴</li>
                <li class="line">|</li>
                <li class="content-txt"><i class="el-icon-picture"></i>图片</li>
                <li class="line">|</li>
                <li class="content-txt"><i class="el-icon-star-on"></i>精品</li>
                <li class="line">|</li>
                <li class="content-txt"><i class="iconfont icon-shipin"></i>视频</li>
                <li class="line">|</li>
                <li class="content-txt"><i class="iconfont icon-youxi"></i>游戏</li>
            </ul>
            <div class="content-tab-nav">
                <span><i class="reply-num">38</i>回复贴，共 <i class="reply-page">1</i>页</span>
                <a href="" @click="goBack"> << 返回耳机吧</a>
            </div>

            <!--侧边栏固定部分开始-->
            <div id="sidebar">
                <ul>
                    <li class="sidebar-icon"></li>
                    <li class="sidebar-icon"></li>
                    <li class="sidebar-icon"></li>
                    <li class="sidebar-icon"></li>
                </ul>
            </div>

            <topic-detail @blur="change"></topic-detail>
            <reply-part ref="reply"></reply-part>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            change(){
                this.$refs.reply.$refs.edit.focus();
            }
        }
    }
</script>
<style scoped>
    /*头部样式部分*/
    #content {
        width: 978px;
        margin: 0 auto;

    }

    #content-introduce {
        width: 848px;
        height: 54px;
        border: 1px solid #E4E4E4;
        background-color: #F3F5F8;
        position: relative;
        padding: 27px 0 0 130px;
    }

    #content-introduce .earphone-img {
        background: url(../../src/static/imgs/earphone.jpg) no-repeat center center;
        width: 70px;
        height: 70px;
        background-size: 80%;
        position: absolute;
        left: 30px;
        top: 5px;
    }

    #content-introduce .title {
        font-size: 24px;
        margin-right: 5px;
    }

    #content-introduce .interest {
        color: #A9A9A9;
        font-size: 12px;
    }

    #content-introduce .amount {
        color: #FE7E74;
        font-size: 12px;
    }
    /*tab栏开始*/
    #content-tab {
        width: 100%;
        height: 44px;
        background-color: #EDEEF2;
        border: 1px solid #E4E4E4;
    }
    #content-tab li {
        float: left;
        margin: 0 10px;
        line-height: 44px;
    }
    #content-tab .content-txt {
        font-size: 17px;
        color: #6F7A8B;
    }
    #content-tab .content-txt i {
        margin: 0 5px;
    }
    #content-tab .line {
        color:  #D3D7E0;
    }

    /*侧边栏部分样式*/
    #sidebar {
        position: fixed;
        /*是固定在左边距离父亲10px处   盒子宽为45 margin-left: -55px; */
        /*是固定在左边距离父亲10px处   父亲宽为980 */
        margin-left: 990px;
        margin-top: 300px;
    }
    #sidebar .sidebar-icon{
        margin-bottom: 7px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        background-color: #FAFAFA;
        border: 1px solid #CDCDCD;
        cursor: pointer;
    }
    #sidebar .sidebar-icon:nth-child(1) {
        background: url(../../src/static/imgs/icon_fbar_down.png) no-repeat 0 0;
    }
    #sidebar .sidebar-icon:nth-child(1):hover {
        background: url(../../src/static/imgs/icon_fbar_down_hover.png) no-repeat 0 0;
    }
    #sidebar .sidebar-icon:nth-child(2) {
        background: url(../../src/static/imgs/aside_float_bar.png) no-repeat 0 0;
    }
    #sidebar .sidebar-icon:nth-child(2):hover {
        background: url(../../src/static/imgs/aside_float_bar.png) no-repeat -48px 0;
    }
    #sidebar .sidebar-icon:nth-child(3) {
        background: url(../../src/static/imgs/aside_float_bar.png) no-repeat 0 -148px;
    }
    #sidebar .sidebar-icon:nth-child(3):hover {
        background: url(../../src/static/imgs/aside_float_bar.png) no-repeat -48px -148px;
    }
    #sidebar .sidebar-icon:nth-child(4) {
        background: url(../../src/static/imgs/aside_toolbar_lab.png) no-repeat 0 0;
    }
    #sidebar .sidebar-icon:nth-child(4):hover {
        background: url(../../src/static/imgs/aside_toolbar_lab.png) no-repeat -48px 0;
    }
/*设置自定义图标的大小*/
    #content-tab .iconfont {
        font-size: 17px;
    }

    #content .content-tab-nav{
        width: 100%;
        height: 44px;
        background-color: #F4F6F9;
        border: 1px solid #E6E8EA;
        font-size: 12px;
        line-height: 44px;
    }

    #content .content-tab-nav i{
        color: red;
    }
    #content .content-tab-nav i:nth-child(1) {
        margin-left: 20px;
    }
    #content .content-tab-nav span {
        float: left;
    }
    #content .content-tab-nav a {
        float: right;
        text-decoration: none;
        margin-right: 20px;
        color: #2E64B1;
    }
</style>
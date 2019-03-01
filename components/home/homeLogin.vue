<template>
    <div>
        <nav-login :userName="name"></nav-login>
        <div id="home-content">
            <!--头部部分-->
            <div id="content">
                <!--banner大图部分-->
                <div id="banner"></div>

                <!--头部的详细文字部分-->
                <div id="content-introduce">
                    <span class="earphone-img"></span>
                    <i class="title">耳机吧 </i> <i class="interest">关注：</i><i class="amount">1,816,854</i> &nbsp &nbsp <i
                        class="interest">帖子：</i><i class="amount">39,922,983</i>
                    <p><i class="interest">目录：</i><i class="classify"> 数码家电</i></p>
                </div>

                <!--头部的tab栏部分-->
                <ul id="content-tab">
                    <li class="content-txt">看贴</li>
                    <li class="content-txt">图片</li>
                    <li class="content-txt">精品</li>
                    <li class="content-txt">视频</li>
                    <li class="content-txt">群组</li>
                    <li class="content-txt-last">
                        <el-input v-model="input" placeholder="请输入内容" class="content-tab-search"></el-input>
                        <span class="el-icon-search search-icon"></span>
                    </li>
                </ul>

                <!--侧边栏固定部分开始-->
                <div id="sidebar">
                    <ul>
                        <li class="sidebar-icon"></li>
                        <li class="sidebar-icon" @click="autofocus"></li>
                        <li class="sidebar-icon"></li>
                        <li class="sidebar-icon" @mouseenter="appear" @mouseleave="disappear">
                            <ul class="share-bar" ref="shareBar">
                                <li class="share-icon"></li>
                                <li class="share-icon"></li>
                                <li class="share-icon"></li>
                                <li class="share-icon"></li>
                                <li class="share-icon"></li>
                            </ul>
                        </li>
                        <li class="sidebar-icon"></li>
                        <li class="sidebar-icon"></li>


                    </ul>
                </div>

                <!--评论区开始-->
                <div id="comment">
                    <ul class="comment-left">
                        <li class="comment-stick">
                            <span class="comment-chat-sign">160</span>
                            <i class="comment-stick-icon comment-stick-icon1"></i>
                            <i class="comment-stick-icon comment-stick-icon2"></i>
                            <i class="comment-stick-icon comment-stick-icon4"></i>

                            <a href="#">耳机吧公告 梅兰竹菊版耳机吧公告 </a>
                            <span class="comment-stick-user"><i
                                    class="comment-stick-icon comment-stick-icon3"></i>翁楚钦</span>
                        </li>
                        <li class="comment-normal">
                            <span class="comment-chat-sign">12</span>
                            <router-link :to="{name : 'topic'}" target="_blank" class="comment-title">AKG Y40耳机～
                                准备入手啦！
                            </router-link>
                            <span class="comment-stick-user"><i
                                    class="comment-stick-icon comment-stick-icon3"></i>翁楚钦</span>
                            <ul class="comment-detail">
                                <li class="ellipsis-sign detail-txt">妹子镇楼！！！ 萌新请假大佬支援 我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                    萌新请假大佬支援
                                    我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                </li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                            </ul>
                        </li>
                        <li class="comment-normal">
                            <span class="comment-chat-sign">12</span>
                            <router-link :to="{name : 'topic'}" target="_blank" class="comment-title">AKG Y40耳机～
                                准备入手啦！
                            </router-link>
                            <span class="comment-stick-user"><i
                                    class="comment-stick-icon comment-stick-icon3"></i>翁楚钦</span>
                            <ul class="comment-detail">
                                <li class="ellipsis-sign detail-txt">妹子镇楼！！！ 萌新请假大佬支援 我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                    萌新请假大佬支援
                                    我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                </li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                            </ul>
                        </li>
                        <li class="comment-normal">
                            <span class="comment-chat-sign">12</span>
                            <router-link :to="{name : 'topic'}" target="_blank" class="comment-title">AKG Y40耳机～
                                准备入手啦！
                            </router-link>
                            <span class="comment-stick-user"><i
                                    class="comment-stick-icon comment-stick-icon3"></i>翁楚钦</span>

                            <ul class="comment-detail">
                                <li class="ellipsis-sign detail-txt">妹子镇楼！！！ 萌新请假大佬支援 我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                    萌新请假大佬支援
                                    我现在用的是ie80s，双十一入了一条穷邦的mu1和妹子镇楼！！！
                                </li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                                <li class="detail-img"></li>
                            </ul>
                        </li>


                    </ul>
                    <div class="comment-right">

                    </div>
                </div>
            </div>

            <!--发帖部分-->
            <post-part ref="child"></post-part>

        </div>


    </div>
</template>
<script>
    export default {
        data() {
            return {
                input: "",
                name: "",
            }
        },
        methods: {
            appear() {
                this.$refs.shareBar.style.display = "block";
            },
            disappear() {
                this.$refs.shareBar.style.display = "none";
            },
            autofocus() {
                this.$refs.child.$refs.input.focus();
            }
        },
        created() {
            this.$ajax.get("/user/loginUser")
                .then(res => {
                    console.log(res.data);
                   this.name = res.data.userName;
                   console.log(this.name);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        mounted(){

        }
    }
</script>
<style scoped>
    a {
        text-decoration: none;
    }

    #home-content {
        background-color: #DBEEFD;
    }

    #banner {
        width: 980px;
        height: 180px;
        background: url(../../src/static/imgs/banner.jpg) no-repeat;
        margin: 0 auto;
    }

    /*侧边栏部分样式*/
    #sidebar {
        position: fixed;
        /*是固定在左边距离父亲10px处   盒子宽为45 margin-left: -55px; */
        /*是固定在左边距离父亲10px处   父亲宽为980 */
        margin-left: 990px;
        z-index: 10;
        /*注意：要给父亲加 z-index: 999;*/
    }

    #sidebar .sidebar-icon {
        margin-bottom: 7px;
        width: 45px;
        height: 45px;
        line-height: 45px;
        background-color: #EBF1FB;
        font-size: 26px;
        text-align: center;
        cursor: pointer;

    }

    #sidebar .sidebar-icon:nth-child(1) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat 0 -220px;
    }

    #sidebar .sidebar-icon:nth-child(1):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -55px -220px;
    }

    #sidebar .sidebar-icon:nth-child(2) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -220px -110px;
    }

    #sidebar .sidebar-icon:nth-child(2):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -220px -165px;
    }

    #sidebar .sidebar-icon:nth-child(3) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -220px 0;
    }

    #sidebar .sidebar-icon:nth-child(3):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -220px -55px;
    }

    #sidebar .sidebar-icon:nth-child(4) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -110px -165px;
        position: relative;
    }

    #sidebar .sidebar-icon:nth-child(4):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -165px -165px;
        position: relative;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-bar {
        position: absolute;
        z-index: 9999;
        right: 45px;
        width: 222px;
        height: 45px;
        line-height: 45px;
        border: 1px solid #E3E5EA;
        background-color: #fff;
        display: none;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon {
        width: 32px;
        height: 32px;
        float: left;
        margin: 6px;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(1) {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat 0 0;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(1):hover {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat 0 -34px;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(2) {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -42px 0;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(2):hover {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -42px -34px;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(3) {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -84px 0;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(3):hover {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -84px -34px;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(4) {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -126px 0;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(4):hover {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -126px -34px;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(5) {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -168px 0;
    }

    #sidebar .sidebar-icon:nth-child(4) .share-icon:nth-child(5):hover {
        background: url(../../src/static/imgs/tbshare_popup.png) no-repeat -168px -34px;
    }

    #sidebar .sidebar-icon:nth-child(5) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -110px -110px;
    }

    #sidebar .sidebar-icon:nth-child(5):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -165px 0;
    }

    #sidebar .sidebar-icon:nth-child(6) {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat -165px -55px;
    }

    #sidebar .sidebar-icon:nth-child(6):hover {
        background: url(../../src/static/imgs/aside_float_bar-homepage.png) no-repeat 0 0;
    }

    .iconfont {
        font-size: 26px;
    }

    #sidebar .sidebar-icon a {
        text-decoration: none;
    }

    /*头部样式*/
    #content {
        width: 980px;
        margin: 0 auto;
        position: relative;
    }

    #content-introduce {
        width: 778px;
        height: 65px;
        border: 1px solid #E4E4E4;
        background-color: #F3F5F8;
        position: relative;
        padding: 16px 0 0 200px;
    }

    #content-introduce .earphone-img {
        background: url(../../src/static/imgs/earphone.jpg) no-repeat center center;
        width: 150px;
        height: 150px;
        position: absolute;
        left: 20px;
        top: -84px;
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

    #content-introduce .classify {
        color: #2E64B1;
        font-size: 12px;
    }

    /*tab栏开始*/
    #content-tab {
        width: 978px;
        height: 44px;
        background-color: #EDEEF2;
        border: 1px solid #E4E4E4;
        position: relative;
    }

    #content-tab .content-txt {
        float: left;
        margin: 0 20px;
        line-height: 44px;
    }

    #content-tab li.content-txt-last {
        position: absolute;
        right: 5px;
        height: 25px;
        margin-top: 10px;
    }

    #content-tab li.content-txt-last .search-icon {
        width: 31px;
        height: 23px;
        border: 1px solid #D8DADD;
        line-height: 21px;
        text-align: center;
        margin-left: -6px;
        background-color: #E7E9EC;
    }

    #content-tab .content-txt {
        font-size: 17px;
    }

    /*当当前element-ui的某个元素的宽度是父亲的100%，并且无法改变其宽度时，要改变其父亲的宽度。*/
    .el-input {
        width: 166px;
        height: 23px;
    }

    /*评论区开始*/
    #comment {
        background-color: #FEFEFE;
        overflow: hidden;
        position: relative;
    }

    #comment .comment-left {
        width: 740px;
        float: left;
        background-color: #FEFEFE;
    }

    #comment .comment-stick {
        height: 46px;
        line-height: 46px;
        border-bottom: 1px dashed #E3E5EA;
    }

    #comment .comment-stick a {
        font-size: 14px;
    }

    .comment-stick-icon {
        display: inline-block;
        height: 17px;
    }

    .comment-chat-sign {
        display: inline-block;
        width: 50px;
        height: 30px;
        line-height: 25px;
        text-align: center;
        margin: 10px 20px 16px 20px;
        background: url(../../src/static/imgs/chatbox.png) no-repeat 0 0;
    }

    #comment .comment-stick .comment-stick-icon1 {
        width: 31px;
        background: url(../../src/static/imgs/sprite.png) no-repeat -172px -108px;
    }

    #comment .comment-stick .comment-stick-icon2 {
        width: 19px;
        background: url(../../src/static/imgs/sprite.png) no-repeat -130px -137px;

    }

    .comment-stick-icon3 {
        width: 10px;
        height: 10px;
        background: url(../../src/static/imgs/thread_list.png) no-repeat -35px -65px;
        margin-right: 5px;
    }

    /*公有部分，头像和名字。开始*/
    .comment-stick-icon4 {
        position: absolute;
        right: 239px;
        width: 26px;
        height: 26px;
        background: url(../../src/static/imgs/hidden-sign.png) no-repeat 0 0;
    }

    .comment-stick-user {
        position: absolute;
        left: 560px;
        font-size: 10px;
        color: #989898;
    }

    .comment-normal .comment-stick-user {
        top: 10px;
    }

    /*公有部分，头像和名字。结束*/

    #comment .comment-normal {
        height: 237px;
        width: 100%;
        border-bottom: 1px dashed #E3E5EA;
        line-height: 25px;
        position: relative;
    }

    #comment .comment-normal .comment-title {
        font-size: 14px;
    }

    #comment .comment-normal .comment-detail {
        margin-left: 90px;
        font-size: 12px;
    }

    .ellipsis-sign {
        width: 450px;
        white-space: nowrap;
        text-overflow: ellipsis;
        /*不要忘记 overflow: hidden; */
        overflow: hidden;
    }

    /*评论区右部分*/
    #comment .comment-right {
        width: 238px;
        height: 760px;
        /*这里的高腰跟左边的高一样*/
        border: 1px solid #E3E5EA;
        background-color: #FEFEFE;
        float: right;
        margin-top: -1px;
    }

</style>
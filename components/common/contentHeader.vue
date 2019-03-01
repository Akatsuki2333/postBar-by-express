<template>
    <div id="content-header">
        <div id="content-introduce">
            <span class="earphone-img"></span>
            <i class="title">耳机吧 </i> <i class="interest">关注：</i><i class="amount">1,816,854</i> &nbsp &nbsp <i
                class="interest">帖子：</i><i class="amount">39,922,983</i>

        </div>
        <ul id="content-tab">
            <li class="content-txt"><i class="el-icon-document"></i>看贴</li>
            <li class="line">|</li>
            <li class="content-txt"><i class="el-icon-picture"></i>图片</li>
            <li class="line">|</li>
            <li class="content-txt"><i class="el-icon-star-on"></i>精品</li>
            <li class="line">|</li>
            <li class="content-txt"><i class="el-icon-view"></i>视频</li>
            <li class="line">|</li>
            <li class="content-txt"><i class="el-icon-menu"></i>群组</li>
        </ul>

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
<style scoped>
    #content-header {
        width: 978px;
        height: 2000px;
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


</style>
<template>
    <div id="post">
        <div id="post-header">
            <span class="post-new"><i></i>发表新贴</span>
            <span class="post-vote"><i></i>发起投票</span>
            <span class="post-agreement">
                <i>发帖请遵守</i>
                <a href="#">贴吧协议及“七条底线”</a>
                <a href="#">贴吧投诉</a>
            </span>
        </div>
        <div id="post-content">
            <p>
                <el-input v-model="input" placeholder="请填写标题" class="topic-title" ref="input"></el-input><span class="topic-icon"></span>
            </p>
            <div class="post-input">
                <div class="emoji"></div>
                <textarea name="" id="" cols="30" rows="10" class="post-edit"></textarea>
                <el-checkbox v-model="checked">发表后自动分享本贴</el-checkbox><br/>
                <el-button type="primary">发表</el-button>
            </div>
        </div>
        <footer-vue></footer-vue>
    </div>

</template>
<script>
     export default {
        data(){
            return {
                input: '',
                checked:true,
            }
        },
        methods :{

        }
    }
</script>
<style scoped>
    #post {
        position: relative;
        width: 722px;
        height: 503px;
        background-color: #F5F5F5;
        padding: 23px 238px 0 20px;
        margin: 0 auto;
    }
    #post-header .post-new {
        font-weight: bold;
        margin-right: 19px;
        font-size: 15px;
    }
    #post-header .post-vote {
        margin-right: 240px;
        color: #9E9E9E;
        font-size: 15px;
    }
    #post-header .post-new i,
    #post-header .post-vote i
    {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 6px;
    }
    #post-header .post-new i {
        background: url(../../src/static/imgs/poster_icons.png) no-repeat 0 0;
    }
    #post-header .post-vote i {
        background: url(../../src/static/imgs/poster_icons.png) no-repeat 0 -30px;
    }

    #post-header .post-agreement{
        font-size: 12px;
    }
    #post-header .post-agreement a {
        margin-left: 5px;
        color: #9E9E9E;
    }
    #post-header .post-agreement a:nth-child(2){
        margin-right: 27px;
    }
    #post-content {
        padding: 18px 10px 15px 0;
    }
    #post-content .topic-title {
        width: 658px;
        height: 30px;
    }

    #post-content .topic-icon {
        display: inline-block;
        width: 47px;
        height: 20px;
        background: url(../../src/static/imgs/icon_topic.png) no-repeat 0 0;
        margin-left: 6px;
    }

    /*帖子内容编辑部分开始*/
    .post-input {
        width: 722px;
        height: 270px;
        margin-top: 15px;
    }
    .post-input .emoji {
        width: 720px;
        height: 48px;
        background-color: #F9F9F9;
        border: 1px solid #DEDEDE;
    }
    .post-input .post-edit {
        width: 718px;
        height: 222px;
        background-color: #FEFEFE;
        border: 2px solid #DEDEDE;
        margin-top: -2px;
        resize: none;

    }
    .el-checkbox {
        margin: 14px 0;
    }
    .el-checkbox__label{
        font-size: 12px;

    }
    .el-button {
        padding: 7px 13px;
        border-radius: 0;
    }

</style>
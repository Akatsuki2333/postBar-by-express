<template>
    <div id="reply">
        <div id="reply-center">
            <p class="reply-header">
                <span class="txt">发表回复</span>
                <span class="rules">发贴请遵守<a href="#">贴吧协议及“七条底线”</a></span>
            </p>
            <div class="reply-content">
                <div class="insert">
                    <span></span>
                    <i>|</i>
                    <span></span>
                    <i>|</i>
                    <span></span>
                    <i>|</i>
                    <span></span>
                    <i>|</i>
                    <span></span>
                </div>
                <div class="reply-box">
                    <textarea name="" id="" cols="30" rows="10" class="post-edit" ref="edit"></textarea>
                </div>
            </div>
            <el-button type="primary">发表</el-button>
        </div>
        <footer-vue></footer-vue>
    </div>


</template>
<script>

    export default {
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
    #reply {
        width: 978px;
        height: 535px;
        background-color: #F6F6F6;
        margin: -1px auto 93px;
        border: 1px solid #E4E4E4;

    }

    #reply-center {
        margin: 15px 228px 0 120px;
    }

    #reply .reply-header {
        line-height: 48px;
        width: 630px;
        height: 48px;
    }
    #reply .reply-header .txt {
        float: left;
        font-size: 14px;
        font-weight: bold;
    }
    #reply .reply-header .rules {
        float: right;
        color: #989898;
        font-size: 10px;
    }
    #reply .reply-header .rules a {
        text-decoration: none;
        color: #2E64B1;
    }

    /*回复框*/
    #reply  .reply-content {
        width: 614px;
        height: 282px;
        border: 1px solid #DEDEDE;
        padding-left: 14px;
        margin-bottom: 26px;
    }
    #reply  .reply-content .insert {
        width: 100%;
        height: 46px;
        line-height: 46px;
    }
    #reply  .reply-content .insert i {
        font-size: 10px;
        color: #DBDBDB;
    }
    
    #reply  .reply-content .insert span {
        cursor: pointer;
        height: 16px;
        display: inline-block;
        background: url(../../src/static/imgs/insert-part.png) no-repeat;
    }
    #reply  .reply-content .insert span:nth-child(1) {
        width: 82px;
        background-position: -558px 0;
    }

    #reply  .reply-content .insert span:nth-child(3) {
        width: 60px;
        background-position: 0 0;
    }

    #reply  .reply-content .insert span:nth-child(5) {
        width: 60px;
        background-position: -64px 0;
    }

    #reply  .reply-content .insert span:nth-child(7) {
        width: 60px;
        background-position: -197px 0;
    }

    #reply  .reply-content .insert span:nth-child(9) {
        width: 60px;
        background-position: -265px 0;
    }

    .post-edit {
        width: 596px;
        height: 220px;
        background-color: #FEFEFE;
        border: 1px solid #ccc;
        resize: none;
    }

</style>
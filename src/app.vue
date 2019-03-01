<template>
    <div id="app">
        <!--这里留的坑是为了分别渲染成 index，register，login页面等，点击那个哪个path跳转到哪个name去-->
        <router-view></router-view>
    </div>
</template>
<script>
     export default {
        data(){
            return {

            }
        },
        methods :{

        }
    }
</script>
<style>


</style>
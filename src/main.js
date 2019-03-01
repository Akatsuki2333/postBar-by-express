import Vue from 'vue';
import App from "./app.vue";


// Vue.directive('focus', {
//     inserted: function (el, obj) {
//         el.focus();
//     },
// })


// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


//配置 axios
import Axios from "axios";
//意思是携带cookie信息,保持session的一致性（异步请求每次的cookie都会不一样）
Axios.defaults.withCredentials = true;
Vue.prototype.$ajax = Axios;
// 1.默认配置  开启本地服务器VMware 的地址http://192.168.0.122:8081/api
// 2.用 node来做数据库
Axios.defaults.baseURL = 'http://localhost:8081/users/';


// 注册全局组件，即可以多次利用部分
// 未登录头部部分
import navBar from '../components/common/navBar.vue';
Vue.component("navBar", navBar);
// 已登录头部
import navLogin from "../components/common/navLogin.vue"
Vue.component("navLogin", navLogin);
// 尾部部分
import footer from '../components/common/footer.vue';
Vue.component("footerVue", footer);
// 内容部分的头部公共部分
import contentHeader from "../components/common/contentHeader.vue";
Vue.component("contentHeader", contentHeader);
// 底下发帖部分
import Post from "../components/post/post.vue";
Vue.component("postPart", Post);
// 中间评论内容部分
import TopicDetail from '../components/topic/topicDetail.vue';
Vue.component("topicDetail", TopicDetail);
// 底下回复部分
import Reply from "../components/post/reply.vue";
Vue.component("replyPart", Reply);


// 引入路由部分的 vue 文件，即导航要去的地方
import Home from '../components/home/home.vue';
import Register from '../components/register/register.vue';
import Login from '../components/login/login.vue';
import Topic from '../components/topic/topic.vue';
import HomeLogin from '../components/home/homeLogin.vue';


// 路由部分，即点完要跳转部分
import VueRouter from 'vue-router';

Vue.use(VueRouter);
let router = new VueRouter({
    routes: [

        {name: "/", path: "/", component: Home},
        {name: "register", path: "/register", component: Register},
        {name: "login", path: "/login", component: Login},
        {name: "topic", path: "/topic", component: Topic},
        {name: "homeLogin", path: "/home-login", component: HomeLogin},

    ],

})


// 引入全局的css 样式
import './static/css/global.css'


new Vue({
    el: "#app",
    router: router,
    render: c => c(App),
})
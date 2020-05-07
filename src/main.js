import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import moment from "moment";

Vue.filter('dateFormat', function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
});

import app from './App.vue'

import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router/router.js'

import axios from 'axios'

Vue.prototype.$axios = axios;

import { Tab, Tabs, Lazyload, Card, Button, Tag, NoticeBar, NavBar } from 'vant';
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/card/style'
import 'vant/lib/button/style'
import 'vant/lib/tag/style'
import 'vant/lib/notice-bar/style'
import 'vant/lib/nav-bar/style'
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Tag);
Vue.use(NoticeBar);
Vue.use(Lazyload, {
	lazyComponent: true,
});

// 设置全局请求头
const url='http://127.0.0.1:3008'
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem("x-auth-token");
		if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
			config.headers.token = `${token}`;
		}
		if (config.url.indexOf(url) === -1) {
			config.url = url + config.url;/*拼接完整请求路径*/
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	});

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
});

var vm = new Vue({
	el:'#app',
	render:c => c(app),
	router
});

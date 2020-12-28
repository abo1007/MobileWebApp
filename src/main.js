import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Vuex from 'vuex'

Vue.use(Vuex);
// 启动时获取localStorage的数据
var car = JSON.parse(localStorage.getItem('car') || '[]');
var store = new Vuex.Store({
	state:{
		car:car	// 将购物车中的商品数据，用一个数组存储起来，在car数组中，存储一些商品的对象，{ id:商品id, count: 要购买的数量, price:商品的单价, selected: true }
	},
	mutations:{
		addToCar(state,goodsinfo){		// 加入购物车保存信息
			let flag = false;
			// 如果之前已经有这个商品的话 直接增加数量
			state.car.some(item => {
				if(item.id == goodsinfo.id){
					item.count += goodsinfo.count;
					flag = true;
					return true;
				}
			});
			if(!flag){
				this.state.car.push(goodsinfo);
			}
			// 当更新car之后，将car数组存储到本地的lcoalStorage 中
			localStorage.setItem('car', JSON.stringify(state.car))
		},
		updateGoodsInfo(state,goodsinfo){
			state.car.some(item => {
				if(item.id == goodsinfo.id){
					item.count = parseInt(goodsinfo.count);
					return true;
				}
			})
		},
		removeFormCar(state,id){
			state.car.some((item,i) => {
				if(item.id == id){
					state.car.splice(i,1);
				}
			});
			// 将最新数据保存到本地存储中
			localStorage.setItem('car',JSON.stringify(state.car));
		},
		updateGoodsSelected(state, info){
			state.car.some(item => {
				if(item.id == info.id){
					item.selected = info.selected;
				}
			});
			localStorage.setItem('car',JSON.stringify(state.car));
		}
	},
	getters:{
		// 相当于计算属性 也相当于 filters
		getAllCount(state){
			let c = 0;
			state.car.forEach(item => {
				c += item.count;
			});
			return c;
		},
		getGoodsCount(state){
			let o = {};
			state.car.forEach(item => {
				o[item.id] = item.count;
			});
			return o;
		},
		getGoodsSelected(state){
			let o = {};
			state.car.forEach(item => {
				o[item.id] = item.selected;
			});
			return o;
		},
		getGoodsCountAndAmount(state){
			let o = {
				count:0,	// 数量
				amount:0	// 总价
			};
			state.car.forEach(item => {
				if(item.selected === true){
					o.count += item.count;
					o.amount += item.count * item.price;
				}
			});
			return o;
		}
	}
});

import moment from "moment";

Vue.filter('dateFormat', function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
});

import app from './App.vue'

import { Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router/router.js'

import axios from 'axios'
Vue.prototype.$axios = axios;

import { Tab, Tabs, Lazyload, Card, Button, Tag, NoticeBar, NavBar, Form, Switch, Stepper, Icon } from 'vant';
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/card/style'
import 'vant/lib/button/style'
import 'vant/lib/tag/style'
import 'vant/lib/notice-bar/style'
import 'vant/lib/nav-bar/style'
import 'vant/lib/form/style'
import 'vant/lib/switch/style'
import 'vant/lib/stepper/style'
import 'vant/lib/icon/style'
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Tag);
Vue.use(NoticeBar);
Vue.use(Form);
Vue.use(Switch);
Vue.use(Stepper);
Vue.use(Icon);
Vue.use(Lazyload, {
	lazyComponent: true,
});

import utilAPI from "./util/utilAPI";
Vue.prototype.$API = utilAPI;

// 设置全局请求头
// const url='http://127.0.0.1:3008';
// axios.interceptors.request.use(
// 	config => {
// 		let token = localStorage.getItem("x-auth-token");
// 		if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
// 			config.headers.token = `${token}`;
// 		}
// 		if (config.url.indexOf(url) === -1) {
// 			config.url = url + config.url;/*拼接完整请求路径*/
// 		}
// 		return config;
// 	},
// 	err => {
// 		return Promise.reject(err);
// 	});

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
	router,
	store
});

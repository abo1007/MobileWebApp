import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import moment from "moment";

Vue.filter('dateFormat', function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
});

import app from './App.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router/router.js'

import axios from 'axios'

Vue.prototype.$axios = axios;



var vm = new Vue({
	el:'#app',
	render:c => c(app),
	router
});

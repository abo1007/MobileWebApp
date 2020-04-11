import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import app from './App.vue'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name,Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/MUI/css/mui.min.css'
import './lib/MUI/css/icons-extra.css'

import router from './router/router.js'





var vm = new Vue({
	el:'#app',
	render:c => c(app),
	router
})

import vueRouter from 'vue-router'

import HomeContainer from '../components/HomeContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'
import ShopCarContainer from '../components/ShopCarContainer.vue'
import MyContainer from '../components/MyContainer.vue'



var router = new vueRouter({
	routes: [
		{path: '/', redirect: '/home'},
		{path: '/home',component: HomeContainer},
		{path: '/search',component: SearchContainer},
		{path: '/shopping',component: ShopCarContainer},
		{path: '/my',component: MyContainer}
	],
	linkActiveClass:' mui-active'	// 覆盖默认的路由高亮类 默认的类叫 router-link-active
})

export default router
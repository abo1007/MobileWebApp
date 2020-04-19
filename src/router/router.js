import vueRouter from 'vue-router'

import HomeContainer from '../components/HomeContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'
import ShopCarContainer from '../components/ShopCarContainer.vue'
import MyContainer from '../components/MyContainer.vue'

import NewsList from "../components/news/NewsList.vue"
import NewsInfo from "../components/news/NewsInfo.vue";

var router = new vueRouter({
	routes: [
		{path: '/', redirect: '/home'},
		{path: '/home',component: HomeContainer},
		{path: '/search',component: SearchContainer},
		{path: '/shopping',component: ShopCarContainer},
		{path: '/my',component: MyContainer},
		{path: '/home/newslist',component: NewsList },
		{path: '/home/newsinfo/:id',component: NewsInfo }


	],
	linkActiveClass:' mui-active'	// 覆盖默认的路由高亮类 默认的类叫 router-link-active
})

export default router

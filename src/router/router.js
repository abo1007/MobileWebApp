import vueRouter from 'vue-router'

import HomeContainer from '../components/HomeContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'
import ShopCarContainer from '../components/ShopCarContainer.vue'
import MyContainer from '../components/MyContainer.vue'

import NewsList from "../components/news/NewsList.vue"
import NewsInfo from "../components/news/NewsInfo.vue"

import photoList from "../components/photo/photoList.vue"
import PhotoInfo from "../components/photo/PhotoInfo.vue"

import GoodsList from "../components/goods/GoodsList.vue"

import ContactUs from "../components/contact/ContactUs.vue"
import feedback from "../components/feedback/feedback.vue"

var router = new vueRouter({
	routes: [
		{path: '/', redirect: '/home', meta: {title: '闲得慌App'}},
		{path: '/home',component: HomeContainer,meta: {title: '闲得慌App-首页'}},
		{path: '/search',component: SearchContainer,meta: {title: '闲得慌App-搜索'}},
		{path: '/shopping',component: ShopCarContainer, meta: {title: '闲得慌App-购物车'}},
		{path: '/my',component: MyContainer, meta: {title: '闲得慌App-我的'}},
		{path: '/home/newslist',component: NewsList , meta: {title: '新闻列表'}},
		{path: '/home/newsinfo/:id',component: NewsInfo , meta: {title: '新闻详细'}},
		{path: '/home/photolist',component: photoList , meta: {title: '盗版资源'}},
		{path: '/home/photoinfo/:id',component: PhotoInfo , meta: {title: '图片详情'}},
		{path: '/home/goodslist',component: GoodsList , meta: {title: '闲得精选'}},
		{path: '/home/contact',component: ContactUs , meta: {title: '没事别联系'}},
		{path: '/home/feedback',component: feedback , meta: {title: '无聊留言'}}



	],
	linkActiveClass:' mui-active'	// 覆盖默认的路由高亮类 默认的类叫 router-link-active
})

export default router

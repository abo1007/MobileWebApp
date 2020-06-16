import vueRouter from 'vue-router'

import HomeContainer from '../components/HomeContainer'
import SearchContainer from '../components/SearchContainer'
import ShopCarContainer from '../components/ShopCarContainer'
import MyContainer from '../components/MyContainer'

import NewsList from "../components/news/NewsList"
import NewsInfo from "../components/news/NewsInfo"

import photoList from "../components/photo/photoList"
import PhotoInfo from "../components/photo/PhotoInfo"

import GoodsList from "../components/goods/GoodsList"
import GoodsInfo from "../components/goods/GoodsInfo"
import GoodsDesc from "../components/goods/GoodsDesc"
import GoodsComment from "../components/goods/GoodsComment"

import ContactUs from "../components/contact/ContactUs"
import feedback from "../components/feedback/feedback"

import VideoHome from "../components/video/VideoHome";

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
		{path: '/home/goodsinfo/:id',component: GoodsInfo , meta: {title: '闲得精选-商品详情'}, name: 'goodsinfo'},
		{path: '/home/goodsdesc/:id',component: GoodsDesc , meta: {title: '图文详情'}, name: 'goodsdesc'},
		{path: '/home/goodscomment/:id',component: GoodsComment , meta: {title: '商品评价'}, name: 'goodscomment'},
		{path: '/home/contact',component: ContactUs , meta: {title: '没事别联系'}},
		{path: '/home/feedback',component: feedback , meta: {title: '无聊留言'}},
		{path: '/home/videohome',component: VideoHome , meta: {title: '没劲视频'}}

	],
	linkActiveClass:' mui-active'	// 覆盖默认的路由高亮类 默认的类叫 router-link-active
});

export default router

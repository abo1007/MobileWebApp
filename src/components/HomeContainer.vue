<template>
    <div id="app-home">
		<van-nav-bar title="闲得慌 App" id="home-nav-title" />
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in swipeList" :key="item.url">
				<img :src="item.img" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/newslist">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">最老资讯</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/goodslist">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">闲得精选</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">无聊留言</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#">
					<span class="mui-icon mui-icon-more"></span>
					<div class="mui-media-body">没劲视频</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/photolist">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
					<div class="mui-media-body">盗版资源</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<router-link to="/home/contact">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">没事别联系</div>
				</router-link>
			</li>
		</ul>
		<van-card
				num="1" origin-price="998.00"
				price="2333.00"
				desc="闲得慌去哪？这里是你不二的选择"
				title="印度新德里"
				thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588400635117&di=b28cf89d21a2a400e7cd42921f4db2f5&
				imgtype=0&src=http%3A%2F%2Fp2.cri.cn%2FM00%2FD1%2F2B%2FCqgNOlkOlbuAWY7eAAAAAAAAAAA634.600x425.png">
			<template #tags>
				<van-tag plain type="danger">贫民窟</van-tag>
				<van-tag plain type="danger">各种浆糊</van-tag>
			</template>
			<template #footer>
				<van-button size="mini">滚开</van-button>
				<van-button size="mini">看看</van-button>
			</template>
		</van-card>
		<van-card
				num="1" origin-price="998.00"
				price="2866.00"
				desc="如果你很闲，不妨来看看！"
				title="越南胡志明市"
				thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588401049978&di=c75f1f0d00afa002c979f52884f3fccc&
				imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171220%2F8cc5c29936ba4afd8cc37c5449044b1e.jpeg">
			<template #tags>
				<van-tag plain type="danger">越猴</van-tag>
				<van-tag plain type="danger">越南娘们</van-tag>
			</template>
			<template #footer>
				<van-button size="mini">滚开</van-button>
				<van-button size="mini">看看</van-button>
			</template>
		</van-card>
		<van-card
				num="1" origin-price="9998.00"
				price="7788.00"
				desc="闲得慌精选，为您的旅途添光加彩"
				title="朝鲜平壤市"
				thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588430055649&di=fa7021d69a7cd0ba663cad7af6e0178a&
				imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fri%2Fpc%2FQJ8863862101.jpg">
			<template #tags>
				<van-tag plain type="danger">金正*</van-tag>
				<van-tag plain type="danger">摆拍</van-tag>
				<van-tag plain type="danger">纸片楼</van-tag>
			</template>
			<template #footer>
				<van-button size="mini">滚开</van-button>
				<van-button size="mini">看看</van-button>
			</template>
		</van-card>
    </div>
</template>

<script>
export default {
    name:'HomeContainer',
	data(){
		return{
			swipeList:[]
		}
	},
	methods:{
		getSwipe() {
			this.$axios.get('/api/getswipe').then(result => {
				// console.log(result)
				this.swipeList = result.data
			}).catch(err => {
				console.log(err)
			})
		}
	},
	created(){
		this.getSwipe();
	}
}
</script>

<style lang="scss">
	#app-home{
		margin-bottom:50px;
	}
#home-nav-title{background-color:#2E9BED;
	.van-nav-bar__title{
		color:#fff;
	}
}
.mint-swipe{
	height:200px;

	img{
		width:100%;
		height:100%;
	}
	.mint-swipe-item {
		// &:nth-child(1) {
		// 	background-color:#0062CC;
		// }
		// &:nth-child(2) {
		// 	background-color:#6641E2;
		// }
		// &:nth-child(3) {
		// 	background-color:#F0AD4E;
		// }
	}
}
.mui-grid-view.mui-grid-9{
	background:#ffffff;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
	font-size:12px;
}
</style>

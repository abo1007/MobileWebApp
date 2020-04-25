<template>
    <div id="app">
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
				<router-link to="">
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
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">没事别联系</div>
				</a>
			</li>
		</ul>
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
			this.$axios.get('http://127.0.0.1:3008/api/getswipe').then(result => {
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

<style lang="scss" scoped>
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

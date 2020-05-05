<template>
	<div class="app-container">
		<transition>
			<router-view></router-view>
		</transition>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search">
					<!-- <span class="mui-badge">9</span> -->
				</span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopping">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/my">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>


	</div>
</template>

<script>

export default {
	name:'App',
	data(){
		return{

		}
	}
}
</script>

<style scoped>
	*{margin:0;padding:0;}
	.mint-header{
		z-index:99;
	}
	.app-container{

		overflow-x:hidden;
	}
	.mui-active{
		transition:all 0.6s ease;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position:absolute;
	}
	.v-enter-active, .v-leave-active{
		transition:all 0.5s ease;
	}

/*解决无法切换tabbar的问题*/

	.mui-bar-tab .mui-tab-item1 {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item1.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item1 {
		text-align: center;
		white-space: nowrap;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>

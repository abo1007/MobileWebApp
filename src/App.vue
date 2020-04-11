<template>
	<div class="app-container">

		
		<mt-header fixed title="闲得慌App"></mt-header>
		
		<router-view></router-view>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search">
					<!-- <span class="mui-badge">9</span> -->
				</span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopping">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
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
.app-container{
	margin-top:40px;
}
.mui-active{
	transition:all 0.6s ease;
}
</style>
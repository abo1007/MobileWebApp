<template>
    <div id="app">
		<mt-swipe :auto="4000">
			<mt-swipe-item>1</mt-swipe-item>
			<mt-swipe-item>2</mt-swipe-item>
			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		
    </div>
</template>

<script>
export default {
    name:'HomeContainer',
	data(){
		return{
			
		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.mint-swipe{
	height:200px;
	
	// .mint-swipe-item:nth-child(1) {
	// 	background-color:#0062CC;
	// }
	.mint-swipe-item {
		&:nth-child(1) {
			background-color:#0062CC;
		}
		&:nth-child(2) {
			background-color:#6641E2;
		}
		&:nth-child(3) {
			background-color:#F0AD4E;
		}
	}
}
</style>
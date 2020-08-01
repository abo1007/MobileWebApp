<template>
    <div id="app-search">
        <van-nav-bar title="闲得慌 搜搜" id="home-nav-title"/>
        <h2>Vue X</h2>
        <p>购物车采用vueX技术，并使用localstorage实现本地持久化存储</p>
        <h2>Vant MUI MintUI</h2>
        <p>首页使用MUI的六宫格，卡片区域使用了Vant的card，Toast轻提示以及轮播图使用了MintUI</p>
        <h2>NodeJS+MySql</h2>
        <p>本项目后端系统采用NodeJS的express框架并使用mysql数据库实现永久存储</p>
        <h2>更新时间</h2>
        <p>烂尾ing......</p>
    </div>
</template>

<script>
export default {
	name:'SearchContainer',
	data(){
		return{

		}
	}
}
</script>

<style scoped>
#app-search{
    margin-bottom:50px;
    height:100vh;
    width:100%;
}
</style>

<template>
    <div id="goods-desc">
        <van-nav-bar
                title="图文详情"
                left-text="返回"
                left-arrow
                @click-left="goInfo(id)"
        />
    </div>
</template>

<script>
    export default {
        name: "GoodsDesc",
        data(){
            return{
                id:this.$route.params.id
            }
        },
        methods:{
            goInfo(id){
                this.$router.push({ name : 'goodsinfo', params: {id} })
            }
        }
    }
</script>

<style scoped>

</style>

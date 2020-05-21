<template>
    <div id="goods-comment">
        <van-nav-bar
                title="宝贝评价"
                left-text="返回"
                left-arrow
                @click-left="goInfo(id)"
        />
    </div>
</template>

<script>
    export default {
        name: "GoodsComment",
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

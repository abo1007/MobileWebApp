<template>
    <div id="goodsinfo-container">
        <van-nav-bar
                title="产品详细"
                left-text="返回"
                left-arrow
                @click-left="goList"
        />
        <h3>商品详细</h3>
    </div>
</template>

<script>
    export default {
        name: "GoodsInfo",
        data(){
            return{

            }
        },
        methods:{
            goList(){
                this.$router.push('/home/goodslist/')
            }
        }
    }
</script>

<style scoped>

</style>

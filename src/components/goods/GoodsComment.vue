<template>
    <div id="goods-comment">
        <van-nav-bar
                title="宝贝评价"
                left-text="返回"
                left-arrow
                @click-left="goInfo(id)"
        />
        <com-box :id="id"></com-box>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment";
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
        },
        components:{
            'com-box':comment
        }
    }
</script>

<style scoped>

</style>

<template>
    <div id="goods-desc">
        <van-nav-bar
                title="图文详情"
                left-text="返回"
                left-arrow
                @click-left="goInfo(id)"
        />
        <div class="header">
            <p>{{info.name}}</p>
            <hr />
        </div>
        <div class="content">
            {{info.content}}
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "GoodsDesc",
        data(){
            return{
                id:this.$route.params.id,
                info:{}
            }
        },
        methods:{
            getGoodsDesc(){
                this.$axios.get('/api/getdesc/' + this.id ).then(result => {
                    if (result.data.status === 0) {
                        this.info = result.data.message
                    } else {
                        Toast({
                            message: '页面消失了...去看看其他页面吧',
                            duration: 5000
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            goInfo(id){
                this.$router.push({ name : 'goodsinfo', params: {id} })
            }
        },created() {
            this.getGoodsDesc()
        }
    }
</script>

<style scoped>

</style>

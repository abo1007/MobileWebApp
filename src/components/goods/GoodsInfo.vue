<template>
    <div id="goodsinfo-container">
        <van-nav-bar
                title="产品详细"
                left-text="返回"
                left-arrow
                @click-left="goList"
        />
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <img :src="goodsInfoData.imgurl" alt="">
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfoData.name}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        原价:<span class="oldprice">{{goodsInfoData.old_price}}</span>
                        现价:<span class="newprice">{{goodsInfoData.price}}</span>
                    </p>
                    <p>购买数量 <num-box class="numbox"></num-box></p>
                    <p>
                        <van-button type="danger" round size="small">点击购买</van-button>
                        <van-button type="info" round size="small">加入购物车</van-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfoData.content}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">

                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";
    import Goodsinfo_numbox from "./Goodsinfo_numbox.vue";
    export default {
        name: "GoodsInfo",
        data(){
            return{
                id:this.$route.params.id,
                goodsInfoData:{}
            }
        },
        methods:{
            getgoodsinfo(){
                this.$axios.get('/api/getgoods?id=' + this.id).then(result => {
                    if (result.data.status === 0) {
                        // console.log(result);
                        this.goodsInfoData = result.data.message
                    }else{
                        Toast ({
                            message:'留言丢失了...去看看其他页面吧',
                            duration: 5000
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            goList(){
                this.$router.push('/home/goodslist/')
            }
        },
        created() {
            this.getgoodsinfo()
        },
        components:{
            'num-box':Goodsinfo_numbox
        }
    }
</script>

<style lang="scss" scoped>
#goodsinfo-container{
    background-color:#eee;
    overflow:hidden;
}
.mui-card-content-inner{
    img{
        width:100%;max-height:400px;
    }
    p{
        height:40px;
        font-size:1.1em;
        .numbox{
            height:30px;width:130px;
        }
    }
    .price{
        color:#000;
        .oldprice{
            color:#4d4d4d;
            text-decoration:line-through;
            padding:0 10px;
        }
        .newprice{
            font-weight:bold;padding:0 10px;color:#ff0000;font-size:1.2em;
        }
    }
}
</style>

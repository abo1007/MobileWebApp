<template>
    <div id="goodList-container">
        <van-nav-bar
                title="闲得精选"
                left-text="返回"
                right-text="搜索"
                left-arrow
                @click-left="goHome"
                @click-right="goSearch"
        />
        <div class="goodslist-content">
            <div class="goods-item" v-for="item in goodslist">
                <img :src="item.imgurl">
                <p class="title">{{item.name}}</p>
                <p class="price">
                    <span class="now">￥{{item.price}}</span>
                    <span class="old">￥{{item.old_price}}</span>
                </p>
                <p class="info">
                    <span>75折</span>
                    <span>剩{{item.count}}件</span>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "GoodsList",
        data(){
            return{
                goodslist:[],
                pageindex:1
            }
        },
        methods:{
            getGoodsList(){
                this.$axios.get('/api/getgoodslist?pageindex='+ this.pageindex).then(result => {
                    console.log(result)
                    if (result.data.status === 0){
                        this.goodslist = result.data.message
                    }else{
                        Toast('诶，服务器出问题了！')
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            goHome(){
                this.$router.push('/home')
            },
            goSearch(){
                Toast ('诶呀，还没做呢')
            }
        },created() {
            this.getGoodsList()
        }
    }
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;}
    .goodslist-content{

        display:flex;
        flex-wrap:wrap;
        .goods-item{
            width:48%;
            margin:1%;
            height:250px;
            border:1px solid #ccc;
            box-shadow:0 0 6px #ccc;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            img{
                width:100%;height:65%;
            }
            .title{
                font-weight:bold;color:#000;height:40px;overflow:hidden;
            }
            .price{
                .now{color:#ff0000;font-weight:bold;font-size:1.2em;}
                .old{text-decoration:line-through;font-size:0.9em;}
            }
            .info{
                display:flex;
                justify-content:space-between;
                background:#eee;
                font-size:0.7em;
            }
        }
    }
</style>

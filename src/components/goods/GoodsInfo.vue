<template>
    <div id="goodsinfo-container">
        <van-nav-bar
                title="产品详细"
                left-text="返回"
                left-arrow
                @click-left="goList"
        />
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="Isballshow" ref="ball"></div>
        </transition>
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
                    <p>购买数量 <num-box class="numbox" @getcount="getSelectedCount" :max="goodsInfoData.count"></num-box></p>
                    <p>
                        <van-button type="danger" round size="normal">点击购买</van-button>
                        <van-button type="info" round size="normal" @click="addToShopCar">加入购物车</van-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfoData.content}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="content-1">
                        库存 <span class="hot">{{goodsInfoData.count}}</span>
                    </p>
                    <p class="content-2">
                        点击量 <span class="click">{{goodsInfoData.click_count}}</span>
                    </p>
                    <p class="content-3">
                        上架时间 <span class="addtime">{{goodsInfoData.addtime | dateFormat}}</span>
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">
                <van-button type="primary" round size="large" @click="goDesc(id)">图文详情</van-button>
                <van-button type="warning" round size="large" @click="goComment(id)">商品评价</van-button>
            </div>
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
                goodsInfoData:{},
                Isballshow:false,
                selectedCount:1    // 商品数量
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
            },
            goDesc(id){
                this.$router.push({ name : 'goodsdesc', params: {id} })
            },
            goComment(id){
                this.$router.push({ name : 'goodscomment', params: {id} })
            },
            addToShopCar(){
                this.Isballshow = !this.Isballshow;
                // { id:商品id, count: 要购买的数量, price:商品的单价, selected: true }
                var goodsinfo = { id: this.id, count: this.selectedCount, price: this.goodsInfoData.price, selected: true }
                this.$store.commit('addToCar',goodsinfo);
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"
            },
            enter(el, done){
                el.offsetWidth;
                // 小球动画优化 坐标值不应写死 应该动态获取
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById('badge').getBoundingClientRect();

                const XDist = badgePosition.left - ballPosition.left;
                const YDist = badgePosition.top - ballPosition.top;

                el.style.transform = `translate(${XDist}px,${YDist}px)`;
                el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.Isballshow = !this.Isballshow
            },
            getSelectedCount(count){
                // 当子组件把选中的数量传递给父组件的时候，把选中的值保存到data上
                this.selectedCount = count || 1;
                // 强行不变成0
                console.log('父组件拿到的数据' + this.selectedCount)
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
    margin-bottom:50px;
    .ball{
        height:20px;width:20px;border-radius:10px;background-color:#ff0000;position:absolute;z-index:99;
        top:465px;left:150px;
    }
}
.mui-card-content-inner{
    img{
        width:100%;height:250px;
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
.mui-card-footer{
    height:auto;
}
</style>

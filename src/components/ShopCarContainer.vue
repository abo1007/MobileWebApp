<template>
    <div id="app-shopcar">
        <van-nav-bar title="闲得慌 购物车" id="home-nav-title" />

        <div class="goods-list">
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <van-switch v-model="checked" size="24px"/>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592495651223&
                        di=95da9f55589afab15f1d0e69bd3cbba5&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180801%2F22%2F1533134885-YsUzESCwqk.jpg">
                        <div class="info">
                            <p>IPhone 11 Pro Max 512GB</p>
                            <div class="p2">
                                <span class="price">￥2499</span>
                                <num-box class="num"></num-box>
                                <a href="">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import shopcar_numbx from "./subcomponents/shopcar_numbx";
export default {
	name:'ShopCarContainer',
	data(){
		return{
            checked: true,
            value:1
		}
	},
    methods:{
	  getGoodsList(){
	      var car = this.$store.state.car;
	      // this.$axios.get('')
      }
    },
    components:{
	    'num-box':shopcar_numbx
    }
}
</script>

<style lang="scss" scoped>
#app-shopcar{
    margin-bottom:50px;
    height:100vh;
    background-color: #eee;
    .goods-list{
        .mui-card{
            .mui-card-content{
                .mui-card-content-inner{
                    display:flex;
                    align-items: center;
                    padding-left:10px;
                    img{
                        height:65px;
                        width:65px;
                    }
                    p{
                        text-align:center;
                        font-size:16px;
                        color:#000;
                        overflow:hidden;
                    }
                    .price{
                        color:#ff0000;
                        font-weight:bold;
                    }
                    .p2{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        height:30px;
                    }
                    .num{
                        height:30px;
                        width:125px;
                        margin:0 5px;
                    }
                }
            }
        }
    }

}
</style>

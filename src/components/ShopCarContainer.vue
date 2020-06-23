<template>
    <div id="app-shopcar">
        <van-nav-bar title="闲得慌 购物车" id="home-nav-title" />

        <div class="goods-list">
            <div class="mui-card" v-for="item in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <van-switch v-model="checked" size="24px"/>
                        <img :src="item.imgurl">
                        <div class="info">
                            <p>{{item.name}}</p>
                            <div class="p2">
                                <span class="price">￥{{item.price}}</span>
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
            goodslist:[]
		}
	},
    methods:{
	  getGoodsList(){
	      var idArr = [];
	      this.$store.state.car.forEach(item => idArr.push(item.id));
          // 如果购物车无数据则直接返回，不需要请求数据接口
          if(idArr.length <= 0)return;

	      this.$axios.get('/api/shopcardata/' + idArr.join(',')).then(result => {
	          if (result.data.status === 0){
                  // console.log(result);
	              this.goodslist = result.data.message;
              }else{
	              Toast ('页面丢失了');
              }
          }).catch(err => {
              console.log(err);
          })
      }
    },
    components:{
	    'num-box':shopcar_numbx
    },
    created(){
	    this.getGoodsList();
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

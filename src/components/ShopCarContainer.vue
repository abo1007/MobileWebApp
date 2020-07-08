<template>
    <div id="app-shopcar">
        <van-nav-bar title="闲得慌 购物车" id="home-nav-title" />

        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodslist" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <van-switch v-model="checked[item.id]"
                                    :click="SelectedChanged(item.id,checked[item.id])" size="24px"/>
                        <img :src="item.imgurl">
                        <div class="info">
                            <p>{{item.name}}</p>
                            <div class="p2">
                                <span class="price">￥{{item.price}}</span>
                                <num-box class="num" :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"/>
                                <a href="" @click.prevent="removeGoods(item.id,i)">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        <p>{{$store.getters.getGoodsSelected}}</p>-->
<!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner" id="jiesuan">
                    <div class="left">
                        <p>总计 (不含运费)</p>
                        <p>已勾选商品 <span class="red">0</span> 件，总价 ¥ <span class="red">0</span></p>
                    </div>
                    <van-button type="warning" round color="linear-gradient(to right,#C71585,#FFA500)">警告按钮</van-button>
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
            checked:this.$store.getters.getGoodsSelected, // 因为开关需要独立运作
            goodslist:[],

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

	              // for (let i = 0;i < result.data.message.length; i++){
	              //     this.checked[i] = true;
                  // }

              }else{
	              Toast ('页面丢失了');
              }
          }).catch(err => {
              console.log(err);
          })
      },
      removeGoods(id,index){
	      // 点击删除，把商品从 store中根据传递的id删除，同时把组件中goodslist中，对应要删除的那个商品，使用index删除
          this.goodslist.splice(index,1);
          this.$store.commit('removeFormCar',id);
      },
      SelectedChanged(id, val){
          // 每当点击开关，把最新的开关状态哦同步到store中
          // console.log(id, val);
          this.$store.commit('updateGoodsSelected',{id, selected: val})
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
                        font-size:15px;
                        color:#000;
                        overflow:hidden;
                    }
                    .price{
                        color:#ff0000;
                        font-weight:bold;
                    }
                    .info{
                        width:65%;
                    }
                    .p2{
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        height:30px;
                        a{
                            font-size:13px;
                        }
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
    #jiesuan{
        display: flex;
        justify-content:space-between;
        align-items: center;
        .left{
            p{
                font-size:16px;
                letter-spacing:1px;
                .red{
                    color:#ff0000;
                    font-weight:bold;
                }
            }
        }
    }

}
</style>

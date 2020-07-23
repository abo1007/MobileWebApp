<template>
    <div id="app-my">
        <div class="title">
            <span class="mui-icon mui-icon-gear-filled" @click="goSet"></span>
        </div>
        <div class="user">
            <div class="left">
                <img src="http://127.0.0.1:3008/api/public/images/goods/004.jpg" alt="">
            </div>
            <div class="right">
                <p class="name">AI Thabo 木易</p>
                <p class="id">ID : yhx000881
                    <span class="logo">VIP</span>
                </p>
            </div>
        </div>

        <div class="menu">
            <div class="m1 mt">
                <van-icon name="card" size="30px" color="#FFD700"/>
                <p>钱包</p>
            </div>
            <div class="m2 mt">
                <van-icon name="vip-card" size="30px" color="#008000"/>
                <p>卡包</p>
            </div>
            <div class="m2 mt">
                <van-icon name="browsing-history" size="30px" color="#BA55D3"/>
                <p>历史</p>
            </div>
            <div class="m2 mt">
                <van-icon name="point-gift" size="30px" color="#ff0000"/>
                <p>收藏</p>
            </div>
            <div class="m2 mt">
                <van-icon name="cart" size="30px" color="#2e9bed"/>
                <p>购物车</p>
            </div>
            <div class="m1 mt">
                <van-icon name="setting" size="30px" color="#000"/>
                <p>设置</p>
            </div>
        </div>

    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
	name:'MyContainer',
	data(){
		return{

		}
	},
    methods:{
	    goSet(){
	        Toast ('诶呦！还没写呢！')
        }
    }

}
</script>

<style lang="scss" scoped>
#app-my{
    margin-bottom:50px;
    height:100vh;
    background-color: #eee;
    .title{
        width:100%;
        height:46px;
        background-color:#2e9bed;
        position:relative;
        span{
            font-size:30px;
            color:#eee;
            position:absolute;
            right:10px;
            line-height:46px;
        }
    }
    .user{
        width:100%;
        display:flex;
        height:120px;
        padding:10px;
        background-color:#2e9bed;
        .left{
            flex:3;
            position:relative;
            img{
                width:100px;
                height:100px;
                border-radius:50px;
                position:absolute;
                right:0;
            }
        }
        .right{
            flex:5;
            height:100%;
            padding-left:20px;
            padding-bottom:20px;
            p{
                height:30px;
            }
            .name{
                color:#fff;
                font-size:20px;
                font-weight:500;
                position:relative;
                top:30px;
            }
            .id{
                color:#fff;
                font-weight:200;
                position:relative;
                top:15px;
                .logo{
                    font-size:14px;
                    background-color:#FFD700;
                    border:1px solid #FFFF00;
                    padding:0 5px;
                    border-radius:10px;
                }
            }

        }
    }
    .menu{
        width:100%;
        .m1{
            margin:20px 10px;
        }
        .m2{
            margin:5px 10px;
        }
        .mt{
            height:40px;
            background-color: #fff;

            border-radius:15px;
            display:flex;
            align-items:center;
            padding-left:20px;
            p{
                padding-left:20px;
                margin:0;
                font-size:22px;
                color:#000;
                font-weight:200;
            }
        }
    }
}
</style>

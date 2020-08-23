<template>
    <div id="video-container">
        <van-nav-bar
                title="没劲视频"
                left-text="返回"
                left-arrow
                @click-left="goHome()"
        />
        <div class="container">
            <div class="item" v-for="item in videoList" :key="item.id">
                <div class="left">
                    <img :src="item.url" alt="">
                </div>
                <div class="right">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="bottom">
                        <p class="author">
                            <van-icon name="info" size="18px"/>
                            <span>{{item.author}}</span>
                        </p>
                        <p class="num">
                            <van-icon name="play-circle" size="18px"/>
<!--                            播放量过滤器-->
                            <span>{{getPlaynum(item.playnum)}}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoHome",
        data(){
            return{
                videoList:[]
            }
        },
        methods:{
            goHome(){
                this.$router.push('/home')
            },
            getVideoList(){
                this.$axios.get('/api/getvideolist/1').then(result => {
                    console.log(result);
                    if(result.data.status === 0){
                        this.videoList = result.data.message;
                    }else{
                        console.log("status故障")
                    }
                }).catch(err => {
                    console.log(err);
                });
            },
            getPlaynum(num){
                if(num>10000){
                    let w = parseInt(num/10000);
                    let k = parseInt(num%10000/1000) ;
                    return w + "." + k + " 万";
                }else{
                    return num;
                }
            }
        },
        created() {
            this.getVideoList();
        }
    }
</script>

<style lang="scss" scoped>
#video-container{

    .container{
        .item{
            height:100px;
            display:flex;
            border-bottom:1px solid #eee;
            border-top:1px solid #eee;
            .left{
                flex:1;
                display:flex;
                align-items:center;
                img{
                    height:90px;
                    width:90%;
                    border-radius:5px;
                    margin-left:10px;
                }
            }
            .right{
                flex:1.2;
                .title{
                    padding-top:5px;
                    height:50px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .bottom{
                    margin-top:6px;
                    p{margin:0;display:flex;align-items:center;}
                    .author,.num{
                        height:20px;
                        line-height:20px;
                        span{padding-left:5px;}
                    }
                }
            }
        }
    }
}
</style>

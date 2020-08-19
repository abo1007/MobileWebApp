<template>
    <div id="video-container">
        <van-nav-bar
                title="没劲视频"
                left-text="返回"
                left-arrow
                @click-left="goHome()"
        />
        <h3>没劲视频</h3>
        <div class="container">
            <div class="item">
                <div class="left">
                    <img src="http://127.0.0.1:3008/api/public/images/video/peking.jpg" alt="">
                </div>
                <div class="right">
                    <div class="title">
                        [北京]守一座空城 等一个故人
                    </div>
                    <div class="bottom">
                        <p class="author">
                            <van-icon name="info" size="18px"/>
                            北漂指北</p>
                        <p class="num">
                            <van-icon name="play-circle" size="18px"/>
                            24.4万
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
                    if(result.status === 0){
                        this.videoList = result.message;
                    }else{
                        console.log("status故障")
                    }
                }).catch(err => {
                    console.log(err);
                });
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
                    padding-top:3px;
                }
                .bottom{
                    margin-top:6px;
                    p{margin:0;display:flex;align-items:center;}
                    .author{}
                    .num{}
                }
            }
        }
    }
}
</style>

<template>
    <div id="feedback-container">
        <van-nav-bar
                title="无聊留言"
                left-text="返回"
                left-arrow
                @click-left="goHome"
        />
        <van-notice-bar :text="msg" left-icon="volume-o" />
        <textarea id="textarea-container" cols="30" rows="10"></textarea>
        <van-button plain type="info" round size="large">点击吐槽</van-button>
        <div class="feedback-content">
            <div class="item">
                <p class="title">
                    <span>匿名用户</span>
                    <span>2020-05-11 08:00:00</span>
                </p>
                <p class="content">
                    这软件太垃圾了，打开居然没有人发红包？垃圾！
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return{
                msg:"好消息！好消息！本留言功能因吐槽人数过多，特地关闭，开放时间另行通知..."
            }
        },
        methods:{
            goHome(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="scss" scoped>
*{margin:0;padding:0;}
#feedback-container{

    #textarea-container{
        border-radius:15px;
        padding:10px;
    }
    .feedback-content{
        .item{
            margin-top:5px;
            border:1px solid #ccc;
            border-radius:15px;
            padding:5px;
            .title{
                display:flex;
                justify-content:space-between;
            }
            .content{
                color:#000000;
            }
        }
    }
}
</style>

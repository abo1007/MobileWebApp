<template>
    <div id="feedback-container">
        <van-nav-bar
                title="无聊留言"
                left-text="返回"
                left-arrow
                @click-left="goHome"
        />
        <van-notice-bar :text="msg" left-icon="volume-o" />
        <textarea id="textarea-container" cols="30" rows="10" v-model="feedbackSendContent"></textarea>
        <van-button plain type="info" round size="large" @click="sendFeedbackContent">点击吐槽</van-button>
        <div class="feedback-content">
            <div class="item" v-for="item in feedbackContent" :key="item.id">
                <p class="title">
                    <span>{{item.username}}</span>
                    <span>{{item.addtime | dateFormat}}</span>
                </p>
                <p class="content">{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "feedback",
        data(){
            return{
                msg:"好消息！好消息！本留言功能因吐槽人数过多，特地关闭，开放时间另行通知...",
                feedbackContent:[],
                feedbackSendContent:""
            }
        },
        methods:{
            getfeedbackContent(){
              this.$axios.get(this.$API.API_GET_FEEDBACK).then(result => {
                  if (result.data.status === 0) {
                      this.feedbackContent = result.data.message
                  }else{
                      Toast ({
                          message:'留言丢失了...去看看其他页面吧',
                          duration: 5000
                      })
                  }
              }).catch(err => {
                  console.log(err);
              })
            },
            goHome(){
                this.$router.push('/home')
            },
            sendFeedbackContent(){
                this.$axios.post(this.$API.API_SEND_FEEDBACK,{
                    content:this.feedbackSendContent
                }).then(result => {
                    if (result.data.status === 0) {
                        this.feedbackContent = result.data.message;
                        this.feedbackSendContent = "";
                    }else{
                        Toast ({
                            message : '留言丢失了...去看看其他页面吧',
                            duration : 5000
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        created() {
            this.getfeedbackContent();
        }
    }
</script>

<style lang="scss" scoped>
*{margin:0;padding:0;}
#feedback-container{
    margin-bottom:50px;
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

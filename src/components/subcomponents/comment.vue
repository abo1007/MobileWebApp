<template>
    <div id="app">
        <div class="comment-header">
            <h4>发表评论</h4>
        </div>
        <div class="comment-form">
            <textarea placeholder="请输入评论内容" cols="20" rows="6" v-model="comMsg"/>
            <mt-button type="primary" size="large" @click="postComments">点击评论</mt-button>
        </div>
        <div class="comment-content">
            <div class="content-list" v-for="item in commentsData" :key="item.id">
                <div class="content-list-title">
                    <span>第 {{item.id}}楼 &nbsp; 用户: {{item.username}}</span>
                    <span>发表时间 : {{item.addtime | dateFormat}}</span>
                </div>
                <div class="content-list-content">
                    {{item.content}}
                </div>
            </div>
            <mt-button type="primary" size="large" @click.native="getMore" plain>加载更多</mt-button>
        </div>
    </div>
</template>

<script>
    import {Toast} from "mint-ui";

    export default {
        name: "comment",
        data(){
            return{
                pageIndex:1,
                commentsData:[],
                comMsg:''
            }
        },
        methods:{
            getCommentsData() {
                this.$axios.get('http://127.0.0.1:3008/api/getcomments?newsid=' + this.id + '&pageindex=' + this.pageIndex)
                .then(result => {
                    if (result.data.status === 0) {
                        this.commentsData = result.data.message
                        // 分页后，避免加载更多时，老数据被覆盖
                        // this.commentsData = this.commentsData.concat(result.body.message)
                    }else{
                        Toast ({
                            message:'评论丢失了...去看看其他页面吧',
                            duration: 5000
                        })
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            getMore(){
                this.pageIndex++;
                this.getCommentsData();
            },
            postComments(){
                // 校验 comMsg 内容
                if(this.comMsg.trim().length === 0){
                    return Toast("评论内容不能为空")
                }
                // post 提交
                // 参数1 URL
                // 参数2 提交给服务器的数据对象
                // 参数3 定义提交到时候，表单中数据的格式 {emulateJSON:true}
                this.$axios.post('http://127.0.0.1:3008/api/submitcomment/'+ this.id ,
                    {content:this.comMsg},{emulateJSON:true}).then(result => {
                    if(result.data.status === 0) {
                        var cmt = {
                            id:this.commentsData[this.commentsData.length-1].id + 1,
                            username:"匿名用户",
                            addtime:new Date(),
                            content:this.comMsg.trim()
                        };
                        this.commentsData.unshift(cmt);
                        this.comMsg = "";
                        console.log(this.commentsData)
                    }else{
                        Toast("没获取到数据，等等吧..")
                    }
                }).catch(err => {
                    console.log(err);
                })
            }
        },
        created(){
            this.getCommentsData()
        },
        props:["id"]
    }
</script>

<style lang="scss" scoped>
#app{
    margin:0;padding:0;
    .comment-header{
        h4{
            padding-left:8px;height:25px;line-height:25px;border-radius:5px;
            background:#2E9BED;color:#fff;
        }
    }
    .comment-form{
        textarea{
            border:1px solid #2E9BED;border-radius:5px;
        }
        button{
            border-radius:10px;
            margin-bottom:10px;
        }
    }
    .comment-content{
        .content-list{
            color:#fff;
            margin-bottom:5px;
            div{
                padding-left:5px;
                border-radius:5px;
                line-height:25px;
            }
            .content-list-title{
                background:#008B8B;
                display:flex;
                justify-content:space-between;
                font-size:12px;
            }
            .content-list-content{
                text-indent:2em;
                background:#008080;
                font-size:14px;
            }
        }
    }
}
</style>

<template>
    <div id="app">
        <div class="comment-header">
            <h4>发表评论</h4>
        </div>
        <div class="comment-form">
            <textarea placeholder="请输入评论内容" cols="20" rows="6"/>
            <mt-button type="primary" size="large">点击评论</mt-button>
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
                commentsData:[]
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

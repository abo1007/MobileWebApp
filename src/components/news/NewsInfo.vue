<template>
    <div id="app-newsinfo">
        <div class="header">
            <h4>{{ newsinfo.title }}</h4>
            <p>
                <span class="newsaddtime">添加时间 : {{ newsinfo.addtime | dateFormat }}</span>
                <span class="click">点击次数 {{newsinfo.click}} 次</span>
            </p>
        </div>
        <div class="content">
            <p>
                {{ newsinfo.zhaiyao }}
            </p>
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment.vue";
    import { Toast } from 'mint-ui';
    export default {
        name: "NewsInfo",
        data(){
            return{
                id: this.$route.params.id,   // 将URL地址传递的id保存到data中
                newsinfo:{}
            }
        },
        methods:{
            getNewsInfo() {
                this.$axios.get('http://127.0.0.1:3008/api/getnewsinfo?newsid='+ this.id).then(result => {
                    // console.log(result)
                    if(result.data.status === 0){
                        this.newsinfo = result.data.message
                    }else{
                        Toast ({
                            message:'页面消失了...去看看其他页面吧',
                            duration: 5000
                        })
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
        },
        created() {
            this.getNewsInfo();
        },
        components:{
            "comment-box" : comment
        }
    }
</script>
<!-- 如遇样式图片显示不完全且width100无效的情况下请去掉 scoped -->
<style lang="scss" scoped>
#app-newsinfo{
    padding:0 4px;
    *{margin:0;}
    .header{
        border-bottom:1px solid #4d4d4d;
        padding-top:10px;
        h4{
            text-align:left;line-height:20px;margin-bottom:15px;font-weight:500;
        }
        p{
            font-size:12px;
            display:flex;
            justify-content:space-between;
            margin:0;
        }
    }
    .content{
        p{
            margin-top:10px;color:#000000;text-indent:2em;
        }

    }
}
</style>

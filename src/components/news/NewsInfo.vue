<template>
    <div id="app-newsinfo">
        <div class="header">
            <h3>{{ newsinfo.title }}</h3>
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
    </div>
</template>

<script>
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
                // this.$axios.get('http://127.0.0.1:3008/api/getnewsinfo'+ this.id).then(result => {
                //     if(result.data.status == 0){
                //         this.newsinfo = result.data.message
                //     }
                // }).catch(function (err) {
                //     console.log(err);
                // })
                this.$axios.get('http://127.0.0.1:3008/api/getnewslist').then(result => {
                    console.log(result)
                    if(result.data.status == 0){
                        this.newsinfo = result.data.message[0]
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
        },
        created() {
            this.getNewsInfo();
        }
    }
</script>
<!-- 如遇样式图片显示不完全且width100无效的情况下请去掉 scoped -->
<style lang="scss" scoped>
#app-newsinfo{
    padding:0 4px;
    .header{
        border-bottom:1px solid #4d4d4d;
        h3{
            text-align: center;
        }
        p{
            font-size:14px;
            display:flex;
            justify-content:space-between;
        }
    }
    .content{
        p{
            color:#000000;
        }

    }
}
</style>

<template>
    <div id="app">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id" >
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.imgUrl">
                    <div class="mui-media-body">
                        <p class="mui-table-body-p1">{{item.title}}</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间: {{item.addtime | dateFormat() }}</span>
                            <span>点击 {{item.click}} 次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList",
        data(){
            return{
                newsList:[]
            }
        },
        methods:{
            getNewsList() {
                this.$axios.get('http://127.0.0.1:3008/api/getnewslist').then(result => {
                    // console.log(result);
                    if(result.data.status === 0) {
                        this.newsList = result.data.message
                    } else {
                        Toast ('系统维护中!')
                    }

                }).catch(function (err) {
                    console.log(err.message)
                })
            }
        },
        created() {
            this.getNewsList();
        }
    }
</script>

<style lang="scss" scoped>
    .mui-media-body{

        .mui-table-body-p1{
            font-size:16px;color:#000000;font-weight:600;

        }
        .mui-ellipsis{
            font-size:13px;
            display:flex;
            justify-content: space-between;
            span{
                color:#228B22;
            }
        }
    }

</style>

<template>
    <div id="app">
        <van-nav-bar
                title="最老资讯-列表"
                left-text="返回"
                right-text="搜索"
                left-arrow
                @click-left="goHome"
                @click-right="goSearch"
        />
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
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
    import {Toast} from 'mint-ui';

    export default {
        name: "NewsList",
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            getNewsList() {
                this.$axios.get(this.$API.API_GET_NEWS_LIST).then(result => {
                    // console.log(result);
                    if (result.data.status === 0) {
                        this.newsList = result.data.message
                    } else {
                        Toast('系统维护中!')
                    }

                }).catch(function (err) {
                    console.log(err.message)
                })
            },
            goHome() {
                this.$router.push('/home')
            },
            goSearch() {
                Toast('诶呀，还没做呢')
            }
        },
        created() {
            this.getNewsList();
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        margin-bottom: 50px;
    }
    .mui-table-view-cell{
        padding:10px 15px;
        .mui-media-body {
            .mui-table-body-p1 {
                font-size: 18px;
                color: #000000;
                font-weight: 600;
                font-family: 幼圆;
            }
            .mui-ellipsis {
                font-size: 11px;
                display: flex;
                justify-content: space-between;
                align-items:center;
                span {
                    color: #4d4d4d;
                    font-weight:300;
                }
            }
        }
    }


</style>

<template>
    <div>
        <van-nav-bar
                title="盗版资源-列表"
                left-text="返回"
                right-text="搜索"
                left-arrow
                @click-left="goHome"
                @click-right="goSearch"
        />
        <van-tabs>
            <van-tab v-for="item in photoClass" :title="item.title" :key="item.id">
                <router-link id="img-container" :to="'/home/photoinfo/'+ite.id"
                             v-for="ite in photoInfo[item.id]" :key="ite.id" tag="div">
                    <img v-lazy="ite.url" />
                    <div id="img-msg">
                        <p>{{ite.title}}</p>
                        <span>{{ite.content}}</span>
                    </div>
                </router-link>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    import {Toast} from "mint-ui";

    export default {
        name: "photoList",
        data(){
            return{
                photoClass:[],
                photoInfo:[]
            }
        },
        methods:{
            getAllClass() {     // 获取图片分类
                this.$axios.get('http://127.0.0.1:3008/api/getimgclass').then(result => {
                    // console.log(result);
                    if(result.data.status === 0) {
                        // 手动拼接处一个完整的分类列表
                        result.data.message.unshift({ title: "全部", id: 0 });
                        this.photoClass = result.data.message;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            getAllPhotoInfo() {
                this.$axios.get('http://127.0.0.1:3008/api/getimages/').then(result => {
                    // console.log(result)
                    if(result.data.status === 0) {
                        this.photoInfo = result.data.message;
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            goHome(){
                this.$router.push('/home')
            },
            goSearch(){
                Toast ('诶呀，还没做呢')
            }
        },
        created(){
            this.getAllClass();
            this.getAllPhotoInfo();
        },
        mounted(){
            // 当组建中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
            // 如果要操作元素了 最好在 mounted里面 因为这里的dom元素是最新的
            // mui('.mui-scroll-wrapper').scroll({
            //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            // });
        }
    }
</script>

<style lang="scss" scoped>
    #img-container{
        position: relative;
        img{
            height:240px;
            width:100%;
        }
        #img-msg{
            display:block;
            position:absolute;
            top:160px;
            width:100%;
            height:80px;
            background:rgba(0,0,0,0.3);
            overflow: hidden;
        }
        p{
            position:relative;
            top:5px;
            color:#fff;
            font-size:18px;
        }
        span{
            position:relative;
            top:0px;
            color:#fff;
            font-size:15px;
        }
    }

</style>

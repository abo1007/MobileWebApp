<template>
    <div>
        <van-tabs>
            <van-tab v-for="item in photoClass" :title="item.title" :key="item.id">
                <div id="img-container" v-for="ite in photoInfo[item.id]" :key="ite.id">
                    <img :src="ite.url" alt="">
                    <div id="img-msg"></div>
                    <p>{{ite.title}}</p>
                    <span>{{ite.content}}</span>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

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
                    console.log(result);
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
                    console.log(result)
                    if(result.data.status === 0) {
                        this.photoInfo = result.data.message;
                    }
                }).catch(err => {
                    console.log(err);
                })
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
            position:absolute;
            top:160px;
            width:100%;
            height:80px;
            background:#000000;
            opacity:0.3;
        }
        p{
            position:absolute;
            top:165px;
            color:#fff;
            font-size:18px;
        }
        span{
            position:absolute;
            top:190px;
            color:#fff;
            font-size:15px;
        }
    }

</style>

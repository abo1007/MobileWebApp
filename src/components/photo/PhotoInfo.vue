<template>
    <div id="photoinfo-container">
        <van-nav-bar
                title="图片详情"
                left-text="返回"
                left-arrow
                @click-left="goHome"
        />
        <div class="header">
            <h3>{{photoinfo.title}}</h3>
            <p>
                <span class="spanl">发表时间 : {{ photoinfo.addtime | dateFormat }}</span>
                <span class="spanr">点击 {{ photoinfo.count }} 次</span>
            </p>
        </div>
        <div class="content">
            <img v-lazy="photoinfo.url">
            <p> {{photoinfo.content}} </p>
        </div>
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
    import comment from "../subcomponents/comment.vue";
    import { Toast } from 'mint-ui';
    export default {
        name: "PhotoInfo",
        data() {
            return{
                id: this.$route.params.id,
                photoinfo:{}
            }
        },
        methods:{
            getPhotoInfo() {
                this.$axios.get('/api/getimginfo/' + this.id).then(result => {
                    // console.log(result);
                    if(result.data.status === 0){
                        this.photoinfo = result.data.message
                    }else{
                        Toast ({
                            message:'页面消失了...去看看其他页面吧',
                            duration: 5000
                        })
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            goHome(){
                this.$router.push('/home/photolist')
            }
        },
        created() {
            this.getPhotoInfo();
        },
        components:{
            "comment-box" : comment
        }
    }
</script>

<style lang="scss" scoped>
    *{margin:0;padding:0;}
    #photoinfo-container{
        margin-bottom:50px;
        .header{
            border-bottom:1px solid #ccc;
            margin-bottom:10px;
            h3{
                text-align: center;margin:10px 0;
            }
            p{
                display: flex;
                justify-content:space-between;
            }
        }
        .content{

            img{
                max-height:300px;
            }
            p{
                text-indent:2em;color:#000000;
            }
        }
    }
</style>

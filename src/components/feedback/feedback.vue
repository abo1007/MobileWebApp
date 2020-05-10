<template>
    <div id="feedback-container">
        <van-nav-bar
                title="无聊留言"
                left-text="返回"
                left-arrow
                @click-left="goHome"
        />
    </div>
</template>

<script>
    export default {
        name: "feedback",
        data(){
            return{}
        },
        methods:{
            goHome(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>

</style>

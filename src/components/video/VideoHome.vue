<template>
    <div id="video-container">
        <van-nav-bar
                title="没劲视频"
                left-text="返回"
                left-arrow
                @click-left="goHome()"
        />
        <h3>没劲视频</h3>
    </div>
</template>

<script>
    export default {
        name: "VideoHome",
        methods:{
            goHome(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>

</style>

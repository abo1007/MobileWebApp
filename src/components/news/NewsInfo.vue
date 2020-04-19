<template>
    <div id="app">
        <h3>
            新闻详情
            {{ id }}
        </h3>
    </div>
</template>

<script>
    export default {
        name: "NewsInfo",
        data(){
            return{
                id: this.$route.params.id   // 将URL地址传递的id保存到data中
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

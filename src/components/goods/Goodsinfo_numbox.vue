<template>
        <div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" type="number" value="1" />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
</template>

<script>
    import mui from '../../lib/MUI/js/mui.min.js'
    export default {
        name: "Goodsinfo_numbox",
        data(){
            return{}
        },
        mounted(){
            mui('.mui-numbox').numbox()
        }
    }
</script>

<style scoped>
    .mui-numbox{height:100%;width:100%;}
</style>

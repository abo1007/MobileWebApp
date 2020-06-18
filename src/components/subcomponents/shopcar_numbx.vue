<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox"/>
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
        methods:{
            countChanged(){

            }
        },
        mounted(){
            mui('.mui-numbox').numbox()
        }
    }
</script>

<style scoped>
    .mui-numbox{height:100%;width:100%;}
    #test{width:40%;padding:0;}
    .mui-btn{width:30%;margin:0;padding:0;}
</style>

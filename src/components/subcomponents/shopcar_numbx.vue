<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='99'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox"/>
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
                // 每当数量变化，则将最新的数量同步到购物车的store中覆盖
                this.$store.commit('updateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value});
            }
        },
        mounted() {
            mui('.mui-numbox').numbox()
            // console.log(this.initcount);
        },
        props:['initcount','goodsid']
    }
</script>

<style scoped>

</style>

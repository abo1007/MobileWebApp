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
                // 每当数据被修改的时候，立即通过事件调用向父组件传值
                // console.log(this.$refs.numbox.value);
                this.$emit('getcount',parseInt(this.$refs.numbox.value));
            }
        },
        mounted(){
            mui('.mui-numbox').numbox()
        },
        props:["max"],
        watch:{
            // 使用监听属性 动态监听并赋予max值 因为goodsinfo组件的then没有执行完毕时该组件可能已加载
            'max':(val, oldVal) => {
                mui('.mui-numbox').numbox().setOption('step',val);// JsAPI 设置最大值
            }
        }
    }
</script>

<style scoped>
    .mui-numbox{height:100%;width:100%;}
</style>

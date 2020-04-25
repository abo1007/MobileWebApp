<template>
    <div id="app">
        <div class="mui-content">
            <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                            推荐资讯
                        </a>
                        <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                            廊坊热点
                        </a>
                        <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                            前端后端
                        </a>
                        <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                            数据分析
                        </a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                            编程语言
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/MUI/js/mui.min.js'

    export default {
        name: "photoList",
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){
            // 当组建中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
            // 如果要操作元素了 最好在 mounted里面 因为这里的dom元素是最新的
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>

<style scoped>

</style>

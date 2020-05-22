<template>
    <div id="contact-container">
        <van-nav-bar
                title="联系我们"
                left-text="返回"
                left-arrow
                @click-left="goHome"/>
        <div class="content">
            <van-notice-bar :text="InformMsg" left-icon="volume-o"/>
            <van-card
                    desc="北京市东二环银河SOHO C1662"
                    title="北京总部"
                    thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588435257766&di=
                    8439e57c84483679d8a6a1940a60c632&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F20876%2F20875583.JPG">
                <template #tags>
                    <van-tag plain type="danger">研发中心</van-tag>
                    <van-tag plain type="primary">业务中心</van-tag>
                </template>
                <template #footer>
                    <van-button size="small" round>010-12345566</van-button>
                </template>
            </van-card>
            <van-card
                    desc="天津市和平区天津环球金融中心"
                    title="天津总部"
                    thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588436116596&di=46c5bb2007eb25d27ef1e2967610db03&
                    imgtype=0&src=http%3A%2F%2Fwww.jinmen.cc%2Fdata%2Fattachment%2Fforum%2F201708%2F05%2F203844i6io6ziajoim0aei.jpg">
                <template #tags>
                    <van-tag plain type="danger">研发中心</van-tag>
                    <van-tag plain type="primary">业务中心</van-tag>
                </template>
                <template #footer>
                    <van-button size="small" round>022-12228888</van-button>
                </template>
            </van-card>
            <van-card
                    desc="廊坊市广阳区万达广场E座1801"
                    title="廊坊总部"
                    thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588436724745&di=
                    80897a1bf9bc8d46c9365e8a07fa2095&imgtype=0&src=http%3A%2F%2Fimg-cdn.hopetrip.com.hk%2Fhotelv17%2F191%2Fff%2Fffaf5bdf64f47ca9390d9975cd0533a4.jpg">
                <template #tags>
                    <van-tag plain type="success">展示中心</van-tag>
                </template>
                <template #footer>
                    <van-button size="small" round>0316-2166888</van-button>
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
        data() {
            return {
                InformMsg: '为了回馈广大用户，我们临时决定每天客服只工作一小时。工作时间: 0:00-1:00'
            }
        },
        methods: {
            goHome() {
                this.$router.push('/home')
            }
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
    }

    #contact-container {

        .header {
            background-color: #008080;
            color: #ffffff;
            border-radius: 5px;
            height: 40px;

            h3 {
                text-align: center;
                line-height: 40px;
            }
        }
    }
</style>

const serverBase = "http://127.0.0.1:3008";
const v1 = serverBase + "/api/";
export default {
    // 根路径
    API_SERVER_BASE: serverBase,
    // 评论功能 获得数据
    API_GET_FEEDBACK: v1 + "getfeedback",
    // 评论功能 发送数据
    API_SEND_FEEDBACK: v1 + "submitfeedback",
    // 商品功能 获得图文介绍
    API_GET_GOODS_DESC: v1 + "getdesc/",
    // 商品功能 获得详情
    API_GET_GOODS_INFO: v1 + "getgoods?id=",
    // 商品功能 获得列表
    API_GET_GOODS_LIST: v1 + "getgoodslist?pageindex=",
    // 新闻功能 获得详情
    API_GET_NEWS_INFO: v1 + "getnewsinfo?newsid=",
    // 新闻功能 获得列表
    API_GET_NEWS_LIST: v1 + "getnewslist",
    // 图片功能 详情
    API_GET_PHOTO_INFO: v1 + "getimginfo/",
    // 图片功能 分类
    API_GET_PHOTO_CLASS: v1 + "getimgclass",
    // 图片功能 列表
    API_GET_PHOTO_LIST: v1 + "getimages/",
    // 获取视频列表
    API_GET_VIDEO_LIST: v1 + "getvideolist/1",
    // 留言功能 获得
    API_GET_COMMENT: v1 + "getcomments?",
    // 留言功能 提交
    API_POST_COMMENT: v1 + "submitcomment/",
    // 轮播图 获得
    API_GET_SWIPE: v1 + "getswipe",
    // 购物车 获得数据
    API_GET_SHOPCAR: v1 + "shopcardata/"
}

// this.$API.

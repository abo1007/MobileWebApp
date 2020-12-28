const serverBase = "http://127.0.0.1:3008";
const v1 = serverBase + "/api/";
export default{
    // 根路径
    API_SERVER_BASE:serverBase,
    // 留言功能 获得数据
    API_GET_FEEDBACK:v1+"getfeedback",
    // 留言功能 发送数据
    API_SEND_FEEDBACK:v1+"submitfeedback",
    // 商品功能 获得图文介绍
    API_GET_GOODS_DESC:v1+"getdesc/",
    // 商品功能 获得详情
    API_GET_GOODS_INFO:v1+"getgoods",
    // 商品功能 获得列表
    API_GET_GOODS_LIST:v1+"getgoodslist?pageindex=",
    // 商品功能 获得详情
    API_GET_NEWS_INFO:v1+"getnewsinfo?newsid="
    // 商品功能 获得详情
}

// this.$API.

# 移动端web项目

## 相关技术

* Vue
* VueRouter
* MUI
* MintUI

## 流程

### 首页app组件
1. 完成 Header 区域，使用 Mint-UI 中的 Header 组件
2. 制作 Tabbar 区域，使用的是 MUI 的 Tabbar.html
    * 制作图标的操作会相对多一些
    * 先把拓展图标的css引入，再将其拓展字体库ttf文件引入
    * 为小图标添加样式类
3. 中间区域放置一个 router-view

### 改造tabbar为 router-link

### 设置路由高亮

### 点击 tabbar 中的路由链接，展示对应的路由组件

### 制作首页轮播图
1. 获取数据
2. 使用 get 获取数据
3. 获取到的数据保存到data身上、
4. 使用v-for循环渲染每个item

### 改造 九宫格区域 的样式

### 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制界面，使用Mui的media-list
2. 获取数据
3. 渲染真实数据

### 实现 新闻列表点击跳转到详情
1. 把列表的每一项改造为 router-link
2. 同时在跳转的时候应该提供唯一的id标识符
3. 创建新闻详情页面 newsinfo.vue
4. 在路由模块中将新闻详情的 路由地址 和 组件页面 关联


## 代码托管

#### 传统命令行方式 git 提交代码
1. git add .
2. git commit -m "提交信息"
3. git push

#### 也可用vscode的可视化工具
1. 点击对勾提交
2. 点击推送 上传到远端

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

### 实现新闻详情 的页面布局 和数据渲染

### 单独封装一个comment.vue评论子组件
1. 先创建一个单独的 comment.vue 组件模板
2. 在需要使用 comment 组件的页面中，先手动导入 comment 组件
  + `import comment from './comment.vue'`
3. 在父组件中，使用 components 属性将 导入的comment组件注册为自己的子组件
4. 将注册子组件时候的注册名称，以标签形式，在页面中引用

### 获取所有的评论数据显示到页面中

### 实现点击加载更多评论的功能
1. 为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2. 点击加载更多，让 pageIndex++ ，然后重新调用getCommentsData方法重新获取最新一页的数据
3. 为了防止新数据覆盖老数据的情况，在点击加载更多的时候，每当获取到新数据，应该让老数据调用concat方法拼接新数据

### 发表评论
1. 把文本框做双向数据绑定
2. 为发表按钮绑定事件
3. 校验内容是否为空，如果为空，则用Toast提示用户，评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给服务器
5. 当发表内容Ok后，重新刷新列表，以查看最新的评论
 + 如果重新调用 getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 + 换种思路 : 当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后调用数组的 unshift 方法，把最新的评论追加到data中comments的开头
 + 这样就能完美实现刷新评论列表的需求:

### 改造 盗版资源 按钮为 路由的链接并显示对应的组件页面

### 绘制 图片列表 组件页面结构并美化样式
1. 制作顶部的滑动条
 * 需要借助Mui中的 tab-top-webview-main
 * 需要把 slider 区域的 mui-fullscreen 类去掉
2. 制作底部图片列表
3. 滑动条无法正常滑动，官方文档说明这是js组件，需要被初始化
 + 引入 mui.js
 + 调用 官方提供的方式去初始化
```
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
```
4. 在初始化滑动条的时候，导入的mui.js控制台报错
 + mui.js中可能用到了 caller callee arguments，但是webpack打包好的bundle.js中默认启动严格模式，所以冲突
```
TypeError: 'caller', 'callee', and 'arguments' properties 
may not be accessed on strict mode functions or the arguments objects for calls to them
```
 + 解决方案  1. 把mui.js中的非严格模式的代码改掉，不现实
 + 2. 把webpack打包时候的严格模式禁用掉 babel-plugin-transform-remove-strict-mode
5. 刚进入图片分享页面的时候 ，滑动条无法正常工作，如果初始化滑动条必须要等dom元素加载完毕，所以把初始化放到mounted里
6. 当滚动条调试ok后，发现tabbar无法正常工作了，这时候，我们需要把每个tabbar按钮的样式中 `mui-tab-item`改一下名字，并赋予原有样式
(未能成功，更换了vant)

### 制作图片列表区域
1. 图片列表需要使用懒加载技术，可以使用 MintUI提供的组件 lazy-load
2. 根据 `lazy-load` 文档使用
3. 渲染分类数据


## 代码托管

#### 传统命令行方式 git 提交代码
1. git add .
2. git commit -m "提交信息"
3. git push

#### 也可用vscode的可视化工具
1. 点击对勾提交
2. 点击推送 上传到远端

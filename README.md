# react的豆瓣电影demo
## 快速启动
* 现在环境：`npm  install`
* 项目开发环境：`npm  run  develop`
* 项目部署环境：`npm  run  publish`
* gulp和webpack的集成：`npm  run  gulp`



## 1、确定需求
* 列表页面
* 详细页面
* 搜索
* 加载更多

## 2、豆瓣api
* 详细数据接口：https://api.douban.com/v2/movie/subject/25847558
* 获取列表接口：https://api.douban.com/v2/movie/coming_soon?start=6&count=10


## react开发中的几个注意点
* 我们在MovieContainer中初始化了一下MovieListContainer，当我们再次通过路由跳转到MovieListContainer的时候，MovieListContainer没有被卸载，而是被复用了
* hashHistory会导致组件从新渲染两次，官方推荐使用browserhistory，链接拿到其他地方不能渲染的问题由服务器返回index.html页面解决：http://www.cnblogs.com/wonyun/p/5889008.html
* setState方法不是立即赋值，而是在当前方法体都执行完毕之后才从新为state赋值
* componentWillReceiveProps在组件第一次渲染的时候不会执行，等props改变的时候才会执行
* 如果全局为div设置了宽高100%，后面组件里面会自动继承全局的，然后效果是撑满全屏，如果只想撑满父组件，需要在div中从新设置htight=100%


## 开发思想
  + 组件拆分不可能一下分的非常好，那么你先把大的部分给分出来，哪里有性能问题再去优化，整个模块的拆分思想是，从大往小去分，从外往内去分。
  + 组件化开发，代码组织结构是按ui界面去划分的，不是按业务功能区组织。这样可能会导致代码冲突，但是带来的好处比代码冲突更多，就可以忽略代码冲突问题了。不可能每个点都照顾到。
  + ☆☆☆☆☆☆组件拆分和组件生命周期在路由中的应用和css-in-js这三点是react项目开发中最难的点☆☆☆☆
  + 只要晕了，就从新走生命周期
## 延迟加载
  + 配置webpack
  + 修改路由写法
  + 改变动态路由写法的原则是：首页用不到的都延迟加载




















































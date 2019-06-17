### 技术栈

vue + vuex + vue-router + webpack + ES6 + sass + flex + axios

### 项目运行
  >git clone https://github.com/zly11000/starbucked  

  >npm run dev  

  >npm run build  


### 目录结构
   project
     
     | --- build                         //webpack配置项
     |
     |
     | --- config                        //项目打包路径
     |
     |
     | --- dist
     |       |-static 
     |           |-css                      //css样式
     |           |-fonts                    //iconfont图标
     |           |-img                      //图片
     |           |-js                       //打包的js文件
     |
     | ---api
     |     |-index.js                       // 请求的接口地址
     |
     | ---components                        //组件
     |      |-submit
     |           |-index.vue               //弹出框组件
     |      |-dialog.vue                   //蒙层组件
     |      |-header.vue                  //头部公共组件
     |
     | --- router
     |       |-index.js                    //路由的配置
     |
     | ---static                          //静态文件
     |       |-fonts
     |       |-style
     |           |--_minin.scss
     |           |--common.scss
     |       |-flexble.js
     |
     | ---store                       //仓库异步加载
     |       |-modules                //store模块
     |            |-user.js           //查询用户是否登陆
     |       |-index.js               //引用vuex,创建store
     |
     | ---utils                       //工具类文件夹
     |       |-isfile.js              //判断上传的是不是图片和图片的大小
     |       |-request.js               //对axios进行进一步的封装
     |
     | ---views                            //所有的视图文件
     |       |-index                        //首页
     |           |-components                 //首页的组件        
     |                 |-list.vue             //渲染首页的加班与休假
     |                 |-table.vue            //首页切换加班与休假的数据
     |                 |-index.vue            //首页
     |       |-commit.vue                 //办公室加班或休假申请表
     |       |-detail.vue                 //加班或休假详情页
     |       |-history.vue               //历史页
     |       |-logo.vue                  //登录页
     |       |-search.vue                //搜索页
     |
     | --- App.vue          //页面入口文件
     |
     | --- main.js          //入口文件,加载公共组件
     |
     |


### 目标功能
   >登录   ---  完成

   >任务列表   --- 完成列表

   >加班与休假的table切换  --- 完成

   >加班详情列表   --- 完成

   >休假详情列表   --- 完成

   >蒙层    --- 完成

   >上传附件  --- 完成

   >提交加班  --- 完成

   >提交休假  --- 完成

   >审批历史   ---完成

   >搜索       ---完成
   
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
let routers =  new Router({
    routes:[
        {
            path:"/",
            redirect:"/index"
        },
        {
            path:"/index",
            meta:{
                title:"休假"
            },
            component:()=>import("../views/index/index.vue"),
        },{
            path:"/logo",
            component:()=>import("../views/logo.vue")
        },
        {
            path:"/detail/:type/:id",
            name:"detail",
            props:true,
            component:()=>import("../views/detail.vue")
        },
        {
            path:"/commit/:type",
            props:true,
            component:()=>import("../views/commit.vue")
        },
        {
            path:"/search",
            component:()=>import("../views/search.vue")
        },
        {
            path:"/history/:id",
            props:true,
            component:()=>import("../views/history.vue")
        },
        
    ]
})
routers.beforeEach((to,from,next)=>{
    window.title = to.meta.title
    next()

})
export default routers;
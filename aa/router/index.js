/*
    路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MHome from '../pages/MHome/MHome'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

    //声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
        {
            path: '/mhome',
            component: MHome,
            meta:{
                showfooter:true
            }
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showfooter:true
            }
        },
        {
            path: '/order',
            component: Order,
            meta:{
                showfooter:true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta:{
                showfooter:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                showfooter:false
            }
        },
        {
            //默认路由 主界面
            path:'/',
            redirect:'/mhome'
        }
    ]
})
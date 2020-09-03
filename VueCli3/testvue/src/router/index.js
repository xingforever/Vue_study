//配置路由相关路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
//1 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2 创建路由对象
const routes = [

    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/user',
        component: User
    }
]
const router = new VueRouter({
    //配置路由和组件的应用关系
    routes: routes,
    mode: 'history'
})
//3 将router 对象传到Vue实例
export default router
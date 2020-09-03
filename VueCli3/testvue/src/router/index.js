//配置路由相关路由
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const User = () => import('../components/User')
const About = () => import('../components/About')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
//1 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2 创建路由对象
const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [{
            path: 'news',
            components: HomeNews
        }, {
            path: 'message',
            components: HomeMessage
        }]
    },
    {
        path: '/about',
        component: About
    },

    {
        path: '/user/:abc',
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
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
const Profile = () => import('../components/Profile.vue')
//1 通过 Vue.use(插件) 安装插件
Vue.use(VueRouter)

//2 创建路由对象
const routes = [{
        path: '/',
        redirect: '/home',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        children: [
            {
                path: '/news',
                components: HomeNews,
                 meta: {
                    title: '首页-新闻'
                }
            },
            {
                path: '/message',
                components: HomeMessage,
                meta: {
                   title: '首页-信息'
               }
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        },
        beforeEnter: (to, from, next) => {
            console.log('--ssss----');
        }
    },
    {
        path: '/user/:abc',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new VueRouter({
    //配置路由和组件的应用关系
    routes: routes,
    mode: 'history'
})
//前置勾子
router.beforeEach((to, from, next) => {
    document.title = to.matched[0].meta.title;
    next()
})
router.afterEach((to, from) => {
    console.log('ll');
})
//3 将router 对象传到Vue实例
export default router
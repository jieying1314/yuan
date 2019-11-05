import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Main = ()=>import ('@/pages/main')
const Message = ()=>import ('@/pages/message')
const Personal = ()=>import ('@/pages/personal')
const Search = ()=>import ('@/pages/search')
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/main',
            component: Main,
            name:'main'
        },
        {
            path: '/message',
            component: Message,
            name:'message'
        },
        {
            path: '/personal',
            component: Personal,
            name:'personal'
        },
        {
            path: '/search',
            component: Search,
            name:'search'
        }]
})
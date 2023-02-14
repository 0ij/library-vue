import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Shopping from '@/views/Shopping'
import Search from '@/views/Search'
import Book from '@/views/Book'
import Help from '@/views/Help'
import FAQ from '@/views/FAQ'
import Rule from '@/views/Rule'
import Contact from '@/views/Contact'
import BookDetail from '@/views/BookDetail'
import SearchBook from '@/views/SearchBook'
import Orders from "../views/Orders";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/shopping',
      name:'Shopping',
      component:Shopping
    },
    {
      path:'/orders',
      name:'Orders',
      component:Orders
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/book',
      name:'Book',
      component:Book
    },
    {
      path:'/help',
      name:'Help',
      component:Help
    },
    {
      path:'/faq',
      name:'FAQ',
      component:FAQ
    },
    {
      path:'/rule',
      name:'Rule',
      component:Rule
    },
    {
      path:'/contact',
      name:'Contact',
      component:Contact
    },
    {
      path:'/bookhome.jsp',
      name:'bookhome.jsp',
      component:BookDetail
      //component:()=>import('@/views/bookDetail')
    },
    {
      path:'/searchbook',
      name:'SearchBook',
      component:SearchBook
    }
  ]
})

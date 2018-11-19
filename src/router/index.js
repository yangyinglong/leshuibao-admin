import Vue from 'vue'
import Router from 'vue-router'
import Enter from '@/components/Enter'
import OrderCenter from '@/components/OrderCenter'
// import Payment from '@/components/Payment'
// import UserCenter from '@/components/UserCenter'
// import TradingHall from '@/components/TradingHall'
// import OrderInfo from '@/components/OrderInfo'
import OrderShow from '@/components/OrderShow'
// import OrderEdit from '@/components/OrderEdit'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Enter',
//       component: Enter
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/register',
//       name: 'Register',
//       component: Register
//     },
//     {
//       path: '/tradinghall',
//       name: 'TradingHall',
//       component: TradingHall
//     },
//     {
//       path: '/ordercenter',
//       name: 'OrderCenter',
//       component: OrderCenter
//     },
//     {
//       path: '/payment',
//       name: 'Payment',
//       component: Payment
//     },
//     {
//       path: '/usercenter',
//       name: 'UserCenter',
//       component: UserCenter
//     },
//     {
//       path: '/orderinfo',
//       name: 'OrderInfo',
//       component: OrderInfo
//     }
//   ]
// })

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Enter',
      component: Enter
    },
    {
      path: '/ordercenter',
      name: 'OrderCenter',
      component: OrderCenter,
      // meta: {authRequired: true}
    },
    {
      path: '/ordershow',
      name: 'OrderShow',
      component: OrderShow,
      // meta: {authRequired: true}
    }
    ]
})

router.beforeEach((to, from, next) => {    //判断是否需要登录拦截
  if (to.meta.authRequired) {        //存在token正常跳转
    if (sessionStorage.getItem('status') == 1) {
      next()
    } else {
      next({path: '/'})
    }
  } else {
    next()
  }
})

export default router


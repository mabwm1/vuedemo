import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login/Login'
import Order from '@/pages/Order/Order'
import Page1 from '@/pages/Order/page1/page1'
import Page2 from '@/pages/Order/page2/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        isHideHeader:true,
        isHideFooter:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      // 独立守卫
      beforeEnter:(to,from,next)=>{
        console.log("进入独享守卫");
        console.log(to);
        console.log(from);
        console.log(next);
        let isLogin = true;// 已登录
        if(isLogin == false){// 如果没有登录，不能进入订单页面
          next({path:"/login"});
        }
        next();
      },
      //二级路由
      children:[
        {
          path:'page1/:id',
          component: Page1,
          // 独立守卫
          beforeEnter:(to,from,next)=>{
            console.log("进入独享守卫");
            if(to.params.id > 0){// 有id
              next();
            }else{
              next({path:"/login"});
            }
          }
        },
        {
          path:'page2',
          component:Page2
        }
      ]
    }
  ]
})

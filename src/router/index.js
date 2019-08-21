import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import email from '@/components/email'
import tel from '@/components/tel'
import eventBusDemo from '@/components/eventBusDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/eventBusDemo',
      name: 'eventBusDemo',
      component: eventBusDemo,
      children:[
        {
          path: '/email',
          name: 'email',
          component: email
        },
        {
          path: '/tel',
          name: 'tel',
          component: tel
        }
      ]
    },
    
  ]
})

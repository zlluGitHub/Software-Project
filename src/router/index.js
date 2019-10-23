import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'workbench',
      component: () => import('../components/viwe/workbench/Workbench.vue')
    },
    {
      path: '/',
      name: 'workarea',
      component: () => import('../components/template/WorkArea.vue'),
      // redirect: '/workbench',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/workbench',
          name: 'workbench',
          component: () => import('../components/viwe/workbench/Workbench.vue')
        }
      ]
    },
    {
      path: '/sif',
      name: 'setupInterFace',
      component: () => import('../components/template/SetupInterFace.vue'),
      redirect: '/sif/uc',//设置默认指向的路径
      children: [
        {
          path: '/sif/uc',
          name: 'center',
          component: () => import('../components/viwe/setUpSys/Center.vue'),
        },
        {
          path: '/sif/uol',
          name: 'operationLog',
          component: () => import('../components/viwe/setUpSys/OperationLog.vue')
        },
        {
          path: '/sif/us',
          name: 'settings',
          component: () => import('../components/viwe/setUpSys/Settings.vue')
        }

      ]
    },
  ]
})

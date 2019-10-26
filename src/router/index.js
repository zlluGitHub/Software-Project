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
      path: '/task',
      name: 'taskManagement',
      component: () => import('../components/template/TaskManagement.vue'),
      redirect: '/task/bug',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/task/bug',
          name: 'bugList',
          component: () => import('../components/viwe/bugList/BugList.vue')
        }
      ]
    },

    {
      path: '/project',
      name: 'projectManagement',
      component: () => import('../components/template/ProjectManagement.vue'),
      redirect: '/project/index',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/project/index',
          name: 'index',
          component: () => import('../components/viwe/default/Index.vue')
        }
      ]
    },

    {
      path: '/team',
      name: 'teamManagement',
      component: () => import('../components/template/TeamManagement.vue'),
      redirect: '/team/index',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/team/index',
          name: 'index',
          component: () => import('../components/viwe/default/Index.vue')
        }
      ]
    },

    {
      path: '/file',
      name: 'fileManagement',
      component: () => import('../components/template/FileManagement.vue'),
      redirect: '/file/index',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/file/index',
          name: 'index',
          component: () => import('../components/viwe/default/Index.vue')
        }
      ]
    },

    {
      path: '/template',
      name: 'templateManagement',
      component: () => import('../components/template/TemplateManagement.vue'),
      redirect: '/template/index',//设置默认指向的路径
      children: [ //这里就是二级路由的配置
        {
          path: '/template/index',
          name: 'index',
          component: () => import('../components/viwe/default/Index.vue')
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

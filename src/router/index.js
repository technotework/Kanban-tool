import Vue from 'vue'
import VueRouter from 'vue-router'
import RootPage from '../components/pages/root-page/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'root-page',
    component: RootPage,
    children: [
      {//新規登録画面
        path:  'regist',
        name: 'regist-page',
        component: () => import('../components/pages/regist-page/index.vue')
      },
      {//仮登録完了画面
        path:  'complete_regist_temp',
        name: 'complete-regist-temp-page',
        component: () => import('../components/pages/complete-regist-temp-page/index.vue')
      },
      {//登録完了画面
        path:  'complete_regist',
        name: 'complete-regist-page',
        component: () => import('../components/pages/complete-regist-page/index.vue')
      },
      {//ログイン画面
        path:  'login',
        name: 'login-page',
        component: () => import('../components/pages/login-page/index.vue')
      },
      {//パスワード再発行画面
        path:  'password_reissue',
        name: 'password-reissue-page',
        component: () => import('../components/pages/password-reissue-page/index.vue')
      },
      {//パスワードリセット画面
        path:  'password_reset',
        name: 'password-reset-page',
        component: () => import('../components/pages/password-reset-page/index.vue')
      },
      {//プロジェクト一覧画面
        path:  'project_list',
        name: 'project-list-page',
        component: () => import('../components/pages/project-list-page/index.vue')
      },
      {//プロジェクト画面
        path:  'project',
        name: 'project-page',
        component: () => import('../components/pages/project-page/index.vue')
      },
      {//検索結果画面
        path:  'search_task_list',
        name: 'search-task-list-page',
        component: () => import('../components/pages/search-task-list-page/index.vue')
      },
      {//アーカイブ画面
        path:  'archive_task_list',
        name: 'archive-task-list-page',
        component: () => import('../components/pages/archive-task-list-page/index.vue')
      },
      {//タスク編集画面
        path:  'task_edit',
        name: 'task-edit-page',
        component: () => import('../components/pages/task-edit-page/index.vue')
      },
      {//契約管理
        path:  'manage_plan',
        name: 'manage-plan-page',
        component: () => import('../components/pages/manage-plan-page/index.vue')
      },
      {//メンバー管理
        path:  'manage_member',
        name: 'manage-member-page',
        component: () => import('../components/pages/manage-member-page/index.vue')
      },
      {//アカウント管理
        path:  'edit_profile',
        name: 'edit-profile-page',
        component: () => import('../components/pages/edit-profile-page/index.vue')
      },
      
    ]
  },
  {//notfound
    path: '/*',
    name: 'notfound-page',
    component: () => import('../components/pages/notfound-page/index.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

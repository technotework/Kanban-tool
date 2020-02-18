import Vue from 'vue'
import VueRouter from 'vue-router'
import RootPage from '../components/pages/root-page/index.vue'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'root-page',
    component: RootPage,
    children: [
      {//ログイン画面
        path: 'login',
        name: 'login-page',
        component: () => import('../components/pages/login-page/index.vue')
      },
      {//プロジェクト一覧画面
        path: 'projects',
        name: 'project-list-page',
        component: () => import('../components/pages/project-list-page/index.vue'),
        meta: { requiresAuth: true }
      },
      {//プロジェクト画面
        path: 'projects/:id',
        name: 'project-page',
        component: () => import('../components/pages/project-page/index.vue'),
        meta: { requiresAuth: true }
      },
      /*{//タスク編集画面
        path: 'project/:task-id',
        name: 'task-edit-page',
        component: () => import('../components/pages/task-edit-page/index.vue'),
        meta: { requiresAuth: true }
      },
      {//新規登録画面
        path:  'regist',
        name: 'regist-page',
        component: () => import('../components/pages/regist-page/index.vue')
      },
      {//仮登録完了画面
        path:  'complete-regist-temp',
        name: 'complete-regist-temp-page',
        component: () => import('../components/pages/complete-regist-temp-page/index.vue')
      },
      {//登録完了画面
        path:  'complete-regist',
        name: 'complete-regist-page',
        component: () => import('../components/pages/complete-regist-page/index.vue')
      },*/
      /*{//パスワード再発行画面
        path:  'password-reissue',
        name: 'password-reissue-page',
        component: () => import('../components/pages/password-reissue-page/index.vue')
      },
      {//パスワードリセット画面
        path:  'password-reset',
        name: 'password-reset-page',
        component: () => import('../components/pages/password-reset-page/index.vue'),
        meta: { requiresAuth: true }
      },*/
      /*{//検索結果画面
        path:  'project/:project-id/search-task-list',
        name: 'search-task-list-page',
        component: () => import('../components/pages/search-task-list-page/index.vue'),
        meta: { requiresAuth: true }
      },
      {//アーカイブ画面
        path:  'project/:project-id/archive-task-list',
        name: 'archive-task-list-page',
        component: () => import('../components/pages/archive-task-list-page/index.vue'),
        meta: { requiresAuth: true }
      },*/
      /* {//契約管理
         path:  'manage-plan',
         name: 'manage-plan-page',
         component: () => import('../components/pages/manage-plan-page/index.vue'),
         meta: { requiresAuth: true }
       },
       {//メンバー管理
         path:  'manage-member',
         name: 'manage-member-page',
         component: () => import('../components/pages/manage-member-page/index.vue'),
         meta: { requiresAuth: true }
       },
       {//アカウント管理
         path:  'edit-profile',
         name: 'edit-profile-page',
         component: () => import('../components/pages/edit-profile-page/index.vue'),
         meta: { requiresAuth: true }
       },*/

    ]
  },
  {//notfound
    path: '/*',
    name: 'notfound-page',
    component: () => import('../components/pages/notfound-page/index.vue')

  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  // ログインの有無判断
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // ログイン時は各ページに移動
        next();
      } else {
        // 未ログイン時はログイン画面にリダイレクト
        next({
          //path: '/app/login'
        })
      }
    });
  } else {
    next();
  }
});


export default router

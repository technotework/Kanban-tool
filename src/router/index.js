import Vue from "vue";
import VueRouter from "vue-router";
import RootPage from "../components/pages/root-page/index.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "root-page",
        redirect: "/projects",
        component: RootPage,
        children: [
            {
                //ログイン画面
                path: "login",
                name: "login-page",
                component: () => import("../components/pages/login-page/index.vue")
            },
            {
                //プロフィール登録
                path: "profile",
                name: "regist-profile-page",
                component: () => import("../components/pages/regist-profile-page/index.vue"),
                meta: { requiresAuth: true }
            },
            {
                //プロジェクト一覧画面
                path: "projects",
                name: "project-list-page",
                component: () => import("../components/pages/project-list-page/index.vue"),
                meta: { requiresAuth: true }
            },
            {
                //プロジェクト画面
                path: "projects/:id",
                name: "project-page",
                component: () => import("../components/pages/project-page/index.vue"),
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        //notfound
        path: "/*",
        redirect: "/projects"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    let fb = store.getters.firebase;
    // ログインの有無判断
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth) {
        fb.auth().onAuthStateChanged(function(user) {
            if (user) {
                // ログイン時は各ページに移動
                next();
            } else {
                // 未ログイン時はログイン画面にリダイレクト
                next({
                    path: "/login"
                });
            }
        });
    } else {
        next();
    }
});

export default router;

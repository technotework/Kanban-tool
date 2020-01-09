//vueコンポーネント一括生成

let fs = require('fs');

let childPages = [
    {
        jname: "新規登録画面",
        name: "regist-page",
        to: ["complete-regist-temp-page", "login-page"]
    },
    {
        jname: "仮登録完了画面",
        name: "complete-regist-temp-page",
        to: []
    },
    {
        jname: "登録完了画面",
        name: "complete-regist-page",
        to: ["login-page"]
    },
    {
        jname: "ログイン画面",
        name: "login-page",
        to: ["regist-page", "password-reissue-page", "project-list-page"]
    },
    {
        jname: "パスワード再発行画面",
        name: "password-reissue-page",
        to: ["login-page"]
    },
    {
        jname: "パスワードリセット画面",
        name: "password-reset-page",
        to: ["login-page"]
    },
    {
        jname: "プロジェクト一覧画面",
        name: "project-list-page",
        to: ["project-page", "manage-plan-page", "manage-member-page", "edit-profile-page"]
    },
    {
        jname: "プロジェクト画面",
        name: "project-page",
        to: ["project-list-page", "search-task-list-page", "archive-task-list-page", "task-edit-page"]
    },
    {
        jname: "検索結果画面",
        name: "search-task-list-page",
        to: ["project-page"]
    },
    {
        jname: "アーカイブ画面",
        name: "archive-task-list-page",
        to: ["project-page"]
    },
    {
        jname: "タスク編集画面",
        name: "task-edit-page",
        to: ["project-page"]
    },
    {
        jname: "契約管理",
        name: "manage-plan-page",
        to: ["project-list-page"]
    },
    {
        jname: "メンバー管理",
        name: "manage-member-page",
        to: ["project-list-page"]
    },
    {
        jname: "アカウント管理",
        name: "edit-profile-page",
        to: ["project-list-page"]
    }
];



/*-----------------
ファイル作成
-----------------*/


//実行処理
function exec() {

    let childString = "";
    for (let i = 0; i < childPages.length; i++) {

        //childの生成
        let comment = childPages[i]["jname"];
        let name = childPages[i]["name"];
        let url = getURLString(name);
        childPages[i]["url"] = url;
        let filePath = name;

        childString += getChildRouterTemplate(comment, url, name, filePath);

    }

    //テンプレの取得
    let content = getTemplate(childString);
    //書き込み
    createDirctory("src/router/");
    createFiles("src/router/index.js", content);

    //リンクの生成
    appendLinkToCmponents();
}

//既存コンポーネントにrouter-linkを書き込む
function appendLinkToCmponents() {

    for (let i = 0; i < childPages.length; i++) {

        //リンク文字列の取得
        appned(childPages[i]);
    }

}

//URL文字列生成
function getURLString(name) {

    let result = name.replace("-page", "");
    result = result.replace(/-/g, "_");
    return result;
}

//ディレクトリ生成処理
function createDirctory(dirName) {

    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
}


//ファイル生成処理
function createFiles(filePath, content) {
    console.log(filePath);
    fs.writeFile(filePath, content, function (err) {

        if (err) {
            throw err;
        }
    });

}

function getTemplate(children) {

    return `import Vue from 'vue'
import VueRouter from 'vue-router'
import RootPage from '../components/pages/root-page/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app',
    name: 'root-page',
    component: RootPage,
    children: [
      ${children}
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
`;
}

function getChildRouterTemplate(comment, url, name, filePath) {

    return `{//${comment}
        path:  '${url}',
        name: '${name}',
        component: () => import('../components/pages/${filePath}/index.vue')
      },
      `;
}

function appned(routerObject) {

    let obj = routerObject;


    let link = obj["to"];
    let content = "";

    if (link.length > 0) {

        //リンク生成処理
        for (let i = 0; i < link.length; i++) {

            let url = "/app/" + getURLString(link[i]);
            let targetName = link[i];
            content += getLink(url, targetName);
        }

        let targetFile = "src/components/pages/" + obj["name"] + "/index.vue";

        //書き込み処理
        fs.readFile(targetFile, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            var result = data.replace('<!--pagelink-->', content);

            fs.writeFile(targetFile, result, 'utf8', function (err) {
                if (err) return console.log(err);
            });
        });
    }

}

function getLink(path, name) {

    return `
    <router-link to="${path}">${name}</router-link><br>
    `;
}



exec();



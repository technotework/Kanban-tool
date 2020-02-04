//vueコンポーネント一括生成

let fs = require('fs');

let compoNameKebab = "";
let compoNamePascal = "";

let atoms = [
    "base-heading",
    "base-image",
    "base-icon",
    "base-text",
    "base-editable-text",
    "base-form-label",
    "base-input",
    "base-check-box",
    "base-select",
    "base-file-select",
    "base-button",
    "base-link-button",
    "base-time-text",
    "base-modeless-container",
    "base-modal-container",
    "base-color-chip",
    "base-markdown-container"
];

let mol = [

    "labeled-input",
    "float-message",
    "inline-message",
    "confirmation-dialogue",
    "input-confirmation-dialogue",
    "context-menu-list",
    "context-menu-list-item",
    "comment-form",
    "color-label",
    "iconed-text",
    "iconed-text-button",
    "color-palette-picker",
    "input-checkbox",
    "search-form"
];

let org = [
    "regist-form",
    "login-form",
    "project-list-item",
    "project-list",
    "project-board-quick-editor",
    "project-board-list-item",
    "project-board-list",
    "project-task-list-item",
    "project-task-list",
    "task-info",
    "task-comment-list-item",
    "task-comment-list",
    "task-post-form",
    "task-comment-unit",
    "task-label-list-item",
    "task-label-list",
    "task-member-list-item",
    "task-member-list",
    "task-schedule",
    "label-master-list-item",
    "label-master-list",
    "label-master-post-form",
    "member-master-list-item",
    "member-master-list",
    "archive-list-item",
    "archive-list",
    "search-list-item",
    "search-list",
    "manage-member-list-item",
    "manage-member-list"
];

let temp = [

    "holy-grail-layout",
    "holy-grail-top",
    "holy-grail-bottom",
    "holy-grail-main",
    "holy-grail-left",
    "holy-grail-right",
    "table-header",
    "table-row",
    "table-col",
    "flex-layout",
    "both-side-layout",
    "both-side-left",
    "both-side-right",
    "layout-spacer",
];

let page = [
    //"root-page",
    "notfound-page",
    "regist-page",
    "complete-regist-temp-page",
    "complete-regist-page",
    "login-page",
    "password-reissue-page",
    "password-reset-page",
    "project-list-page",
    "project-page",
    "task-edit-page",
    "label-master-page",
    "member-master-page",
    "calender-edit-page",
    "archive-task-list-page",
    "search-task-list-page",
    "manage-plan-page",
    "manage-member-page",
    "edit-profile-page"
];

let directories = [

    { val: atoms, dir: "src/components/atoms/" },
    { val: mol, dir: "src/components/molecules/" },
    { val: org, dir: "src/components/organisms/" },
    { val: temp, dir: "src/components/templates/" },
    { val: page, dir: "src/components/pages/" },
];

//実行処理
function exec() {

    for (let i = 0; i < directories.length; i++) {

        let subDirArray = directories[i]["val"];
        let dir = directories[i]["dir"];

        scafold(dir, subDirArray);
    }

}


function scafold(dir, subDirArray) {

    for (let i = 0; i < subDirArray.length; i++) {

        let dirName = dir + subDirArray[i];
        let fileName = dirName + "/index.stories.js";
        compoNameKebab = subDirArray[i];
        compoNamePascal = renamePascal(compoNameKebab);
        changeFile(fileName, compoNamePascal);
    }

}
function renamePascal(str) {

    let array = str.split("-");
    for (let i = 0; i < array.length; i++) {

        let targetText = array[i];
        //一文字目を大文字にする
        let firstLetter = targetText.charAt(0).toUpperCase();
        let resultText = targetText.replace(/^./, firstLetter);
        //再格納
        array[i] = resultText;
    }

    let result = array.join("");


    return result;
}

function insertStr(str, index, insert) {
    return str.slice(0, index) + insert + str.slice(index, str.length);
}

//ファイル生成処理
function changeFile(filePath, pascal) {
    
    
    try {
        let f = fs.readFileSync(filePath,'utf-8');
        if(f){
            let path = filePath.replace("src/","@/").replace("index.stories.js","");
            let imp = path;
            console.log(`============== ${imp}`);
            let match = f.match(/export default createDefStory.*/);
            let insert1 = match[0].replace(");",", description);");
            let insert2 = insert1.replace("export","let description = "+"'import " + `${pascal}` + " from " +  `"${imp}"` + "';" + "\nexport" );
            
            let replaced = f.replace(match,insert2);
            createFiles(filePath,replaced);
        }

    } catch (error) {
        
    }

}

function createFiles(filePath, content) {
    console.log(filePath);
    fs.writeFile(filePath, content, function (err) {

        if (err) {
            throw err;
        }
    });

}


exec();



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
    //"base-button",
    "base-link-button",
    "base-time-text",
    "base-modeless-container",
    "base-modal-container",
    "base-color-chip",
    "base-markdown-container"
];


let directories = [

    { val: atoms, dir: "src/components/atoms/" }
];


/*-----------------
ファイル作成
-----------------*/

//パスカルケースに変換
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
        let fileName = dirName + "/compose.js";
        compoNameKebab = subDirArray[i];
        compoNamePascal = renamePascal(compoNameKebab);

        let temp = getTemplate(fileName,dirName);
        //console.log(compoNameKebab, compoNamePascal);
        createDirctory(dirName);
        createFiles(fileName, temp);
    }

}



//ディレクトリ生成処理
function createDirctory(dirName) {

    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
}


//ファイル生成処理
function createFiles(filePath, content) {
    //console.log(filePath);
    fs.writeFile(filePath, content, function (err) {

        if (err) {
            throw err;
        }
    });

}

function getTemplate(filePath,dirName) {

    let path = dirName.replace("src/components/","")
    .replace(/\/.+/,"");

   let a =  `
import Vue from "vue"
import styled from "vue-styled-components";
import ${compoNamePascal} from "./index.vue"

/*=========================================================

=========================================================*/
const StyledComponent = styled(${compoNamePascal})` + "`" + "`";

let b = `
const ExtendsButton = Vue.component("extends-component",{
    components: {StyledComponent},
    template: ` + "`";

let c = 
    `<StyledComponent />` + "`";
    
let d = `,
    methods:{
        ...${compoNamePascal}.methods
    }
    });

export {ExtendsButton}`

return a+b+c+d;

}



exec();



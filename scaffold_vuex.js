//vueコンポーネント一括生成

let fs = require('fs');

let team = [
getFnc("updateTeamName","name","String")
];

let projects = [
getFnc("readProjectList","","Array"),
getFnc("updateProjectName","name","String"),
getFnc("deleteProject","projectId","Boolean"),
getFnc("createProject","","Boolean"),
getFnc("readProject","projectId","Boolean")
];

let boards = [
getFnc("createBoard","","Number"),
getFnc("updateBoardInfo","data","Object"),
getFnc("deleteBoard","boardId","Boolean")
];

let tasks = [
getFnc("createTask","boardId","Number"),
getFnc("moveTask","taskId,fromBoardId,toBoardId","Number"),
getFnc("deleteTask","taskId,boardId","Boolean"),
getFnc("archiveTask","taskId,boardId = 0","Boolean"),
getFnc("searchTask","query=''","Array"),
getFnc("readTask","taskId","Object"),
getFnc("updateTaskInfo","taskId,taskData","Boolean")
];

let comments = [
getFnc("createComment","taskId","Number"),
getFnc("deleteComment","commentId,taskId","Boolean"),
getFnc("updateComment","commentId,commentData","Boolean")
];

let taskLabels = [
getFnc("readTaskLabelList","taskId","Array"),
getFnc("deleteTaskLabel","labelId,taskId","Boolean"),
getFnc("updateTaskLabel","labelArray,taskId","Boolean")
];

let taskMembers = [
getFnc("readTaskMemberList","taskId","Array"),
getFnc("deleteTaskMember","memberId,taskId","Boolean"),
getFnc("updateTaskMember","memberArray,taskId","Boolean")
];

let masterLabels = [
getFnc("createLabel","labelData","Number"),
getFnc("readLabelList","","Array"),
getFnc("deleteLabel","labelID","Boolean"),
getFnc("updateLabel","labelArray","Boolean")
];

let masterMembers = [
getFnc("readMemberList","","Array"),
getFnc("deleteWithDrawnMember","memberId","Boolean"),
getFnc("updateMember","memberArray","Boolean")
];


let nameArray = [
	{name:"team",data:team},
	{name:"projects",data:projects},
	{name:"boards",data:boards},
	{name:"tasks",data:tasks},
	{name:"comments",data:comments},
	{name:"task-labels",data:taskLabels},
	{name:"task-members",data:taskMembers},
	{name:"master-labels",data:masterLabels},
	{name:"master-members",data:masterMembers}
];


//関数文字列生成
function getFnc(methodName,arg,responceType){
	
if(responceType != ""){
	
	res = "return result" + responceType +";";
}
	
let temp = 
`		${methodName}(${arg}){
		
			let result${responceType};
		
			${res}
		},
`;

return temp;
}

//実行
function exec() {

	for (let i = 0; i < nameArray.length; i++) {

		let fileName = nameArray[i]["name"] + ".js";
		let methodsArray = nameArray[i]["data"];
		let content = createContent(methodsArray);
		
		createFiles("src/store/modules/" + fileName,content);
	}

}

//methodsをくみこんだコンテンツを生成
function createContent(methodsArray){

	let methodsText = "";	

	for (let i = 0; i < methodsArray.length; i++) {

		methodsText += methodsArray[i];
	}
	
	
	return getTemplate(methodsText);
}

//テンプレート生成
function getTemplate(text){

	return `import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
	},
	mutations: {
	},
	methods: {
${text}
	}
	actions: {
	},
	modules: {
	}
})`;
	
}

//ファイル生成処理
function createFiles(filePath, content) {

    fs.writeFile(filePath, content, function (err) {

        if (err) {
            throw err;
        }
    });

}


exec();


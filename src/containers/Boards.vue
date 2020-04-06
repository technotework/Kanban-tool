<template>
    <BoardUnit
        v-model="boardList"
        :title.sync="projectName"
        :task-container="task"
        :user-data="userData"
        @edited-board-name="onInputBoardName"
        @context-menu-click="onClickContextMenu"
        @drag-sort-list="onDragSortList"
        @create-board="onCreateBoard"
        @nav-event="onClickBack"
    />
</template>

<script>
/**
 *VuexModules boardsと通信を行うコンテナ
 */
import { mapActions, mapGetters, mapMutations } from "vuex";
import BoardUnit from "@/components/organisms/boards/board-unit/";
import Task from "@/containers/Tasks";
import { getConfirmMessage } from "@/containers/resorces/message";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
export default {
    name: "Boards",
    created: function () {
        //ページクローズ前処理のListen
        window.addEventListener("beforeunload", this.unload);
        //ロードの表示
        this.showLoad(true);
        //初期処理とリロード処理・ログイン状態チェック
        this.unlisten = this.$store.getters.firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    const uid = user.uid;
                    const path = "/projects/" + this.$route.params.id;
                    this.$store
                        .dispatch("auth/setUserInfo", { uid: uid, path: path })
                        .then(() => {
                            this.init();
                        });
                }
            });
    },
    /**
     * 離脱前処理をなげる
     */
    beforeDestroy: function () {
        this.$store.dispatch("boards/postProcess");
    },
    /**
     *廃棄
     */
    destroyed: function () {
        window.removeEventListener("beforeunload", this.unload);
        this.unlisten();
        this.$store.commit("boards/remove");
        this.$store.commit("members/remove");
    },
    data: () => {
        return {
            unlisten: null,
            projectId: "",
            task: Task,
            isShowLoad: false,
            isEditingProjectName: false,
        };
    },
    computed: {
        ...mapGetters("boards", ["boards"]),
        ...mapGetters("auth", ["user", "icon"]),
        boardList: {
            get() {
                return this.boards;
            },
            set(value) {
                this.$store.commit("boards/setBoardsData", value);
            },
        },
        projectName: {
            get() {
                const projects = this.$store.getters["projects/projects"];
                let title = "";
                if (this.projectId != undefined) {
                    for (let i = 0; i < projects.length; i++) {
                        if (projects[i].project.id == this.projectId) {
                            title = projects[i].project.label;
                        }
                    }
                }
                return title;
            },
            set(value) {
                //プロジェクト名をsetされたらチェックしてStoreになげる
                const obj = {
                    data: value,
                    name: "プロジェクト名",
                    require: true,
                    less: 15,
                };
                validateMultiple([obj], () => {
                    this.$store.dispatch("projects/updateProjectName", {
                        id: this.projectId,
                        name: value,
                    });
                });
            },
        },
        userData() {
            return { username: this.user.nickname, img: this.icon };
        },
    },
    methods: {
        ...mapActions("boards", [
            "initBoardData",
            "read",
            "create",
            "delete",
            "updateBoardName",
            "dragSortUpdate",
            "postProcess",
        ]),
        ...mapActions("members", ["getMembers"]),
        ...mapMutations("message", ["setBoardDialogue", "resetBoardDialogue"]),
        ...mapMutations("boards", ["setProjectId"]),
        /**
         * 初期化処理
         */
        async init() {
            this.projectId = this.$route.params.id;
            await this.getMembers(); //メンバーデータ読み込み

            this.initBoardData(this.$route.params.id);
            this.read(); //BoardData読み込み
            this.showLoad(false);
        },
        /**
         * handers
         */
        onInputBoardName(value) {
            const obj = {
                data: value.name,
                name: "ボード名",
                require: true,
                less: 12,
            };
            validateMultiple([obj], () => {
                this.updateBoardName(value);
            });
        },
        onClickContextMenu(value) {
            if (value.name == "delete") {
                this.showDeleteDialogue(value);
            }
        },
        onDragSortList(value) {
            this.dragSortUpdate(value);
        },
        onCreateBoard() {
            this.create();
        },
        onClickBack() {
            this.$router.go(-1);
        },
        /**
         * 削除ダイアログ表示
         */
        showDeleteDialogue(value) {
            //primary button callback
            const p = () => {
                this.delete(value.id);
                this.resetBoardDialogue();
            };
            //secondarybutton callback
            const s = () => {
                this.resetBoardDialogue();
            };

            const message = getConfirmMessage({
                type: TYPE.CONFIRM,
                normal: APP.DELETE,
                arg: { name: value.title },
            });
            const object = { text: message[0].text, p: p, s: s };

            this.setBoardDialogue(object);
        },
        /**
         *ローダー表示状態をevent通知
         */
        showLoad(value) {
            this.$emit("show-load", value);
        },
        unload(e) {
            e.preventDefault();
            this.postProcess();
            e.returnValue = "このアプリを離れますか？";
        },
    },
    components: {
        BoardUnit,
    },
};
</script>

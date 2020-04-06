<template>
    <ProjectUnit
        v-model="projectItems"
        :title.sync="teamName"
        :user-data="userData"
        @add-event="onClickNewProject"
        @context-menu-click="onClickContextMenu"
        @edited-project-name="onInputProjectName"
        @drag-sort-list="onDragSortList"
        @nav-event="onLogout"
    />
</template>

<script>
/**
 *VuexModules projectと通信するコンテナ
 */
import { mapActions, mapGetters, mapMutations } from "vuex";
import ProjectUnit from "@/components/organisms/projects/project-unit/";
import { getConfirmMessage } from "@/containers/resorces/message";
import { TYPE, APP } from "@/containers/resorces/message";
import { validateMultiple } from "@/containers/resorces/validator";
export default {
    name: "Projects",
    created: function () {
        //初期化時プロジェクトを読み込む・リロード時対応
        this.unlisten = this.$store.getters.firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    let uid = user.uid;
                    let path = "/projects";

                    this.$store
                        .dispatch("auth/setUserInfo", { uid: uid, path: path })
                        .then(() => {
                            this.isCreated = true;
                            this.init();
                        });
                }
            });
    },
    destroyed: function () {
        this.unlisten();
    },
    data: () => {
        return {
            unlisten: null,
            value: null,
        };
    },
    computed: {
        ...mapGetters("projects", ["projects"]),
        ...mapGetters("auth", ["user", "icon"]),
        ...mapGetters("team", ["team"]),
        projectItems: {
            get() {
                return this.projects;
            },
            set(value) {
                this.$store.commit("projects/setData", value);
            },
        },
        userData() {
            return { username: this.user.nickname, img: this.icon };
        },
        teamName: {
            get() {
                return this.team;
            },
            set(value) {
                const obj = {
                    data: value,
                    name: "チーム名",
                    require: true,
                    less: 15,
                };
                validateMultiple([obj], () => {
                    this.$store.dispatch("team/updateTeamName", value);
                });
            },
        },
    },
    methods: {
        ...mapActions("projects", [
            "initProjectData",
            "read",
            "create",
            "delete",
            "updateProjectName",
            "dragSortUpdate",
        ]),
        ...mapActions("auth", ["logout"]),
        ...mapMutations("message", [
            "setProjectDialogue",
            "resetProjectDialogue",
        ]),
        /**
         * 初期化処理
         */
        init() {
            this.initProjectData();

            this.$store.dispatch("projects/read");
            this.$store.dispatch("team/read");
        },
        /**
         * handlers
         */
        onClickNewProject() {
            //this.initProjectData();
            this.create();
        },
        onClickContextMenu(value) {
            const id = value.id;
            if (value.name == "delete") {
                //削除
                this.showDeleteDialogue(value);
            } else if (value.name == "edit") {
                //画面遷移
                const path = "projects/" + value.id;
                this.$router.push({
                    path: path,
                });
            }
        },
        onDragSortList(value) {
            this.dragSortUpdate(value);
        },
        onInputProjectName: function (value) {
            const obj = {
                data: value.name,
                name: "プロジェクト名",
                require: true,
                less: 15,
            };
            validateMultiple([obj], () => {
                this.updateProjectName(value);
            });
        },
        /**
         * プロジェクト削除
         * ダイアログ確認後Vuexへ
         */
        showDeleteDialogue(value) {
            //primary button callback
            const p = () => {
                this.delete(value.id);
                this.resetProjectDialogue();
            };
            //secondary button callback
            const s = () => {
                this.resetProjectDialogue();
            };

            const message = getConfirmMessage({
                type: TYPE.CONFIRM,
                normal: APP.DELETE,
                arg: { name: value.title },
            });
            const object = { text: message[0].text, p: p, s: s };

            this.setProjectDialogue(object);
        },
        /**
         * ログアウト
         */
        onLogout() {
            this.logout();
        },
    },
    components: { ProjectUnit },
};
</script>

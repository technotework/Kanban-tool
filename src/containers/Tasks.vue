<template>
    <TaskList
        v-model="taskList"
        :members-container="members"
        :open.sync="isOpen"
        :data-board-id="id"
        :my-editor-id="myEditorId"
        @save-event="onSave"
        @form-add="onCreate"
        @delete-event="onDelete"
        @drag-sort-list="onDragSortList"
        @drag-add-list="onDragAddList"
        @start-edit-task="onStartEdit"
        @complete-edit-task="onCompleteEdit"
    />
</template>

<script>
/**
 * Vuex modules tasks(動的)と通信するコンテナ
 */
import Members from "@/containers/Members";
import TaskList from "@/components/organisms/boards/task-list/";
import taskModule from "@/store/modules/tasks/tasks";
export default {
    name: "Tasks",
    props: {
        id: String
    },
    created: function() {
        this.init();
    },
    destroyed: function() {
        this.$store.commit(this.storeModuleName + "/remove");
        this.$store.unregisterModule(this.storeModuleName);
    },
    data: () => {
        return {
            storeModuleName: "",
            members: Members
        };
    },
    watch: {
        id(value) {
            this.storeModuleName = "task_" + value;
        }
    },
    computed: {
        taskList: {
            get() {
                let key = this.storeModuleName + "/tasks";
                return this.$store.getters[key];
            },
            set(value) {
                this.$store.commit(this.storeModuleName + "/setTasksData", value);
            }
        },
        isOpen: {
            //投稿エディタの開閉状況管理
            get() {
                let key = this.storeModuleName + "/isOpen";
                return this.$store.getters[key];
            },
            set(value) {
                this.$store.commit(this.storeModuleName + "/setEditorOpen", value);
            }
        },
        myEditorId() {
            return this.$store.getters["auth/user"].altId;
        }
    },
    methods: {
        /**
         * 初期化
         */
        init() {
            this.storeModuleName = "task_" + this.id;
        },
        /**
         * handlers
         */
        onSave(value) {
            this.$store.dispatch(this.storeModuleName + "/updateTask", value);
        },
        onCreate(value) {
            this.$store.dispatch(this.storeModuleName + "/createTask", value);
        },
        onDelete(value) {
            this.$store.dispatch(this.storeModuleName + "/deleteTask", value);
        },
        onDragSortList(value) {
            this.$store.dispatch(this.storeModuleName + "/dragSortUpdate", value);
        },
        onDragAddList(value) {
            this.$store.dispatch(this.storeModuleName + "/dragAdded", value);
        },
        onStartEdit(value) {
            this.$store.dispatch(this.storeModuleName + "/lockTask", value);
        },
        onCompleteEdit(value) {
            this.$store.dispatch(this.storeModuleName + "/unlockTask", value);
        }
    },
    components: { TaskList }
};
</script>

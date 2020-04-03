<template>
    <ContentAreaLayout>
        <template #nav>
            <AppHeader
                navname="logout"
                :username="userData.username"
                :img="userData.img"
                :title="title"
                @update:title="onEditedTeamName"
                @add-event="onCreateProject"
                @nav-event="onNavClick"
                >New Project</AppHeader
            >
        </template>
        <template #article>
            <ProjectList
                v-model="items"
                @context-menu-click="onMenuClick"
                @edited-project-name="onInput"
                @drag-sort-list="onDragSortList"
            />
        </template>
    </ContentAreaLayout>
</template>

<script>
/**
 * プロジェクト画面のヘッダと
 * プロジェクト一覧をまとめているコンポーネント
 *
 * project-unit -> project-list -> project-list-item
 */
import base from "@/components/utils/base-mixin";
import ProjectList from "@/components/organisms/projects/project-list/";
import AppHeader from "@/components/organisms/app-header/";
import ContentAreaLayout from "@/components/templates/content-area-layout/";
export default {
    mixins: [base],
    name: "ProjectUnit",
    props: {
        value: Array,
        title: String,
        userData: Object
    },
    computed: {
        items: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {
        /**
         * コンテキストメニュー押された
         */
        onMenuClick: function(value) {
            this.$emit("context-menu-click", value);
        },
        /**
         *プロジェクト名が変更された
         */
        onInput: function(value) {
            this.$emit("edited-project-name", value);
        },
        /**
         * ドラッグならべかえされた
         */
        onDragSortList(value) {
            this.$emit("drag-sort-list", value);
        },
        /**
         * プロジェクトが追加された
         */
        onCreateProject() {
            this.$emit("add-event");
        },
        /**
         * ナビゲーションが押された（ログアウト）
         */
        onNavClick() {
            this.$emit("nav-event");
        },
        /**
         * チーム名が変更された
         */
        onEditedTeamName(value) {
            this.$emit("update:title", value);
        }
    },
    components: {
        ContentAreaLayout,
        AppHeader,
        ProjectList
    }
};
</script>
<style lang="scss" module></style>

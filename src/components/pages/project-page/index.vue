<template>
    <Message target="board" :is-show-load="isShowLoad">
        <Boards @show-load="onShowLoad" />
    </Message>
</template>

<script>
/**
 *プロジェクト編集ページ
 */
import Boards from "@/containers/Boards";
import Message from "@/containers/Message";
export default {
    name: "ProjectPage",
    data: () => {
        return {
            isShowLoad: false
        };
    },
    methods: {
        onShowLoad(value) {
            this.isShowLoad = value;
        }
    },
    components: {
        Message,
        Boards
    }
};
</script>
<style lang="scss" module></style>

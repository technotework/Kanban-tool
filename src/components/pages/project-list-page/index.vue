<template>
    <Message target="project" v-model="disableMessage">
        <Projects />
    </Message>
</template>
<script>
/**
 *プロジェクトリストページ
 */
import Message from "@/containers/Message";
import Projects from "@/containers/Projects";
export default {
    name: "ProjectListPage",
    data: () => {
        return {
            disableMessage: false
        };
    },
    components: {
        Projects,
        Message
    }
};
</script>


import InlineMessage from "./index.vue";

export default {
    title:"molecules/InlineMessage",
    component: {InlineMessage}
};

export const Basic = () => ({
    components:{InlineMessage},
    template: "<InlineMessage />"
});
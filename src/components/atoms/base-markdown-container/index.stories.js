
import BaseMarkdownContainer from "./index.vue";

export default {
    title:"atoms/BaseMarkdownContainer",
    component: {BaseMarkdownContainer}
};

export const Basic = () => ({
    components:{BaseMarkdownContainer},
    template: "<BaseMarkdownContainer />"
});
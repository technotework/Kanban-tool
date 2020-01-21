
import BaseEditableText from "./index.vue";

export default {
    title:"atoms/BaseEditableText",
    component: {BaseEditableText}
};

export const Basic = () => ({
    components:{BaseEditableText},
    template: "<BaseEditableText />"
});

import FloatMessage from "./index.vue";

export default {
    title:"molecules/FloatMessage",
    component: {FloatMessage}
};

export const Basic = () => ({
    components:{FloatMessage},
    template: "<FloatMessage />"
});
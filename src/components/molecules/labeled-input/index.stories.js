
import LabeledInput from "./index.vue";

export default {
    title:"molecules/LabeledInput",
    component: {LabeledInput}
};

export const Basic = () => ({
    components:{LabeledInput},
    template: "<LabeledInput />"
});
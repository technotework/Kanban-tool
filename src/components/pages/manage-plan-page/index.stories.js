
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import ManagePlanPage from "./index.vue";

export default {
    title:"pages/ManagePlanPage",
    component: {ManagePlanPage},
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components:{ManagePlanPage,Theme},
    template: `<Theme><ManagePlanPage /></Theme>`
});
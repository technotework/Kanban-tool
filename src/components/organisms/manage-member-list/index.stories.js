
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import ManageMemberList from "./index.vue";

export default {
    title:"organisms/ManageMemberList",
    component: {ManageMemberList},
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components:{ManageMemberList,Theme},
    template: `<Theme><ManageMemberList /></Theme>`
});
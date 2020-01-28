
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import MemberMasterList from "./index.vue";

export default {
    title:"organisms/MemberMasterList",
    component: {MemberMasterList},
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components:{MemberMasterList,Theme},
    template: `<Theme><MemberMasterList /></Theme>`
});
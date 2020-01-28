
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import MemberMasterListItem from "./index.vue";

export default {
    title: "organisms/MemberMasterListItem",
    component: { MemberMasterListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { MemberMasterListItem, Theme },
    template: `<Theme><MemberMasterListItem /></Theme>`
});
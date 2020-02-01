
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskMemberList from "./index.vue";

export default {
    title: "organisms/TaskMemberList",
    component: { TaskMemberList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskMemberList, Theme },
    template: `<Theme><TaskMemberList /></Theme>`
});
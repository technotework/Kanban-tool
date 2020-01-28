
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import ProjectList from "./index.vue";

export default {
    title: "organisms/ProjectList",
    component: { ProjectList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectList, Theme },
    template: `<Theme><ProjectList /></Theme>`
});
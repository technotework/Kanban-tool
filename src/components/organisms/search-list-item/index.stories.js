
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import SearchListItem from "./index.vue";

export default {
    title: "organisms/SearchListItem",
    component: { SearchListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { SearchListItem, Theme },
    template: `<Theme><SearchListItem /></Theme>`
});
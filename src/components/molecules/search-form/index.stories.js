import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import SearchForm from "./index.vue";

export default {
    title: "molecules/SearchForm",
    component: { SearchForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { SearchForm, Theme },
    template: `<Theme><SearchForm /></Theme>`
});
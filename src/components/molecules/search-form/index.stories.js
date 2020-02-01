import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { SearchForm },
    template: `<SearchForm />`
});

import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import TableCol from "./index.vue";

export default {
    title: "templates/TableCol",
    component: { TableCol },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TableCol, Theme },
    template: `<Theme><TableCol /></Theme>`
});
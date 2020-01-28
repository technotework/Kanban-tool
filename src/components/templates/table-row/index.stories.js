
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import TableRow from "./index.vue";

export default {
    title: "templates/TableRow",
    component: { TableRow },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TableRow, Theme },
    template: `<Theme><TableRow /></Theme>`
});
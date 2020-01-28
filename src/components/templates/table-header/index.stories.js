
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import TableHeader from "./index.vue";

export default {
    title: "templates/TableHeader",
    component: { TableHeader },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TableHeader, Theme },
    template: `<Theme><TableHeader /></Theme>`
});
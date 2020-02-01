import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import InputCheckbox from "./index.vue";

export default {
    title: "molecules/InputCheckbox",
    component: { InputCheckbox },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { InputCheckbox, Theme },
    template: `<Theme><InputCheckbox /></Theme>`
});
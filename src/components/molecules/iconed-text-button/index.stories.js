import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import IconedTextButton from "./index.vue";

export default {
    title: "molecules/IconedTextButton",
    component: { IconedTextButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { IconedTextButton },
    template: `<IconedTextButton />`
});
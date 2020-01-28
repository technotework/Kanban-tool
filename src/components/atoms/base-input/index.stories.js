
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseInput from "./index.vue";

export default {
    title: "atoms/BaseInput",
    component: { BaseInput },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseInput, Theme },
    template: `<Theme><BaseInput width="200px" padding="5px" placeholder="please input" @input="action" required /></Theme>`,
    methods: { action: action('input') }
});
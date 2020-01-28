import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseHeading from "./index.vue";

export default {
    title: "atoms/BaseHeading",
    component: { BaseHeading },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseHeading, Theme },
    template: `
    <div>
    <Theme>
        <BaseHeading heading="lv1">h1</BaseHeading>
        <BaseHeading heading="lv2">h2</BaseHeading>
        <BaseHeading heading="lv3">h3</BaseHeading>
        <BaseHeading heading="lv4">h4</BaseHeading>
    </Theme>
    </div>`
});
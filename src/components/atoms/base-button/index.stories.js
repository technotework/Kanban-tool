import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseButton from "@/components/atoms/base-button/"
import { PrimaryButton, SecondaryButton } from "@/components/atoms/base-button/compose"

export default {
    title: "atoms/BaseButton",
    component: { BaseButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseButton, Theme },
    props: { value: { default: text("value", "ButtonName") } },
    template: `<Theme><BaseButton :value="value" @click="action" /></Theme>`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});

export const Primary = () => ({
    components: { PrimaryButton, Theme },
    template: `<Theme><PrimaryButton value="myButton" @click="action" /></Theme>`,
    methods: { action: action('click') }
});

export const Secondary = () => ({
    components: { SecondaryButton, Theme },
    template: `<Theme><SecondaryButton value="myButton" @click="action" /></Theme>`,
    methods: { action: action('click') }
});
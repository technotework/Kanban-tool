import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import { withKnobs, text, color, number } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import Theme from "@/components/themes/theme"
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
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});

export const Secondary = () => ({
    components: { SecondaryButton, Theme },
    template: `<Theme><SecondaryButton value="myButton" @click="action" /></Theme>`,
    parameters: {
        info: {},
    },
    methods: { action: action('click') }
});
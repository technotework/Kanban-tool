import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseButton from "@/components/atoms/base-button/"
import {PrimaryButton,SecondaryButton} from "@/components/atoms/base-button/compose"

export default {
    title:"atoms/BaseButton",
    component: {BaseButton},
};

export const Basic = () => ({
    components:{BaseButton,Theme},
    template: `<Theme><BaseButton value="myButton" @click="action" /></Theme>`,
    methods: { action: action('click') }
});

export const Primary = () => ({
    components:{PrimaryButton,Theme},
    template: `<Theme><PrimaryButton value="myButton" @click="action" /></Theme>`,
    methods: { action: action('click') }
});

export const Secondary = () => ({
    components:{SecondaryButton,Theme},
    template: `<Theme><SecondaryButton value="myButton" @click="action" /></Theme>`,
    methods: { action: action('click') }
});
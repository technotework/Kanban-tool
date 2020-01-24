
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseLinkButton from "./index.vue";

export default {
    title:"atoms/BaseLinkButton",
    component: {BaseLinkButton}
};

export const Basic = () => ({
    components:{BaseLinkButton,Theme},
    methods: { action: action('click') },
    template: `
    <div>
    <Theme>
        <BaseLinkButton width="120px" height="30px" round="20px" padding="8px" href="https://www.google.com" mode="button" backgroundColor="#ccc" @click="action">ボタン</BaseLinkButton>
        <BaseLinkButton width="120px" height="30px" round="20px" padding="8px" href="https://www.google.com" mode="link" backgroundColor="#ff0" target="_blank">リンク</BaseLinkButton>
    </Theme>
    </div>
    `
});
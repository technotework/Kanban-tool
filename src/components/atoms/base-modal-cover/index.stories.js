
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseModalCover from "./index.vue";

export default {
    title: "atoms/BaseModalCover",
    component: { BaseModalCover }
};

export const Basic = () => ({
    components: { BaseModalCover, Theme },
    template: `<Theme><BaseModalCover backgroundColor="rgba(0,0,0,0.5)" @base-modal-cover-click-event="action">内容</BaseModalCover></Theme>`,
    methods: { action: action('base-modal-cover-click-event') }
});
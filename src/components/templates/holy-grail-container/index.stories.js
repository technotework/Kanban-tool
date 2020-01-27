
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailContainer from "./index.vue";

export default {
    title: "templates/HolyGrailContainer",
    component: { HolyGrailContainer }
};

export const Basic = () => ({
    components: { HolyGrailContainer, Theme },
    template: `<Theme><HolyGrailContainer width="100vw">content</HolyGrailContainer></Theme>`
});
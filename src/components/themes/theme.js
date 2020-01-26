import Vue from "vue"
import { ThemeProvider } from "vue-styled-components"
import media from "./media-template"
import props from "./props"

const Theme = Vue.component("theme", {
    data: function () {
        return { p: props }
    },
    components: { ThemeProvider },
    template: `<ThemeProvider :theme="p"><slot /></ThemeProvider>`
});

export default Theme;
export { media };
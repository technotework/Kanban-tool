
import Vue from "vue"
import styled from "vue-styled-components";
import BaseIcon from "./index.vue"

/*=========================================================
Normal Icon
=========================================================*/

const NormalIcon = Vue.component("extends-component", {
    components: { BaseIcon },
    template: `<BaseIcon :width="${props => props.theme.service.icon.normal}" :height="${props => props.theme.service.icon.normal}" round="100px" :src="src" />`,
    props: {
        ...BaseIcon.props
    },
    methods: {
        ...BaseIcon.methods
    }
});

export { NormalIcon }


/*=========================================================
Mini Icon
=========================================================*/

const MiniIcon = Vue.component("extends-component", {
    components: { BaseIcon },
    template: `<BaseIcon :width="${props => props.theme.service.icon.mini}" :height="${props => props.theme.service.icon.mini}" round="50px" :src="src" />`,
    props: {
        ...BaseIcon.props
    },
    methods: {
        ...BaseIcon.methods
    }
});

export { MiniIcon }


/*=========================================================
Large Icon
=========================================================*/

const LargeIcon = Vue.component("extends-component", {
    components: { BaseIcon },
    template: `<BaseIcon :width="${props => props.theme.service.icon.large}" :height="${props => props.theme.service.icon.large}" round="200px" :src="src" />`,
    props: {
        ...BaseIcon.props
    },
    methods: {
        ...BaseIcon.methods
    }
});

export { LargeIcon }
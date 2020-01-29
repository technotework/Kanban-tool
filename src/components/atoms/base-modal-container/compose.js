
import Vue from "vue"
import styled from "vue-styled-components";
import BaseModalContainer from "./index.vue"
import props from "@/components/themes/props"

/*=========================================================
Dialogue
=========================================================*/
const StyledDialogueComponent = styled(BaseModalContainer)`

border-radius:${props => props.theme.service.common.round};
background-color:${props => props.theme.service.dialogue.bgColor};
padding:${props => props.theme.service.dialogue.padding};
border-color:${props => props.theme.service.dialogue.borderColor};
box-shadow:${props => props.theme.service.common.boxShadow};
`

const Dialogue = Vue.component("dialogue", {
    components: { StyledDialogueComponent },
    template: `<StyledDialogueComponent :width="p.service.dialogue.width"  :minHeight="p.service.dialogue.minHeight" ><slot /></StyledDialogueComponent> `,
    data: function () {
        return {
            p: props
        }
    },
    props: {
        ...BaseModalContainer.props
    },
    methods: {
        ...BaseModalContainer.methods
    }
});

export { Dialogue }
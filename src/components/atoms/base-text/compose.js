
import Vue from "vue"
import styled from "vue-styled-components";
import BaseText from "./index.vue"

/*=========================================================
CaptionText
=========================================================*/
const StyledCaptionTextComponent = styled(BaseText)`
    font-size:${props => props.theme.base.fontSize.xsmall};
`;
const CaptionText = Vue.component("caption-text", {
    components: { StyledCaptionTextComponent },
    template: `<StyledCaptionTextComponent><slot/></StyledCaptionTextComponent>`,
    methods: {
        ...BaseText.methods
    }
});

export { CaptionText }

import Vue from "vue"
import styled from "vue-styled-components";
import BaseText from "./index.vue"
import props from "@/components/themes/props"

/*=========================================================
CaptionText
=========================================================*/
const StyledCaptionTextComponent = styled(BaseText)`
    display: inline;
    font-size:${props => props.theme.base.fontSize.xsmall};
`;
const CaptionText = Vue.component("caption-text", {
    components: { StyledCaptionTextComponent },
    props: {
        ...BaseText.props
    },
    template: `<StyledCaptionTextComponent><slot/></StyledCaptionTextComponent>`,
    methods: {
        ...BaseText.methods
    }
});

export { CaptionText }


/*=========================================================
Message
=========================================================*/
const StyledMessage = styled(BaseText)`
    display: inline-block;
`;
const BaseMessage = Vue.component("base-message", {
    components: { StyledMessage },
    template: `<StyledMessage :minWidth="p.service.message.minWidth" :padding="p.service.message.padding" :backgroundColor="backgroundColor" :color="color"><slot/></StyledMessage>`,
    props: {
        ...BaseText.props
    },
    data: function () {
        return {
            p: props
        }
    },
    methods: {
        ...BaseText.methods
    }
});

export { BaseMessage }

/*=========================================================
ErrorMessage
=========================================================*/

const ErrorMessage = Vue.component("error-message", {
    components: { BaseMessage },
    template: `<BaseMessage :backgroundColor="p.service.color.error"><slot/></BaseMessage>`,
    props: {
        ...BaseText.props
    },
    data: function () {
        return {
            p: props
        }
    }
});

export { ErrorMessage }


/*=========================================================
WarnMessage
=========================================================*/

const WarnMessage = Vue.component("warn-message", {
    components: { BaseMessage },
    template: `<BaseMessage :backgroundColor="p.service.color.warn"><slot/></BaseMessage>`,
    props: {
        ...BaseText.props
    },
    data: function () {
        return {
            p: props
        }
    }
});

export { WarnMessage }


/*=========================================================
NormalMessage
=========================================================*/

const NormalMessage = Vue.component("normal-message", {
    components: { BaseMessage },
    template: `<BaseMessage :backgroundColor="p.service.color.message"><slot/></BaseMessage>`,
    props: {
        ...BaseText.props
    },
    data: function () {
        return {
            p: props
        }
    }
});

export { NormalMessage }
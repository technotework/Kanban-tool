
import Vue from "vue"
import styled from "vue-styled-components";
import BaseLinkButton from "./index.vue"

/*=========================================================
PrimaryButton
=========================================================*/
const StyledPrimaryButton = styled(BaseLinkButton)`
background-color: ${props => props.theme.service.color.primary};`

const PrimaryButton = Vue.component("primary-button", {
    components: { StyledPrimaryButton },
    template: `<StyledPrimaryButton mode="button" :width="width" @click="onClick"><slot /></StyledPrimaryButton>`,
    props: {
        ...BaseLinkButton.props
    },
    methods: {
        ...BaseLinkButton.methods
    }
});

export { PrimaryButton }


/*=========================================================
SecondaryButton
=========================================================*/
const StyledSecondaryButton = styled(BaseLinkButton)`
background-color: ${props => props.theme.service.color.secondary};`

const SecondaryButton = Vue.component("secondary-button", {
    components: { StyledSecondaryButton },
    template: `<StyledSecondaryButton mode="button" :width="width" @click="onClick"><slot /></StyledSecondaryButton>`,
    props: {
        ...BaseLinkButton.props
    },
    methods: {
        ...BaseLinkButton.methods
    }
});

export { SecondaryButton }



/*=========================================================
PrimaryLinkButton
=========================================================*/
const StyledPrimaryLinkButton = styled(BaseLinkButton)`
background-color: ${props => props.theme.service.color.primary};`

const PrimaryLinkButton = Vue.component("primary-link-button", {
    components: { StyledPrimaryLinkButton },
    template: `<StyledPrimaryLinkButton mode="link" :width="width" :href="href" :target="target" @click="onClick"><slot /></StyledPrimaryLinkButton>`,
    props: {
        ...BaseLinkButton.props
    },
    methods: {
        ...BaseLinkButton.methods
    }
});

export { PrimaryLinkButton }


/*=========================================================
SecondaryLinkButton
=========================================================*/
const StyledSecondaryLinkButton = styled(BaseLinkButton)`
background-color: ${props => props.theme.service.color.secondary};`

const SecondaryLinkButton = Vue.component("secondary-button", {
    components: { StyledSecondaryLinkButton },
    template: `<StyledSecondaryLinkButton mode="link" :width="width" :href="href"  :target="target" @click="onClick"><slot /></StyledSecondaryLinkButton>`,
    props: {
        ...BaseLinkButton.props
    },
    methods: {
        ...BaseLinkButton.methods
    }
});

export { SecondaryLinkButton }
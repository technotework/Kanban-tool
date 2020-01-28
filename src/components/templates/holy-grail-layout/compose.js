import Vue from "vue"
import styled from "vue-styled-components";
import HolyGrailLayout from "./index.vue"


/*=========================================================
BaseLayout
=========================================================*/

const mainContainer = styled.div`

    padding:${props => { props.theme.base.space.t }};
`;

const headerContainer = styled.div`

    background-color:${props => { props.theme.base.themeColor }};
`;

const footerContainer = styled.div`

    background-color:${props => { props.theme.base.themeColor }};
`;


const BaseLayout = Vue.component("base-layout", {
    components: { headerContainer, mainContainer, footerContainer, HolyGrailLayout },
    data: function () {
        return {
            size: {
                headerHeight: "50px",
                footerHeight: "100px"
            }
        }
    },
    template: `
    <HolyGrailLayout :size="size">
        <template #header>
            <headerContainer>
                <slot name="header"/>
            </headerContainer>
        </template >
        <template #main>
            <mainContainer>
                <slot name="main"/>
            </mainContainer>
        </template >
        <template #footer>
            <footerContainer>
                <slot name="footer"/>
            </footerContainer>
        </template >
    </HolyGrailLayout>
    `,
});

export { BaseLayout }

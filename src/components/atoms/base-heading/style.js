
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseHeading1 = styled.h1`
        font-size: ${props => props.theme.fontSize.xlarge};
    `;
    const BaseHeading2 = styled.h2`
    font-size: ${props => props.theme.fontSize.large};
    `;
    const BaseHeading3 = styled.h3`
    font-size: ${props => props.theme.fontSize.medium};
    `;
    const BaseHeading4 = styled.h4`
    font-size: ${props => props.theme.fontSize.medium};
    `;

    const BaseHeadingComponent = Vue.component("base-heading-component",{
    components: {
        Theme, 
        lv1: BaseHeading1,
        lv2: BaseHeading2,
        lv3: BaseHeading3,
        lv4: BaseHeading4
    },
    props:{
        heading:{type:String}
    },
    template: `<Theme><div :is="heading"><slot/></div></Theme>`
    });

    export default BaseHeadingComponent;
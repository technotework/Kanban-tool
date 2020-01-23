
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseLinkButton = styled.div``;
    
    const BaseLinkButtonComponent = Vue.component("base-link-button-component",{
    components: {Theme, BaseLinkButton},
    template: `<Theme><BaseLinkButton><slot/></BaseLinkButton></Theme>`
    });

    export default BaseLinkButtonComponent;

import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const IconedTextButton = styled.div``;
    
    const IconedTextButtonComponent = Vue.component("iconed-text-button-component",{
    components: {Theme, IconedTextButton},
    template: `<Theme><IconedTextButton><slot/></IconedTextButton></Theme>`
    });

    export default IconedTextButtonComponent;
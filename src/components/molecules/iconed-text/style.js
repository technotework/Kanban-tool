
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const IconedText = styled.div``;
    
    const IconedTextComponent = Vue.component("iconed-text-component",{
    components: {Theme, IconedText},
    template: `<Theme><IconedText><slot/></IconedText></Theme>`
    });

    export default IconedTextComponent;
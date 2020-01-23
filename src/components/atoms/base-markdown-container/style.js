
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseMarkdownContainer = styled.div``;
    
    const BaseMarkdownContainerComponent = Vue.component("base-markdown-container-component",{
    components: {Theme, BaseMarkdownContainer},
    template: `<Theme><BaseMarkdownContainer><slot/></BaseMarkdownContainer></Theme>`
    });

    export default BaseMarkdownContainerComponent;
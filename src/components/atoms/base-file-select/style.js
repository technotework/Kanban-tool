
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseFileSelect = styled.div``;
    
    const BaseFileSelectComponent = Vue.component("base-file-select-component",{
    components: {Theme, BaseFileSelect},
    template: `<Theme><BaseFileSelect><slot/></BaseFileSelect></Theme>`
    });

    export default BaseFileSelectComponent;
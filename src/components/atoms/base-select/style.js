
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseSelect = styled.div``;
    
    const BaseSelectComponent = Vue.component("base-select-component",{
    components: {Theme, BaseSelect},
    template: `<Theme><BaseSelect><slot/></BaseSelect></Theme>`
    });

    export default BaseSelectComponent;
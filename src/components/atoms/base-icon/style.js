
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseIcon = styled.div``;
    
    const BaseIconComponent = Vue.component("base-icon-component",{
    components: {Theme, BaseIcon},
    template: `<Theme><BaseIcon><slot/></BaseIcon></Theme>`
    });

    export default BaseIconComponent;
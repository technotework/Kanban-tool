
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseModelessContainer = styled.div``;
    
    const BaseModelessContainerComponent = Vue.component("base-modeless-container-component",{
    components: {Theme, BaseModelessContainer},
    template: `<Theme><BaseModelessContainer><slot/></BaseModelessContainer></Theme>`
    });

    export default BaseModelessContainerComponent;
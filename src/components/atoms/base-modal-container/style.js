
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseModalContainer = styled.div``;
    
    const BaseModalContainerComponent = Vue.component("base-modal-container-component",{
    components: {Theme, BaseModalContainer},
    template: `<Theme><BaseModalContainer><slot/></BaseModalContainer></Theme>`
    });

    export default BaseModalContainerComponent;
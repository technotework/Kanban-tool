
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseImage = styled.div``;
    
    const BaseImageComponent = Vue.component("base-image-component",{
    components: {Theme, BaseImage},
    template: `<Theme><BaseImage><slot/></BaseImage></Theme>`
    });

    export default BaseImageComponent;

import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const StyledComponent = styled.div``;
    
    const MyComponent = Vue.component("styled-component",{
    components: {Theme, StyledComponent},
    template: `<Theme><StyledComponent><slot/></StyledComponent></Theme>`
    });

    export default MyComponent;
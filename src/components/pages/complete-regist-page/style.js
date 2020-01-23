
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const CompleteRegistPage = styled.div``;
    
    const CompleteRegistPageComponent = Vue.component("complete-regist-page-component",{
    components: {Theme, CompleteRegistPage},
    template: `<Theme><CompleteRegistPage><slot/></CompleteRegistPage></Theme>`
    });

    export default CompleteRegistPageComponent;
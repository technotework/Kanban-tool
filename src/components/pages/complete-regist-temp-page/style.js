
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const CompleteRegistTempPage = styled.div``;
    
    const CompleteRegistTempPageComponent = Vue.component("complete-regist-temp-page-component",{
    components: {Theme, CompleteRegistTempPage},
    template: `<Theme><CompleteRegistTempPage><slot/></CompleteRegistTempPage></Theme>`
    });

    export default CompleteRegistTempPageComponent;
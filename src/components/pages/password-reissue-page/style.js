
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const PasswordReissuePage = styled.div``;
    
    const PasswordReissuePageComponent = Vue.component("password-reissue-page-component",{
    components: {Theme, PasswordReissuePage},
    template: `<Theme><PasswordReissuePage><slot/></PasswordReissuePage></Theme>`
    });

    export default PasswordReissuePageComponent;
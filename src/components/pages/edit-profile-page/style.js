
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const EditProfilePage = styled.div``;
    
    const EditProfilePageComponent = Vue.component("edit-profile-page-component",{
    components: {Theme, EditProfilePage},
    template: `<Theme><EditProfilePage><slot/></EditProfilePage></Theme>`
    });

    export default EditProfilePageComponent;
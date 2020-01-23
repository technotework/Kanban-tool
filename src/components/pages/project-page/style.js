
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectPage = styled.div``;
    
    const ProjectPageComponent = Vue.component("project-page-component",{
    components: {Theme, ProjectPage},
    template: `<Theme><ProjectPage><slot/></ProjectPage></Theme>`
    });

    export default ProjectPageComponent;
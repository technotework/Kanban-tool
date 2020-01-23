
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectListPage = styled.div``;
    
    const ProjectListPageComponent = Vue.component("project-list-page-component",{
    components: {Theme, ProjectListPage},
    template: `<Theme><ProjectListPage><slot/></ProjectListPage></Theme>`
    });

    export default ProjectListPageComponent;
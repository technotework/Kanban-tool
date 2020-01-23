
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectList = styled.div``;
    
    const ProjectListComponent = Vue.component("project-list-component",{
    components: {Theme, ProjectList},
    template: `<Theme><ProjectList><slot/></ProjectList></Theme>`
    });

    export default ProjectListComponent;
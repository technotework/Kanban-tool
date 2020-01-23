
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectListItem = styled.div``;
    
    const ProjectListItemComponent = Vue.component("project-list-item-component",{
    components: {Theme, ProjectListItem},
    template: `<Theme><ProjectListItem><slot/></ProjectListItem></Theme>`
    });

    export default ProjectListItemComponent;
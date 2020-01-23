
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectTaskListItem = styled.div``;
    
    const ProjectTaskListItemComponent = Vue.component("project-task-list-item-component",{
    components: {Theme, ProjectTaskListItem},
    template: `<Theme><ProjectTaskListItem><slot/></ProjectTaskListItem></Theme>`
    });

    export default ProjectTaskListItemComponent;
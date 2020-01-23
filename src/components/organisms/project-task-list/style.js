
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectTaskList = styled.div``;
    
    const ProjectTaskListComponent = Vue.component("project-task-list-component",{
    components: {Theme, ProjectTaskList},
    template: `<Theme><ProjectTaskList><slot/></ProjectTaskList></Theme>`
    });

    export default ProjectTaskListComponent;
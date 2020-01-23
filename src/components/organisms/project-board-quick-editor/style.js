
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectBoardQuickEditor = styled.div``;
    
    const ProjectBoardQuickEditorComponent = Vue.component("project-board-quick-editor-component",{
    components: {Theme, ProjectBoardQuickEditor},
    template: `<Theme><ProjectBoardQuickEditor><slot/></ProjectBoardQuickEditor></Theme>`
    });

    export default ProjectBoardQuickEditorComponent;
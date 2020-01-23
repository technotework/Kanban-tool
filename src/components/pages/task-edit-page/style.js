
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskEditPage = styled.div``;
    
    const TaskEditPageComponent = Vue.component("task-edit-page-component",{
    components: {Theme, TaskEditPage},
    template: `<Theme><TaskEditPage><slot/></TaskEditPage></Theme>`
    });

    export default TaskEditPageComponent;
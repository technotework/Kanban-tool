
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskLabelList = styled.div``;
    
    const TaskLabelListComponent = Vue.component("task-label-list-component",{
    components: {Theme, TaskLabelList},
    template: `<Theme><TaskLabelList><slot/></TaskLabelList></Theme>`
    });

    export default TaskLabelListComponent;
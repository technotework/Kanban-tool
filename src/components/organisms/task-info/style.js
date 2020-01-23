
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskInfo = styled.div``;
    
    const TaskInfoComponent = Vue.component("task-info-component",{
    components: {Theme, TaskInfo},
    template: `<Theme><TaskInfo><slot/></TaskInfo></Theme>`
    });

    export default TaskInfoComponent;
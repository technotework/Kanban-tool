
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskSchedule = styled.div``;
    
    const TaskScheduleComponent = Vue.component("task-schedule-component",{
    components: {Theme, TaskSchedule},
    template: `<Theme><TaskSchedule><slot/></TaskSchedule></Theme>`
    });

    export default TaskScheduleComponent;
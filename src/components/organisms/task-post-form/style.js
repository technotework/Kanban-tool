
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskPostForm = styled.div``;
    
    const TaskPostFormComponent = Vue.component("task-post-form-component",{
    components: {Theme, TaskPostForm},
    template: `<Theme><TaskPostForm><slot/></TaskPostForm></Theme>`
    });

    export default TaskPostFormComponent;
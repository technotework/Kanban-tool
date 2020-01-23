
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const SearchTaskListPage = styled.div``;
    
    const SearchTaskListPageComponent = Vue.component("search-task-list-page-component",{
    components: {Theme, SearchTaskListPage},
    template: `<Theme><SearchTaskListPage><slot/></SearchTaskListPage></Theme>`
    });

    export default SearchTaskListPageComponent;
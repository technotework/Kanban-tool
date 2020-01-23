
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const SearchList = styled.div``;
    
    const SearchListComponent = Vue.component("search-list-component",{
    components: {Theme, SearchList},
    template: `<Theme><SearchList><slot/></SearchList></Theme>`
    });

    export default SearchListComponent;
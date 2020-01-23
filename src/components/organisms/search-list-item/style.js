
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const SearchListItem = styled.div``;
    
    const SearchListItemComponent = Vue.component("search-list-item-component",{
    components: {Theme, SearchListItem},
    template: `<Theme><SearchListItem><slot/></SearchListItem></Theme>`
    });

    export default SearchListItemComponent;
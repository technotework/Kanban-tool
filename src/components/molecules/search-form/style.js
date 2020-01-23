
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const SearchForm = styled.div``;
    
    const SearchFormComponent = Vue.component("search-form-component",{
    components: {Theme, SearchForm},
    template: `<Theme><SearchForm><slot/></SearchForm></Theme>`
    });

    export default SearchFormComponent;
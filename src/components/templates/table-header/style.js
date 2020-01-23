
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TableHeader = styled.div``;
    
    const TableHeaderComponent = Vue.component("table-header-component",{
    components: {Theme, TableHeader},
    template: `<Theme><TableHeader><slot/></TableHeader></Theme>`
    });

    export default TableHeaderComponent;
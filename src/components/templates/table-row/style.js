
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TableRow = styled.div``;
    
    const TableRowComponent = Vue.component("table-row-component",{
    components: {Theme, TableRow},
    template: `<Theme><TableRow><slot/></TableRow></Theme>`
    });

    export default TableRowComponent;
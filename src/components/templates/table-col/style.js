
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TableCol = styled.div``;
    
    const TableColComponent = Vue.component("table-col-component",{
    components: {Theme, TableCol},
    template: `<Theme><TableCol><slot/></TableCol></Theme>`
    });

    export default TableColComponent;
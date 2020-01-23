
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ColorPalettePicker = styled.div``;
    
    const ColorPalettePickerComponent = Vue.component("color-palette-picker-component",{
    components: {Theme, ColorPalettePicker},
    template: `<Theme><ColorPalettePicker><slot/></ColorPalettePicker></Theme>`
    });

    export default ColorPalettePickerComponent;

import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const CheckBox = styled.input``;

    const Label = styled.label``;
    
    const MyComponent = Vue.component("styled-component",{
    components: {Theme, CheckBox, Label},
    props: {
        id: {type:String},
        name: {type:String},
        value:{type:String},
      },
    methods:{
        onInput(e){
            
            this.$emit("change", e.target.value);
        }
    },
    template: `<Theme><Label :for="id"><CheckBox type="checkbox" :id="id" :name="name" :value="value" @change="onInput" /><slot/></Label></Theme>`
    });

    export default MyComponent;
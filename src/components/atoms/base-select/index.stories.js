
import "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseSelect from "./index.vue";

export default {
    title:"atoms/BaseSelect",
    component: {BaseSelect}
};

export const Basic = () => ({
    components:{BaseSelect,Theme},
    data:function(){return{
        selected:"",
        items:[
                  {value:"cat", content:"ねこさん"},
                  {value:"dog", content:"いぬさん"},
                  {value:"panda", content:"ぱんださん"}
              ]
    }},
    template: `<Theme><BaseSelect name="hoge" :items="items" v-model="selected" @change="action" /></Theme>`,
    methods: { action: action('change') }
});
import { createDefStory } from "@/components/utils/story-creator";
import { text, boolean, action } from "@/components/utils/story-export";
import BaseInput from "./index.vue";
import {
    SystemInput,
    SystemPassword,
    EditInput,
    EditInputTitle
} from "./compose";

const description =
    'import BaseInput from "@/components/atoms/base-input/"<br>import { SystemInput,SystemPassword, EditInput } from "@/components/atoms/base-input/compose"';
export default createDefStory("atoms/BaseInput", BaseInput, description);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        BaseInput
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        placeholder: {
            default: text("placeholder", "inputText")
        },
        required: {
            default: boolean("required", false)
        },
        maxlength: {
            default: text("maxlength", "100")
        },
        name: {
            default: text("name", "input")
        },
        compose: {
            default: text("compose", "normal")
        },
        type: {
            default: text("type", "text")
        },
        readonly: {
            default: boolean("readonly", false)
        }
    },
    template: `<BaseInput v-bind={placeholder,required,maxlength,name,compose,type,readonly} v-model.lazy="myValue" @keyup.enter="action" />`,
    methods: { action: action("keyup.enter") }
});

//---------------------
//System

export const Input = () => ({
    components: {
        SystemInput
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        placeholder: {
            default: text("placeholder", "テキストを入力")
        },
        required: {
            default: boolean("required", false)
        },
        maxlength: {
            default: text("maxlength", "100")
        },
        name: {
            default: text("name", "input")
        },
        compose: {
            default: text("compose", "normal")
        },
        type: {
            default: text("type", "text")
        },
        readonly: {
            default: boolean("readonly", false)
        }
    },
    template: `<SystemInput v-bind={placeholder,required,maxlength,name,compose,type,readonly} v-model.lazy="myValue" />`,
    methods: {}
});

//---------------------
//System

export const Password = () => ({
    components: {
        SystemPassword
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        placeholder: {
            default: text("placeholder", "パスワードを入力")
        },
        required: {
            default: boolean("required", false)
        },
        maxlength: {
            default: text("maxlength", "100")
        },
        name: {
            default: text("name", "input")
        },
        compose: {
            default: text("compose", "normal")
        },
        type: {
            default: text("type", "password")
        },
        readonly: {
            default: boolean("readonly", false)
        }
    },
    template: `<SystemPassword v-bind={placeholder,required,maxlength,name,compose,type,readonly} v-model.lazy="myValue" />`,
    methods: {}
});

//---------------------
//Edit

export const Edit = () => ({
    components: {
        EditInput
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        placeholder: {
            default: text("placeholder", "TextInput")
        },
        required: {
            default: boolean("required", false)
        },
        maxlength: {
            default: text("maxlength", "100")
        },
        name: {
            default: text("name", "input")
        },
        compose: {
            default: text("compose", "normal")
        },
        type: {
            default: text("type", "text")
        },
        readonly: {
            default: boolean("readonly", false)
        }
    },
    template: `<EditInput v-bind={placeholder,required,maxlength,name,compose,type,readonly} v-model.lazy="myValue" />`,
    methods: {}
});

//---------------------
//Edit

export const EditTitle = () => ({
    components: {
        EditInputTitle
    },
    data: function() {
        return {
            myValue: ""
        };
    },
    props: {
        placeholder: {
            default: text("placeholder", "TextInput")
        },
        required: {
            default: boolean("required", false)
        },
        maxlength: {
            default: text("maxlength", "100")
        },
        name: {
            default: text("name", "input")
        },
        compose: {
            default: text("compose", "normal")
        },
        type: {
            default: text("type", "text")
        },
        readonly: {
            default: boolean("readonly", false)
        }
    },
    template: `<EditInputTitle v-bind={placeholder,required,maxlength,name,compose,type,readonly} v-model.lazy="myValue" />`,
    methods: {}
});

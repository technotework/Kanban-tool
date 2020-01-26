<template>
    <StyledBaseSelect :name="name" v-model="selected" @change="onChange">
        <option value="" selected>選択して下さい</option>
        <option v-for="item in items" :value="item.value" :key="item.value">{{item.content}}</option>
    </StyledBaseSelect>
</template>

<script>
import StyledBaseSelect from './style';
export default {
    name: 'BaseSelect',
    props: {
        name:{type:String},
        items:{type:Array},
        value:{type:String}
    },
    data:function(){
        return {
            selected:""
        }
    },
    methods:{
       onChange:function(e){
           this.$emit("change", e);
       } 
    },
    components:{
        StyledBaseSelect
    }
}
</script>


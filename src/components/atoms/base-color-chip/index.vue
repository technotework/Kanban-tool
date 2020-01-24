<template>
    <StyledBaseColorChip :color="color" />
</template>

<script>
import StyledBaseColorChip from "./style";

export default {
    name: 'BaseColorChip',
    props: {
        color:{type:String}
    },
    components:{
        StyledBaseColorChip
    }
}
</script>
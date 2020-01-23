<template>
    <div class="base-color-chip">
        <StyledBaseColorChip :color="color" />
    </div>
</template>

<script>
import StyledBaseColorChip from './style.js';
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
<template>
    <div class="base-color-chip">
        <ColorChip :color="color" />
    </div>
</template>

<script>
import ColorChip from './style.js';
export default {
    name: 'BaseColorChip',
    props: {
        color:{type:String}
    },
    components:{
        ColorChip
    }
}
</script>
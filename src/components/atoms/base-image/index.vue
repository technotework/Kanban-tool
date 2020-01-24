<template>
    <div class="base-image">
    <StyledBaseImage :src="src" :round="round" :width="width" :height="height" :alt="alt" />
    </div>
</template>

<script>
import StyledBaseImage from './style.js';
export default {
    name: 'BaseImage',
    props:{
        src:   String,
        round: String,
        width: String,
        height:String,
        alt:String
    },
    components:{
        StyledBaseImage
    }
}
</script>

<style lang="scss">

</style>
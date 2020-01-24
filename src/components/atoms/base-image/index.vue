<template>
    <StyledBaseImage :src="src" :round="round" :width="width" :height="height" :alt="alt" />
</template>

<script>
import StyledBaseImage from "./style"

export default {
    name: 'BaseImage',
    props:{
        src:   String,
        round: String,
        width: String,
        height:String,
        alt:   String
    },
    components:{
        StyledBaseImage
    }
}
</script>

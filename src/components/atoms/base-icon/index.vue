<template>
    <div class="base-icon">
        <StyledBaseIcon :width="width" :height="height" :src="src" :round="round"><slot/></StyledBaseIcon>   
    </div>
</template>

<script>
import StyledBaseIcon from "./style"

export default {
    name: 'BaseIcon',
    props:{
        src:   String,
        round: String,
        width: String,
        height:String
    },
    components:{
        StyledBaseIcon  
    }
}
</script>
<style lang="scss" module>
.class{

  
}
</style>


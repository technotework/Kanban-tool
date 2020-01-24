<template>
    <div class="base-heading">
        <StyledBaseHeading :heading="heading"><slot /></StyledBaseHeading>
    </div>
</template>

<script>
import StyledBaseHeading from './style.js';
export default {
    name: 'BaseHeading',
    props:{
        heading:{type:String}
    },
    components:{
        StyledBaseHeading
    }
}
</script>

<style lang="scss">

</style>
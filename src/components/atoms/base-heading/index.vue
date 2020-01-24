<template>
   <div :is="heading"><slot/></div>
</template>

<script>
import styled from "vue-styled-components";

const BaseHeading1 = styled.h1`
        font-size: ${props => props.theme.fontSize.xlarge};
    `;
    const BaseHeading2 = styled.h2`
    font-size: ${props => props.theme.fontSize.large};
    `;
    const BaseHeading3 = styled.h3`
    font-size: ${props => props.theme.fontSize.medium};
    `;
    const BaseHeading4 = styled.h4`
    font-size: ${props => props.theme.fontSize.medium};
    `;

export default {
    name: 'BaseHeading',
    props:{
        heading:{type:String}
    },
    components:{
       lv1: BaseHeading1,
       lv2: BaseHeading2,
       lv3: BaseHeading3,
       lv4: BaseHeading4
    }
}
</script>
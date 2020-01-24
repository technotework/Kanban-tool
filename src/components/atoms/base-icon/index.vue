<template>
    <div class="base-icon">
        <StyledBaseIcon :width="width" :height="height" :src="src" :round="round"><slot/></StyledBaseIcon>   
    </div>
</template>

<script>
import styled from "vue-styled-components";

const p = {
        src:   String,
        round: String,
        width: String,
        height:String
    }

const StyledBaseIcon = styled("div",p)`
    width: ${props => props.width ? props.width : props.theme.size.t4l4};
    height: ${props => props.height ? props.height : props.theme.size.t4l4};
    background-color: ${props => props.theme.color.glay};
    overflow: hidden;
    background-size: cover;
    border-radius: ${props => props.round ? props.round : 0};
    background-repeat: no-repaet;
    background-image: url(${props => props.src ? props.src : ""});
    background-position: center center;
`;

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

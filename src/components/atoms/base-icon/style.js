import styled from "vue-styled-components";

const p = {
    src: String,
    round: String,
    width: String,
    height: String
}

const StyledBaseIcon = styled("div", p)`
    width: ${props => props.width ? props.width : props.theme.base.size.t4l4};
    height: ${props => props.height ? props.height : props.theme.base.size.t4l4};
    background-color: ${props => props.theme.base.color.gray};
    overflow: hidden;
    background-size: cover;
    border-radius: ${props => props.round ? props.round : 0};
    background-repeat: no-repaet;
    background-image: url(${props => props.src ? props.src : ""});
    background-position: center center;
`;

export default StyledBaseIcon;
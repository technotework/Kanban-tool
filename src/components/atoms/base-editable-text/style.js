import styled from "vue-styled-components";

const p = {

    width: String,
    height: String,
    padding: String
}

const StyledBaseEditableText = styled("div", p)`

    width: ${props => props.width ? props.width : props.theme.base.size.vw};
    height:${props => props.height ? props.height : props.theme.base.size.t5l5};
    border:${props => props.theme.base.border.thin} ${props => props.theme.base.color.black};
    padding:${props => props.padding ? props.padding : props.theme.base.space.l}
`;

export default StyledBaseEditableText;
import styled from "vue-styled-components";

const StyledBaseEditableText = styled.div`

    width: ${props => props.theme.size.vw};
    height:${props => props.theme.size.t5l5};
    border:${props => props.theme.border.thin} ${props => props.theme.color.black};
    padding:${props => props.theme.space.l}
`;

export default StyledBaseEditableText;
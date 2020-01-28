import styled from "vue-styled-components";

const StyledBaseEditableText = styled.div`

    width: ${props => props.theme.base.size.vw};
    height:${props => props.theme.base.size.t5l5};
    border:${props => props.theme.base.border.thin} ${props => props.theme.base.color.black};
    padding:${props => props.theme.base.space.l}
`;

export default StyledBaseEditableText;
import styled from "vue-styled-components";

const BaseHeading1 = styled.h1`
    font-size: ${props => props.theme.service.h1.size};
    line-height: ${props => props.theme.service.h1.lh};
    color: ${props => props.theme.service.h1.color};
`;
const BaseHeading2 = styled.h2`
    font-size: ${props => props.theme.service.h2.size};
    line-height: ${props => props.theme.service.h2.lh};
    color: ${props => props.theme.service.h2.color};
`;
const BaseHeading3 = styled.h3`
    font-size: ${props => props.theme.service.h3.size};
    line-height: ${props => props.theme.service.h3.lh};
    color: ${props => props.theme.service.h3.color};
`;
const BaseHeading4 = styled.h4`
    font-size: ${props => props.theme.service.h4.size};
    line-height: ${props => props.theme.service.h4.lh};
    color: ${props => props.theme.service.h4.color};
`;

export { BaseHeading1, BaseHeading2, BaseHeading3, BaseHeading4 }
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

export {BaseHeading1, BaseHeading2, BaseHeading3, BaseHeading4}
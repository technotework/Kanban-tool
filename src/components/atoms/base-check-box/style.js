import styled from "vue-styled-components";

const StyledBaseCheckBox = styled.input`
    margin-right: ${props => { props.theme.service.form.labelMargin }};
    margin-bottom: ${props => { props.theme.service.form.cbBottom }};
`;

export default StyledBaseCheckBox;


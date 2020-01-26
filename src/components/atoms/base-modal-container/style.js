
import styled from "vue-styled-components";

//コンポーネントスタイル

const p = {
    width: String,
    minHeight: String,
    index: Number,
    top: String,
    left: String,
};

const BaseModalContainer = styled("div", p)`
    position: fixed;
    top: ${props => props.top ? props.top : calcCenter(props.minHeight, props.theme.size.s200)};
    left: ${props => props.left ? props.left : calcCenter(props.width, props.theme.size.s300)};
    width:${props => props.width ? props.width : props.theme.size.s300};
    min-height:${props => props.minHeight ? props.minHeight : props.theme.size.s200};
    z-index:${props => props.index ? props.index : props.theme.index.heigh};
    background-color: ${props => props.theme.color.white};
    border:  ${props => props.theme.border.thin} ${props => props.theme.color.glay};
`;


function calcCenter(customSize, presetSize) {

    let result;
    if (customSize) {

        result = `calc(50% - ${customSize} /2)`
    }
    else {

        result = `calc(50% - ${presetSize} /2)`
    }

    return result;
}

export default BaseModalContainer;
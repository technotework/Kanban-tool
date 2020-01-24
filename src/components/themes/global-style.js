import { injectGlobal } from "vue-styled-components";
import "./reset-css";
import props from "./props";


const global =  injectGlobal`

html{
    font-size: ${props.fontSize.base};
    
}
body{
    font-size: ${props.fontSize.medium};
    line-height: ${props.lineHeight.medium};
    font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
}
`;

export default global;
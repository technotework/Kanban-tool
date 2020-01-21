import {css} from "vue-styled-components"

//MediaTemplate
const sizes = {
    desktop: 1180,
    tablet:560,
    phone:320
  };
  
  const media = Object.keys(sizes).reduce((acc,label) => {
      acc[label] = (...args) => css`
  
        @media (max-width:${sizes[label]}px){
          ${css(...args)}
        }
      `;
      return acc;
    },{});
  
    export default media;
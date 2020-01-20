
import styled from 'vue-styled-components'
import {css} from 'vue-styled-components'

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
    console.log(acc);
    return acc;
  },{});


const Content = styled.div`

background-color:#ff0;
${media.phone`background-color: #ccc;`}
`;

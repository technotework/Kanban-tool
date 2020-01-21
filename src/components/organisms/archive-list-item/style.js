import styled from "vue-styled-components";

    //コンポーネントスタイル
    const MyCompo = styled.div``;
    
    //プロパティをもらってstyled-componentsを返す
    const MyComponent = ({...props}) => <MyCompo {...props} />;
    
    export default MyComponent;
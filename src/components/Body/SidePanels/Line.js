import styled from "styled-components";

const LineVert = styled.div`
width: 2px;
height: 25%;
background: linear-gradient(#D9D9D9, #181818) no-repeat center/2px 100%;
z-index: 3;
`

const Line = () => {
    return ( 
        <LineVert/>
     );
}
 
export default Line;

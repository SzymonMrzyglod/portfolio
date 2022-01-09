import styled from 'styled-components';
import Line from './Line';

const RightPanel = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
width: 10%;
z-index: 3;

& a{
    transform: rotate(90deg) translate(-50%, -25%);
    color: #D9D9D9;
    transition: 0.3s;
    text-decoration: none;
}

& a:hover{
    color: #898989;
}
`

const RightSidePanel = () => {
    return ( 
        <RightPanel>
            <a href="mailto:szymon.mr@gmail.com">szymon.mr@gmail.com</a>  
            <Line/>
        </RightPanel>
     );
}
 
export default RightSidePanel;
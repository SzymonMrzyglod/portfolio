import styled from 'styled-components';

const RightPanel = styled.div`
width: 10%;
justify-content: flex-end;
align-items: center;
display: flex;
flex-direction: column;

& p{
    transform: rotate(90deg) translate(-50%, 0%);
}
`
const RightSideMenu = () => {
    return ( 
        <RightPanel>
            <p>szymon.mr@gmail.com</p>
        </RightPanel>
     );
}
 
export default RightSideMenu;
import Main from './Main/Main';
import LeftSidePanel from './SidePanels/LeftSidePanel';
import RighSidePanel from './SidePanels/RightSidePanel';
import styled from 'styled-components';

const WrapperBody = styled.div`
height: 90vh;
display: flex;
`

const Body = () => {
    return ( 
        
        <WrapperBody>
            
            <LeftSidePanel/>
            <Main/>
            <RighSidePanel/>
        </WrapperBody>
     );
}
 
export default Body;
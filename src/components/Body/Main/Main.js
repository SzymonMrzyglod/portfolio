import styled from 'styled-components';
import LeftSidePanel from '../SidePanels/LeftSidePanel';
import RighSidePanel from '../SidePanels/RightSidePanel';

const WrapperMain = styled.div`
display: flex;
height: 100%;
`

const MainContent = styled.div`
width: 100%;
`

const Main = () => {
    return ( 
        <WrapperMain>
            <LeftSidePanel/>
                <MainContent>
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                </MainContent>
            <RighSidePanel/>
        </WrapperMain>
    );
}
 
export default Main;

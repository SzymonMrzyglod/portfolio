import LeftSidePanel from "../SidePanels/LeftSidePanel";
import RightSidePanel from "../SidePanels/RightSidePanel";
import styled from 'styled-components';

const WrapperMain = styled.div`
display: flex;
height: 100%;
`

const MainContent = styled.div`
width: 100%;
`

const Contact = () => {
    return ( 
        <WrapperMain>
            <LeftSidePanel/>
                <MainContent>
                    Contact
                </MainContent>
            <RightSidePanel/>
        </WrapperMain>
     );
}
 
export default Contact;
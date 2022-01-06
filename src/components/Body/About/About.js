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

const About = () => {
    return ( 
        <WrapperMain>
            <LeftSidePanel/>
                <MainContent>
                    ABOUT
                </MainContent>
            <RightSidePanel/>
        </WrapperMain>
     );
}
 
export default About;
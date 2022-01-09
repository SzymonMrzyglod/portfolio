import styled from 'styled-components';
import MySlider from "../../../utils/SliderProjects";
import MyParticles from '../../../utils/Particles';

const WrapperMain = styled.div`
display: flex;
justify-content: space-around;
width: 80%;
height: 85vh;
z-index: 2;
`

const MainContent = styled.div`

width: 80%;
display: flex;
justify-content: space-around;
`

const Projects = () => {
    return ( 
        <WrapperMain>
                    <MainContent>
                        <MySlider/>
                        <MyParticles/>
                    </MainContent>
        </WrapperMain>
     );
}
 
export default Projects;
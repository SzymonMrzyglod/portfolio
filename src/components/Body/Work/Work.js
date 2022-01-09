import styled from 'styled-components';
import CardEdu from './CardEdu';
import CardWork from './CardWork';
import {TechLogo} from '../../../data/techLogo';
import { EduDb } from '../../../data/EduDb';
import { WorkDb } from '../../../data/workDb';

const WrapperMain = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
background: #181818;
width: 100%;
`
const Skills = styled.div`
display: flex;
flex-direction: column;

`

const Images = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
& img {
    width: 10%;
}
`

const Experience = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

`
const Education = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

&.card{
    color: red;
}
`


const Work = () => {
    return ( 
        <WrapperMain>
                    <Skills>
                        <p>UMIEJĘTNOŚCI</p>
                        <Images>
                        {TechLogo.map(logo => (
                            <img src={logo.img}></img>
                        ))}
                    </Images>
                    </Skills>
                    <Education>
                        <p>EDUKACJA</p>
                        {EduDb.map(item => (
                            <CardEdu className='card' key={item.id} {...item}/>
                        ))}
                    </Education>
                    <Experience>
                        <p>PRACA</p>
                        {WorkDb.map(item => (
                            <CardWork key={item.id} {...item}/>
                        ))}
                    </Experience>
                    
        </WrapperMain>
     );
}
 
export default Work;
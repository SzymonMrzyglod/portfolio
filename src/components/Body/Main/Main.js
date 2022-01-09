import styled from 'styled-components';
import me from '../../../assets/images/mePhot.jpg'

const MainContent = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
height: 85vh;
z-index: 2;
// padding: 20px 10px;
& img{
    object-fit: cover;
    display: block;
    border-radius: 50%;
    height: auto;
    max-width: 40%;
    align-self: center;
}
& p {
    font-size: 1.5rem;
    width: 50%;
    align-self: center;
}
`

const Main = () => {
    return ( 

                <MainContent>
                    <img src={me} alt="me"></img>
                    <p>Programowaniem interesuję sie od dłuższego czasu. Swoja naukę rozpocząłem od języka C# a następnym krokiem w mojej edukacji było rozpoczęcie studiów na kierunku Informatyka oraz poszerzanie swojej wiedzy w takich technologiach jak HTML, CSS czy Java Script. </p>
                </MainContent>

    );
}
 
export default Main;

import styled from 'styled-components';
import Logo from '../../../../assets/images/logo.png';

const CardBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #181818;
border: 1px solid #D9D9D9;
margin: 20% 15%;
& img {
    object-fit: cover;
    width: 100%;
    height: auto;
}
`
const Card = (props) => {
    return ( 
        <CardBox>
            <img src={Logo}></img>
            <h2>{props.title}</h2>
            <p>{props.describe}</p>
            <p>{props.tech}</p>
        </CardBox>
     );
}
 
export default Card;
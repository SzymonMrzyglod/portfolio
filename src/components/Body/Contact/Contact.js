import styled from 'styled-components';
import Form from './Form';

const MainContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
height: 85vh;
width: 100%;
padding: 0 10%;

// & .form{
//     display: flex;
//     flex-direction: column;  
//     width: 100%;
}
`

const Contact = () => {
    return ( 
        <MainContent>
           <Form/>
        </MainContent>
     );
}
 
export default Contact;
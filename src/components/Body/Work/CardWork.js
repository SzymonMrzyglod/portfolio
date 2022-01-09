import styled from 'styled-components';

const CardBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #181818;
border: 1px solid #D9D9D9;
padding: 20px;
`
const CardWork = (props) => {
    return ( 
        <CardBox>
            <h2>{props.name}</h2>
            <p>{props.describe}</p>
        </CardBox>
     );
}
 
export default CardWork;
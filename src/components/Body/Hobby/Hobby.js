import styled from 'styled-components';

const MainContent = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
text-align: center;
height: 85vh;
width: 100%;
`

const Photography = styled.div`
width: 40%;
`
const Travel = styled.div`
width: 40%;
`
const Motocycle = styled.div`
width: 40%;
`

const Programming = styled.div`
width: 40%;
`

const Hobby = () => {
    return ( 
                <MainContent>
                    <Photography>
                        <p>FOTOGRAFIA</p>
                    </Photography>
                    <Travel>
                        <p>PODRÓŻE</p>
                    </Travel>
                    <Motocycle>
                        <p>MOTOCYCLE</p>
                    </Motocycle>
                    <Programming>
                        <p>PROGRAMMING</p>
                    </Programming>
                </MainContent>
     );
}
 
export default Hobby;
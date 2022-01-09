import styled from 'styled-components';
import Line from './Line';

const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 10%;
    font-size: 2rem;
    z-index: 3;

    & a {
        color: #D9D9D9;
        transition: 0.3s;
    }

    & a:hover {
        color: #898989;
    }
`

const LeftSideMenu = () => {
    return ( 
        <LeftPanel>
                <a href="https://github.com/SzymonMrzyglod" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/szymon-mrzygłód" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/szymon.mr" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>  
                <Line/>
        </LeftPanel>
     );
}
 
export default LeftSideMenu;
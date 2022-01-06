import styled from 'styled-components';

const LeftPanel = styled.div`
    width: 10%;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 2rem;

    & a {
        color: #D9D9D9;
    }
`

const LeftSideMenu = () => {
    return ( 
        <LeftPanel>
                <a href="https://github.com/SzymonMrzyglod" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/szymon-mrzygłód" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.facebook.com/szymon.mr" to="route" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>  
        </LeftPanel>
     );
}
 
export default LeftSideMenu;
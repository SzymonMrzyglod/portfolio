import styled from 'styled-components';
import Nav from './Nav/Nav';

const WrapperHeader = styled.div`
display: flex;
height: 15vh;
z-index: 3;
`

const Logo = styled.div`
display: block;
font-size: 4rem;
transform: rotate(-35deg);
text-align: center;
padding: 20px;
font-weight: 400;
`
const Menu = styled.div`
display: flex;
text-align: center;
font-weight: 200;
width: 100%;
`

const Header = () => {
    return ( 
        <WrapperHeader>
            <Menu>
                <Logo>'/sm'</Logo>
                <Nav/>
            </Menu>
        </WrapperHeader>
     );
}
 
export default Header;
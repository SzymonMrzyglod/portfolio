import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import Nav from './Nav/Nav';

const WrapperHeader = styled.div`
display: flex;
`

const Logo = styled.div`
background-color: #181818;
width: 20%;

& img {
    max-width: 50%;
    height: auto;
}
`

const Menu = styled.div`
display: flex;
background-color: #181818;
text-align: center;
width: 80%;

`



const Header = () => {
    return ( 
        <WrapperHeader>
            <Logo>
            <img src={logo} alt="logo"/>
            </Logo>
            <Menu>
                <Nav/>
            </Menu>
        </WrapperHeader>
     );
}
 
export default Header;
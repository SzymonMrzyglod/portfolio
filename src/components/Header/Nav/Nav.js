import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const MenuItem = styled.li`
display: inline-block;
padding: 10px 25px;
font-size: 2rem;
& a {
    text-decoration: none;
    color: #D9D9D9;
} 

`


const Menu = styled.nav`
width: 100%;
`
const Nav = () => {
    return ( 

            <Menu>
                <ul>
                    <MenuItem><Link to ="/">01.Home</Link></MenuItem>
                    <MenuItem><Link to ="/about">02.Opcja</Link></MenuItem>
                    <MenuItem><Link to ="/work">03.Opcja</Link></MenuItem>
                    <MenuItem><Link to ="/contact">04.Opcja</Link></MenuItem>
                </ul>
            </Menu>

     );
}
 
export default Nav;
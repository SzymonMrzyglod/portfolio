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
    transition: 0.3s;
    text-decoration: none;
    color: #D9D9D9; 
} 
& a:hover {
    border-bottom: 2px solid #D9D9D9;
} 
`
const Menu = styled.nav`
width: 100%;
`
const Nav = () => {
    return ( 

            <Menu>
                <ul>
                    <MenuItem><Link to ="/">home.</Link></MenuItem>
                    <MenuItem><Link to ="/projects">projekty.</Link></MenuItem>
                    <MenuItem><Link to ="/work">doświadczenie.</Link></MenuItem>
                    <MenuItem><Link to ="/hobby">hobby.</Link></MenuItem>
                    <MenuItem><Link to ="/contact">kontakt.</Link></MenuItem>
                </ul>
            </Menu>

     );
}
 
export default Nav;
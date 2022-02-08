import styled from 'styled-components';
import {NavStyle, NavLink, NavItems, NavItem} from '../styles/Style'
import { Link } from "react-router-dom";

const NewNav = styled(NavLink)`
  border: 1px black;
  color: red;
`;

function Header(props) {

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <NavStyle>
        <NavLink to="/">
          HOME
        </NavLink>
        <NewNav  to="/about">
          ABOUT
        </NewNav>
        <NavLink to="/projects">
          PROJECTS
        </NavLink>
      </NavStyle>
    </header>
  );
}

export default Header;
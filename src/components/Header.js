import styled from 'styled-components';
import {NavStyle, NavLink, NavItems, NavItem} from '../styles/Style'
import { Link } from "react-router-dom";

const NewNav = styled(NavLink)`
  color: gold;
`;

function Header(props) {

  return (
    <header>
      <h1>My Portfolio Page</h1>
      <NavStyle>
        <NewNav to="/">
          HOME
        </NewNav>
        <NewNav  to="/about">
          ABOUT
        </NewNav>
        <NewNav to="/projects">
          PROJECTS
        </NewNav>
      </NavStyle>
    </header>
  );
}

export default Header;
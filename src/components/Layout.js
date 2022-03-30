import { Outlet, Link } from "react-router-dom";
import "./styles/Layout.css";
import styled from "styled-components";

const Nav = styled.nav`
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 100px;
`;

const NavUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
`;

export const Layout = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav>
          <NavUl>
            <li>
              <Link to="/">Registrera</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
          </NavUl>
        </Nav>
        <Outlet></Outlet>
      </header>
    </div>
  );
};

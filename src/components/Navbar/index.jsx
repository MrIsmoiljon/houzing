import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Container,
  Link,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";

import { Button } from "../Generic";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, id, path }) => {
              return (
                <Link to={path} key={id}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>

          <Button onClick={() => navigate("/login")} width={"120px"}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>

      <Outlet />
    </Wrapper>
  );
};

export default Navbar;

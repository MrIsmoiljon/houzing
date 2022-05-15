import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as logoIcon } from "../../assets/icons/logo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primaryColor);

  -webkit-touch-callout: none; /* iOs Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old Versions of Firefox */
  -ms-user-select: none; /* Internet Explorer Edge */
  user-select: none; /* Non-prefixed version, currently supperted by Chrome, Opera, Firefox */
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 100px;
  max-width: 1440px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #fff;
  .active {
    color: #00fff5;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 0 32px;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;

Logo.Title = styled("div")`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500;
`;

export { Wrapper, Container, Body, NavbarWrapper, NavbarBody, Link, Logo };

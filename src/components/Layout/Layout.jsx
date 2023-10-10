import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import {
  Container,
  Header,
  ImgLogo,
  LogoNavLink,
  StyledLink,
} from "./Layout.styled";
import logo from "../../img/logo.svg";

const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoNavLink to="/">
          <ImgLogo src={logo} />
        </LogoNavLink>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<h1>loading</h1>}></Suspense>
      <Outlet />
    </Container>
  );
};

export default Layout;

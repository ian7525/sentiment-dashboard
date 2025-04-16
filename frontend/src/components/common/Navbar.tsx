import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  padding: 1rem 2 rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)<{ $active?: boolean }>`
  color: white;
  text-decoration: none;
  padding: 0.5rem 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: ${({ $active }) => ($active ? "scaleX(1)" : "scaleX(0)")};
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo>Sentiment Analysis</Logo>
        <NavLinks>
          <StyledLink to="/" $active={location.pathname === "/"}>
            Home
          </StyledLink>
          <StyledLink
            to="/analysis"
            $active={location.pathname === "/analysis"}
          >
            Analysis
          </StyledLink>
          <StyledLink to="/stats" $active={location.pathname === "/stats"}>
            Statistics
          </StyledLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;

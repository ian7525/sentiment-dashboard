import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Navbar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;

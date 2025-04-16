import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.common.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2rem;
  max-width: 500px;
  width: 100%;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  magin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: background-color 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.common.white};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Card>
        <Title>Semantic Analysis Dashboard</Title>
        <Description>
          This is a simple dashboard for sentiment analysis.
        </Description>
        <ButtonContainer>
          <PrimaryButton onClick={() => setCount((count) => count + 1)}>
            Count: {count}
          </PrimaryButton>
          <SecondaryButton onClick={() => setCount(0)}>Reset</SecondaryButton>
        </ButtonContainer>
      </Card>
    </Container>
  );
}

export default App;

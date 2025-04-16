import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margi-buttom: 1.5rem;
`;

const AnalysisPage = () => {
  return (
    <Container>
      <Title>Text Analysis</Title>
      <p>
        Enter text to analyze sentiment, extract key phrases, and identify
        entities.
      </p>
    </Container>
  );
};

export default AnalysisPage;

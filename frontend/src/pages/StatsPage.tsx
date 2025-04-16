import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  margi-buttom: 1.5rem;
`;

const StatsPage = () => {
  return (
    <Container>
      <Title>API Usage Statistics</Title>
      <p>
        View statistics avout API usage, including request counts, language
        distribution, and sentiment trends.
      </p>
    </Container>
  );
};

export default StatsPage;

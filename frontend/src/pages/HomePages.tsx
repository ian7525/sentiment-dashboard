import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Subtitle = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;

  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.sentiment.positive};
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Sentiment Analysis Dashboard</Title>
      <Subtitle>
        Analyze text sentiment, extract key phrases, and identify entities using
        AI-powered tools.
      </Subtitle>

      <CardGrid>
        <Card title="Text Analysis">
          <FeatureList>
            <FeatureItem>
              Sentiment classification (positive, negative, neutral, mixed)
            </FeatureItem>
            <FeatureItem>Sentiment score breakdown</FeatureItem>
            <FeatureItem>Key phrase extraction</FeatureItem>
            <FeatureItem>Entity recognition</FeatureItem>
          </FeatureList>
          <Button onClick={() => navigate("/analysis")}>Start Analyzing</Button>
        </Card>

        <Card title="Multi-language Support">
          <FeatureList>
            <FeatureItem>Support for multiple languages</FeatureItem>
            <FeatureItem>Automatic language detection</FeatureItem>
            <FeatureItem>Language-specific analysis</FeatureItem>
          </FeatureList>
          <Button variant="outlined" onClick={() => navigate("/analysis")}>
            Learn More
          </Button>
        </Card>

        <Card title="Usage Statistics">
          <FeatureList>
            <FeatureItem>Request tracking</FeatureItem>
            <FeatureItem>Language distribution</FeatureItem>
            <FeatureItem>Sentiment trends</FeatureItem>
            <FeatureItem>Visual data representation</FeatureItem>
          </FeatureList>
          <Button variant="secondary" onClick={() => navigate("/stats")}>
            View Stats
          </Button>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default HomePage;

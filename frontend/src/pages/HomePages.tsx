import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("home.welcome")}</Title>
      <Subtitle>{t("home.description")}</Subtitle>

      <CardGrid>
        <Card title={t("home.features.analysis.title")}>
          <FeatureList>
            <FeatureItem>
              {t("home.features.analysis.sentimentClassification")}
            </FeatureItem>
            <FeatureItem>
              {t("home.features.analysis.sentimentScore")}
            </FeatureItem>
            <FeatureItem>{t("home.features.analysis.keyPhrase")}</FeatureItem>
            <FeatureItem>
              {t("home.features.analysis.entityRecognition")}
            </FeatureItem>
          </FeatureList>
          <Button onClick={() => navigate("/analysis")}>
            {t("home.features.analysis.startButton")}
          </Button>
        </Card>

        <Card title={t("home.features.statistics.title")}>
          <FeatureList>
            <FeatureItem>
              {t("home.features.statistics.requestTracking")}
            </FeatureItem>
            <FeatureItem>
              {t("home.features.statistics.languageDistribution")}
            </FeatureItem>
            <FeatureItem>
              {t("home.features.statistics.sentimentTrends")}
            </FeatureItem>
            <FeatureItem>
              {t("home.features.statistics.visualData")}
            </FeatureItem>
          </FeatureList>
          <Button variant="secondary" onClick={() => navigate("/stats")}>
            {t("home.features.statistics.viewButton")}
          </Button>
        </Card>
      </CardGrid>
    </Container>
  );
};

export default HomePage;

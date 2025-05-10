import { useState } from "react";
import styled from "styled-components";
import Card from "../components/common/Card";
import TextInputForm from "../components/analysis/TextInputForm";
import AnalysisResult from "../components/analysis/AnalysisResult";
import { api } from "../api/client";
import { AnalysisResult as AnalysisResultType } from "../types/api";
import { LoadingOverlay } from "../components/common/LoadingSpinner";
import { media } from "../styles/media";
import Container from "../components/common/Container";

const PageContainer = styled(Container)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  ${media.up("md")`
    padding: 2rem;
  `}
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;

  ${media.up("md")`
    font-size: 2rem;
  `}
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ErrorMessage = styled.div`
  background-color: #ffebee;
  color: ${({ theme }) => theme.colors.sentiment.negative};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1.5rem;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.up("lg")`
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const InputSection = styled.div`
  width: 100%;

  ${media.up("lg")`
    width: 45%;
  `}
`;

const ResultSection = styled.div`
  width: 100%;

  ${media.up("lg")`
    width: 55%;
  `}
`;

const TextAreaContainer = styled.div`
  & textarea {
    min-height: 150px;

    ${media.up("md")`
      min-height: 200px;
    `}

    ${media.up("lg")`
      min-height: 250px;
    `}
  }
`;

const AnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResultType | null>(null);

  const handleAnalyzeText = async (text: string, language?: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const analysisResult = await api.analyzeText({ text, language });
      -setResult(analysisResult);
    } catch (error) {
      console.error("Error analyzing text:", error);
      setError("Failed to analyze text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <Title>Text Analysis</Title>
      <Description>
        Enter text to analyze sentiment, extract key phrases, and identify
        entities. The analysis is performed using Amazon Comprehend's language
        processing capabilities.
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContentLayout>
        <InputSection>
          <Card title="Enter Text">
            <TextAreaContainer>
              <TextInputForm
                onSubmit={handleAnalyzeText}
                isLoading={isLoading}
              />
            </TextAreaContainer>
          </Card>
        </InputSection>

        <ResultSection>
          {isLoading ? (
            <Card>
              <LoadingOverlay />
            </Card>
          ) : result ? (
            <AnalysisResult result={result} />
          ) : null}
        </ResultSection>
      </ContentLayout>
    </PageContainer>
  );
};

export default AnalysisPage;

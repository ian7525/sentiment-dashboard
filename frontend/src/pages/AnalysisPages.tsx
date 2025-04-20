import { useState } from "react";
import styled from "styled-components";
import Card from "../components/common/Card";
import TextInputForm from "../components/analysis/TextInputForm";
import AnalysisResult from "../components/analysis/AnalysisResult";
import { api } from "../api/client";
import { AnalysisResult as AnalysisResultType } from "../types/api";
import { LoadingOverlay } from "../components/common/LoadingSpinner";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
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

const ResultSection = styled.div`
  margin-top: 2rem;
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
      setResult(analysisResult);
    } catch (error) {
      console.error("Error analyzing text:", error);
      setError("Failed to analyze text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Text Analysis</Title>
      <Description>
        Enter text to analyze sentiment, extract key phrases, and identify
        entities. The analysis is performed using Amazon Comprehend's language
        processing capabilities.
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Card title="Enter Text">
        <TextInputForm onSubmit={handleAnalyzeText} isLoading={isLoading} />
      </Card>

      <ResultSection>
        {isLoading ? (
          <Card>
            <LoadingOverlay />
          </Card>
        ) : result ? (
          <AnalysisResult result={result} />
        ) : null}
      </ResultSection>
    </Container>
  );
};

export default AnalysisPage;

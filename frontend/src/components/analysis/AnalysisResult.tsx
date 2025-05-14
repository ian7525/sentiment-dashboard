import styled from "styled-components";
import { AnalysisResult as AnalysisResultType } from "../../types/api";
import Card from "../common/Card";
import { useTranslation } from "react-i18next";
import CopyButton from "../common/CopyButton";

interface AnalysisResultProps {
  result: AnalysisResultType;
}

const ResultContainer = styled.div`
  display: grid;
  grid-template-colums: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  margin-bottom: 0, 5rem;
  display: flex;
  flex-wrap: wrap;
`;

const Label = styled.span`
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium}
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.text.secondary}
`;

const Value = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
`;

const SentimentBar = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  overflow: hidden;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const BarSegment = styled.div<{ $width: number; $color: string }>`
width: ${({ $width }) => `${$width}%`}
background-color: ${({ $color }) => $color}
`;

const KeyPhraseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const KeyPhrase = styled.span`
    background-color:${({ theme }) => theme.colors.background.default}
    padding: 0.25rem 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: 0.875rem;
`;

const EntityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Entity = styled.div`
  display: flex;
  aligm-items: center;
  gap: 0.5rem;
`;

const EntityType = styled.span<{ $type: string }>`
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ $type, theme }) => {
    switch ($type.toLowerCase()) {
      case "person":
        return theme.colors.sentiment.positive;
      case "location":
        return theme.colors.sentiment.neutral;
      case "organization":
        return theme.colors.sentiment.mixed;
      case "commercial_item":
        return theme.colors.primary.light;
      default:
        return theme.colors.secondary.light;
    }
  }};
  color: white;
`;

const EntityText = styled.span`
  font-size: 0.875rem;
`;

const SentimentScore = styled.span<{ $sentiment: string }>`
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  background-color: ${({ $sentiment, theme }) => {
    switch ($sentiment) {
      case "POSITIVE":
        return theme.colors.sentiment.positive;
      case "NEGATIVE":
        return theme.colors.sentiment.neutral;
      case "NEUTRAL":
        return theme.colors.sentiment.neutral;
      case "MIXED":
        return theme.colors.sentiment.mixed;
      default:
        return theme.colors.text.primary;
    }
  }};
`;

const OriginalText = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  white-space: pre-wrap;
  max-height: 200px;
  verflow-y: auto;
`;

const AnalysisResult = ({ result }: AnalysisResultProps) => {
  const {
    sentimentAnalysis,
    keyPhrases,
    entities,
    originalText,
    timestamp,
    requestId,
  } = result.data || {};
  const { t } = useTranslation();

  const languageCode = sentimentAnalysis?.languageCode;
  const languageName =
    languageCode === "zh-TW"
      ? "繁體中文"
      : languageCode === "en"
      ? "English"
      : languageCode;

  return (
    <div>
      <Card title={t("analysis.results.title")}>
        <InfoItem>
          <Label>{t("analysis.results.language.title")}:</Label>
          <Value>
            {languageName} ({languageCode})
          </Value>
          <CopyButton
            text={JSON.stringify(result.data, null, 2)}
            label={t("analysis.results.copyAll")}
          />
        </InfoItem>

        <InfoItem>
          <Label>{t("analysis.results.sentiment.overall")}:</Label>
          <SentimentScore $sentiment={sentimentAnalysis.sentiment}>
            {t(`sentiments.${sentimentAnalysis.sentimentLabel.toLowerCase()}`)}
          </SentimentScore>
        </InfoItem>

        <SentimentBar>
          {sentimentAnalysis.scores.map((score, index) => (
            <BarSegment
              key={index}
              $width={score.value * 100}
              $color={score.color}
            />
          ))}
        </SentimentBar>

        <InfoItem>
          <Label>{t("analysis.results.analyzedAt")}:</Label>
          <Value>{new Date(timestamp).toLocaleString()}</Value>
        </InfoItem>

        <ResultContainer>
          <Card title={t("analysis.results.sentiment.scores")}>
            {sentimentAnalysis.scores.map((score, index) => (
              <InfoItem key={index}>
                <Label>{t(`sentiments.${score.name.toLowerCase()}`)}:</Label>
                <Value>{(score.value * 100).toFixed(2)}%</Value>
              </InfoItem>
            ))}
          </Card>

          <Card
            title={
              t("analysis.results.keyPhrases.title") +
              ` (${keyPhrases.phrases.length})`
            }
          >
            {keyPhrases.phrases.length > 0 ? (
              <KeyPhraseList>
                {keyPhrases.phrases.map((phrase, index) => (
                  <KeyPhrase key={index}>{phrase.text}</KeyPhrase>
                ))}
              </KeyPhraseList>
            ) : (
              <Value>{t("analysis.results.keyPhrases.noKeyPhrases")}</Value>
            )}
          </Card>

          <Card
            title={
              t("analysis.results.entities.title") +
              ` (${entities.entities.length})`
            }
          >
            {entities.entities.length > 0 ? (
              <EntityList>
                {entities.entities.map((entity, index) => (
                  <Entity key={index}>
                    <EntityType $type={entity.type}>
                      {t(
                        `entityTypes.${entity.type.toLowerCase()}`,
                        entity.typeLabel || entity.type
                      )}
                    </EntityType>
                    <EntityText>{entity.text}</EntityText>
                  </Entity>
                ))}
              </EntityList>
            ) : (
              <Value>{t("analysis.results.entities.noEntities")}</Value>
            )}
          </Card>
        </ResultContainer>

        <Card title={t("analysis.results.originalText")}>
          <CopyButton
            text={originalText}
            label={t("analysis.results.copyText")}
          />
          <OriginalText>{originalText}</OriginalText>
        </Card>

        <InfoItem>
          <Label>{t("analysis.results.requestId")}:</Label>
          <Value>{requestId}</Value>
        </InfoItem>
      </Card>
    </div>
  );
};

export default AnalysisResult;

import styled from "styled-components";
import Button from "../common/Button";

interface ExampleTextSelectorProps {
  onSelectExample: (text: string) => void;
}

const Container = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.p`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const examples = [
  {
    label: "Positive Review",
    text: "This product exceeded all my expectations! The quality is outstanding and customer service was excellent. I would highly recommend it to anyone looking for a reliable solution.",
  },
  {
    label: "Negative Feedback",
    text: "Unfortunately, I was very disappointed with my purchase. The product arrived damaged and didn't work as advertised. The customer support was slow to respond to my concerns.",
  },
  {
    label: "Neutral Description",
    text: "The device comes with a 6-inch display, 128GB of storage, and a dual camera system. It supports fast charging and is available in three colors: black, silver, and blue.",
  },
  {
    label: "Mixed Opinion",
    text: "While I really like the design and the functionality of this software, there are some issues with performance. It crashes occasionally and some features are unintuitive, but overall it helps me get my work done.",
  },
  {
    label: "中文評論",
    text: "這個應用程式的設計非常直觀，讓人使用起來很方便。但是有時候會出現卡頓的情況，希望開發者能夠優化一下性能。整體來說，這是一個值得推薦的工具。",
  },
];

const ExampleTextSelector = ({ onSelectExample }: ExampleTextSelectorProps) => {
  return (
    <Container>
      <Label>Or try one of these examples:</Label>
      <ButtonGroup>
        {examples.map((example, index) => (
          <Button
            key={index}
            size="small"
            variant="outlined"
            onClick={() => onSelectExample(example.text)}
          >
            {example.label}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
};

export default ExampleTextSelector;

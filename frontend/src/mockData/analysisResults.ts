export const positiveResult = {
  sentimentAnalysis: {
    sentiment: "POSITIVE",
    sentimentLabel: "Positive",
    scores: [
      {
        name: "Positive",
        value: 0.9998637437820435,
        color: "#4CAF50",
      },
      {
        name: "Negative",
        value: 0.00003628421836765483,
        color: "#F44336",
      },
      {
        name: "Neutral",
        value: 0.00008855985652189702,
        color: "#9E9E9E",
      },
      {
        name: "Mixed",
        value: 0.000011473866834421642,
        color: "#FF9800",
      },
    ],
    languageCode: "en",
  },
  keyPhrases: {
    phrases: [
      {
        text: "I",
        score: 1,
      },
      {
        text: "it",
        score: 1,
      },
      {
        text: "a reliable solution",
        score: 1,
      },
      {
        text: "anyone",
        score: 1,
      },
      {
        text: "This product",
        score: 1,
      },
      {
        text: "The quality",
        score: 1,
      },
      {
        text: "customer service",
        score: 1,
      },
      {
        text: "all my expectations",
        score: 1,
      },
    ],
    languageCode: "en",
  },
  entities: {
    entities: [],
    groupEntities: {},
    languageCode: "en",
  },
  originalText:
    "This product exceeded all my expectations! The quality is outstanding and customer service was excellent. I would highly recommend it to anyone looking for a reliable solution.",
  timestamp: "2025-05-15T02:44:07.763Z",
  requestId: "29b75b5e-7525-4aa2-b68c-b04ec67c0df4",
};

export const negativeResult = {
  sentimentAnalysis: {
    sentiment: "NEGATIVE",
    sentimentLabel: "Negative",
    scores: [
      {
        name: "Positive",
        value: 0.00008996213000500575,
        color: "#4CAF50",
      },
      {
        name: "Negative",
        value: 0.999450147151947,
        color: "#F44336",
      },
      {
        name: "Neutral",
        value: 0.0000332662821165286,
        color: "#9E9E9E",
      },
      {
        name: "Mixed",
        value: 0.00042659856262616813,
        color: "#FF9800",
      },
    ],
    languageCode: "en",
  },
  keyPhrases: {
    phrases: [
      {
        text: "I",
        score: 1,
      },
      {
        text: "my concerns",
        score: 1,
      },
      {
        text: "my purchase",
        score: 1,
      },
      {
        text: "The product",
        score: 1,
      },
      {
        text: "The customer support",
        score: 1,
      },
      {
        text: "advertised",
        score: 0.36,
      },
    ],
    languageCode: "en",
  },
  entities: {
    entities: [],
    groupEntities: {},
    languageCode: "en",
  },
  originalText:
    "Unfortunately, I was very disappointed with my purchase. The product arrived damaged and didn't work as advertised. The customer support was slow to respond to my concerns.",
  timestamp: "2025-05-15T02:45:20.402Z",
  requestId: "cd84606d-28b0-4003-ae40-4d9120df7b56",
};

export const neutralResult = {
  sentimentAnalysis: {
    sentiment: "NEUTRAL",
    sentimentLabel: "Neutral",
    scores: [
      {
        name: "Positive",
        value: 0.16057227551937103,
        color: "#4CAF50",
      },
      {
        name: "Negative",
        value: 0.00012330739991739392,
        color: "#F44336",
      },
      {
        name: "Neutral",
        value: 0.8388987183570862,
        color: "#9E9E9E",
      },
      {
        name: "Mixed",
        value: 0.00040572116267867386,
        color: "#FF9800",
      },
    ],
    languageCode: "en",
  },
  keyPhrases: {
    phrases: [
      {
        text: "It",
        score: 1,
      },
      {
        text: "storage",
        score: 1,
      },
      {
        text: "a 6-inch display",
        score: 1,
      },
      {
        text: "three colors",
        score: 1,
      },
      {
        text: "The device",
        score: 1,
      },
      {
        text: "a dual camera system",
        score: 1,
      },
      {
        text: "128GB",
        score: 1,
      },
      {
        text: "black",
        score: 0.97,
      },
      {
        text: "silver",
        score: 0.97,
      },
      {
        text: "blue",
        score: 0.91,
      },
    ],
    languageCode: "en",
  },
  entities: {
    entities: [
      {
        text: "6-inch",
        type: "QUANTITY",
        typeLabel: "Quantity",
        score: 1,
      },
      {
        text: "128GB",
        type: "QUANTITY",
        typeLabel: "Quantity",
        score: 1,
      },
      {
        text: "three colors",
        type: "QUANTITY",
        typeLabel: "Quantity",
        score: 0.99,
      },
    ],
    groupEntities: {
      QUANTITY: [
        {
          text: "6-inch",
          type: "QUANTITY",
          typeLabel: "Quantity",
          score: 1,
        },
        {
          text: "128GB",
          type: "QUANTITY",
          typeLabel: "Quantity",
          score: 1,
        },
        {
          text: "three colors",
          type: "QUANTITY",
          typeLabel: "Quantity",
          score: 0.99,
        },
      ],
    },
    languageCode: "en",
  },
  originalText:
    "The device comes with a 6-inch display, 128GB of storage, and a dual camera system. It supports fast charging and is available in three colors: black, silver, and blue.",
  timestamp: "2025-05-15T02:45:50.094Z",
  requestId: "87bb39ce-755b-4a1e-93c1-c594eb86eede",
};

export const mixedResult = {
  sentimentAnalysis: {
    sentiment: "MIXED",
    sentimentLabel: "Mixed",
    scores: [
      {
        name: "Positive",
        value: 0.006740947719663382,
        color: "#4CAF50",
      },
      {
        name: "Negative",
        value: 0.00015256139158736914,
        color: "#F44336",
      },
      {
        name: "Neutral",
        value: 0.00008071285992627963,
        color: "#9E9E9E",
      },
      {
        name: "Mixed",
        value: 0.9930257797241211,
        color: "#FF9800",
      },
    ],
    languageCode: "en",
  },
  keyPhrases: {
    phrases: [
      {
        text: "me",
        score: 1,
      },
      {
        text: "It",
        score: 1,
      },
      {
        text: "I",
        score: 1,
      },
      {
        text: "performance",
        score: 1,
      },
      {
        text: "my work",
        score: 1,
      },
      {
        text: "this software",
        score: 1,
      },
      {
        text: "the design",
        score: 1,
      },
      {
        text: "there",
        score: 1,
      },
      {
        text: "some issues",
        score: 1,
      },
      {
        text: "it",
        score: 1,
      },
      {
        text: "some features",
        score: 1,
      },
      {
        text: "the functionality",
        score: 0.99,
      },
    ],
    languageCode: "en",
  },
  entities: {
    entities: [],
    groupEntities: {},
    languageCode: "en",
  },
  originalText:
    "While I really like the design and the functionality of this software, there are some issues with performance. It crashes occasionally and some features are unintuitive, but overall it helps me get my work done.",
  timestamp: "2025-05-15T02:46:07.647Z",
  requestId: "e2cfe6ef-0588-41dd-a475-2cd30048bc8b",
};

import { NextResponse } from "next/server"

// List of available Hugging Face datasets that can be used without additional input
const availableDatasets = [
  {
    id: "squad",
    name: "SQuAD",
    description: "Stanford Question Answering Dataset - contains questions posed on a set of Wikipedia articles",
    category: "Question Answering",
    url: "https://huggingface.co/datasets/squad",
  },
  {
    id: "glue",
    name: "GLUE",
    description: "General Language Understanding Evaluation benchmark",
    category: "Natural Language Understanding",
    url: "https://huggingface.co/datasets/glue",
  },
  {
    id: "imdb",
    name: "IMDB",
    description: "Large Movie Review Dataset for sentiment analysis",
    category: "Sentiment Analysis",
    url: "https://huggingface.co/datasets/imdb",
  },
  {
    id: "cnn_dailymail",
    name: "CNN/DailyMail",
    description: "News articles with associated highlights for text summarization",
    category: "Summarization",
    url: "https://huggingface.co/datasets/cnn_dailymail",
  },
  {
    id: "wmt16",
    name: "WMT16",
    description: "Machine translation dataset from the WMT16 competition",
    category: "Translation",
    url: "https://huggingface.co/datasets/wmt16",
  },
  {
    id: "common_voice",
    name: "Common Voice",
    description: "Mozilla's initiative to help teach machines how real people speak",
    category: "Speech Recognition",
    url: "https://huggingface.co/datasets/common_voice",
  },
  {
    id: "cifar10",
    name: "CIFAR-10",
    description: "Dataset of 60,000 32x32 color images in 10 classes",
    category: "Image Classification",
    url: "https://huggingface.co/datasets/cifar10",
  },
  {
    id: "mnist",
    name: "MNIST",
    description: "Database of handwritten digits",
    category: "Image Classification",
    url: "https://huggingface.co/datasets/mnist",
  },
  {
    id: "emotion",
    name: "Emotion",
    description: "Dataset for emotion classification in text",
    category: "Emotion Recognition",
    url: "https://huggingface.co/datasets/emotion",
  },
  {
    id: "wikihow",
    name: "WikiHow",
    description: "Dataset of how-to articles from WikiHow",
    category: "Summarization",
    url: "https://huggingface.co/datasets/wikihow",
  },
]

export async function GET() {
  return NextResponse.json({ datasets: availableDatasets })
}

export async function POST(req: Request) {
  try {
    const { datasetId } = await req.json()

    // Find the requested dataset
    const dataset = availableDatasets.find((d) => d.id === datasetId)

    if (!dataset) {
      return NextResponse.json({ error: "Dataset not found" }, { status: 404 })
    }

    // In a real implementation, this would fetch sample data from the dataset
    // For now, we'll return mock sample data
    const sampleData = generateSampleData(datasetId)

    return NextResponse.json({
      dataset,
      samples: sampleData,
    })
  } catch (error) {
    console.error("Dataset API error:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}

// Generate sample data for each dataset
function generateSampleData(datasetId: string) {
  switch (datasetId) {
    case "squad":
      return [
        {
          question: "When was the Normans' conquest of England?",
          context:
            'The Normans (Norman: Normaunds; French: Normands) were the people who in the 10th and 11th centuries gave their name to Normandy, a region in France. They were descended from Norse ("Norman" comes from "Norseman") raiders and pirates from Denmark, Iceland and Norway who, under their leader Rollo, agreed to swear fealty to King Charles III of West Francia. Through generations of assimilation and mixing with the native Frankish and Roman-Gaulish populations, their descendants would gradually merge with the Carolingian-based cultures of West Francia. The distinct cultural and ethnic identity of the Normans emerged initially in the first half of the 10th century, and it continued to evolve over the succeeding centuries.',
          answer: "10th and 11th centuries",
        },
        {
          question: "Who was the leader of the Normans?",
          context:
            'The Normans (Norman: Normaunds; French: Normands) were the people who in the 10th and 11th centuries gave their name to Normandy, a region in France. They were descended from Norse ("Norman" comes from "Norseman") raiders and pirates from Denmark, Iceland and Norway who, under their leader Rollo, agreed to swear fealty to King Charles III of West Francia.',
          answer: "Rollo",
        },
      ]
    case "imdb":
      return [
        {
          text: "This movie was absolutely fantastic! The acting was superb and the plot kept me engaged throughout. Definitely one of the best films I've seen this year.",
          label: "positive",
        },
        {
          text: "I was really disappointed with this film. The characters were poorly developed and the story made no sense. I wouldn't recommend it to anyone.",
          label: "negative",
        },
      ]
    default:
      return [{ message: "Sample data not available for this dataset" }]
  }
}

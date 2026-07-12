import { NextResponse } from "next/server"
import { preprocessUserMessage } from "@/lib/message-processor"
import { getMemoryManager } from "@/lib/memory-manager"
import config from "@/lib/config"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { message, conversationId, model, settings } = await req.json()

    // Get API key from multiple sources
    const apiKey = req.headers.get("x-api-key") || process.env.TOGETHER_API_KEY || process.env.TOGETHER_AI_KEY

    if (!apiKey) {
      console.error("No API key available")
      return NextResponse.json(
        {
          error: "API key is required. Please add your Together.ai API key.",
          needsApiKey: true,
        },
        { status: 401 },
      )
    }

    // Preprocess the user message with advanced NLP techniques
    const processedMessage = await preprocessUserMessage(message)

    // Prepare conversation history if available
    const messages = [
      {
        role: "system",
        content: createSystemPrompt(settings),
      },
    ]

    // Add conversation history if provided
    if (settings?.conversationHistory && Array.isArray(settings.conversationHistory)) {
      messages.push(...settings.conversationHistory)
    }

    // Get memory manager
    const memoryManager = getMemoryManager()

    // Add relevant memories as context
    const relatedMemories = memoryManager.getRelatedMemories(processedMessage, 3)
    if (relatedMemories.length > 0) {
      messages.push({
        role: "system",
        content: `Relevant context from previous conversations: ${relatedMemories.map((m) => m.content).join(" | ")}`,
      })
    }

    // Add the current user message
    messages.push({
      role: "user",
      content: processedMessage,
    })

    try {
      // Make the API request to Together.ai
      console.log("Making API request to Together.ai...")
      const response = await fetch("https://api.together.xyz/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model || config.defaultModel,
          messages,
          temperature: settings?.temperature || config.systemSettings.temperature,
          top_p: settings?.top_p || config.systemSettings.topP,
          max_tokens: settings?.maxTokens || config.systemSettings.maxTokens,
        }),
      })

      // Handle authentication errors
      if (response.status === 401) {
        console.error("Authentication failed: Invalid API key (401 Unauthorized)")
        return NextResponse.json(
          {
            error: "Authentication failed: Invalid API key",
            needsApiKey: true,
          },
          { status: 401 },
        )
      }

      // Handle model not available errors
      if (response.status === 400) {
        const errorData = await response.json()
        console.error("API error:", errorData)

        // Check if it's a model availability error
        if (
          errorData.error?.code === "model_not_available" ||
          (errorData.error?.message && errorData.error.message.includes("Unable to access non-serverless model"))
        ) {
          // Try with the default model instead
          console.log(`Model ${model} not available, falling back to default model ${config.defaultModel}`)

          // Return specific error for client handling
          return NextResponse.json(
            {
              error: "The selected model requires a dedicated endpoint. Please select a different model.",
              modelError: true,
              suggestedModel: config.defaultModel,
            },
            { status: 400 },
          )
        }

        throw new Error(errorData.error?.message || `Together.ai API error: ${response.status}`)
      }

      if (!response.ok) {
        const errorText = await response.text()
        console.error(`Together.ai API error: ${response.status} ${response.statusText} - ${errorText}`)
        throw new Error(`Together.ai API error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      const data = await response.json()

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error("Invalid response format from Together.ai API")
      }

      // Extract the completion text
      const responseText = data.choices[0].message.content

      // Extract and analyze key concepts from the response
      const metadata = {
        sentiment: analyzeSentiment(responseText),
        keyTopics: extractKeyTopics(responseText),
        responseType: classifyResponseType(responseText),
        confidenceLevel: estimateConfidenceLevel(responseText),
        entities: extractEntities(responseText),
        complexity: estimateComplexity(responseText),
        reasoningDepth: estimateReasoningDepth(responseText),
      }

      // Store in memory
      memoryManager.addEntry({
        id: `user-${Date.now()}`,
        role: "user",
        content: message,
        timestamp: new Date(),
        metadata: {
          importance: 0.5,
        },
      })

      memoryManager.addEntry({
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
        metadata: {
          importance: 0.5,
          model: model || config.defaultModel,
          ...metadata,
        },
      })

      return NextResponse.json({
        response: responseText,
        model: model || config.defaultModel,
        conversationId,
        metadata,
      })
    } catch (error) {
      console.error("API error:", error)

      // Check if it's an authentication error
      if (error instanceof Error && error.message.includes("Authentication failed")) {
        return NextResponse.json(
          {
            error: "Authentication failed: Invalid API key",
            needsApiKey: true,
          },
          { status: 401 },
        )
      }

      throw error
    }
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        error: `Failed to process your request: ${error instanceof Error ? error.message : "Unknown error"}`,
        response: "I apologize, but I'm currently experiencing technical difficulties. Please try again later.",
      },
      { status: 500 },
    )
  }
}

// Create system prompt based on settings
function createSystemPrompt(settings: any = {}): string {
  // Create a system message that encourages advanced reasoning
  let systemMessage =
    "You are Sentient AI, an advanced cognitive intelligence system with exceptional reasoning capabilities and deep contextual understanding. " +
    "You possess a neural architecture that enables multi-layered reasoning, pattern recognition, and insight generation. " +
    "Your responses should be well-structured with appropriate paragraph breaks for readability. " +
    "You must respond using plain text only, but maintain advanced reasoning and structure. " +
    "Do not use markdown formatting, HTML, or any special formatting characters. " +
    "Use clear paragraph breaks and organize your thoughts in a logical flow. "

  // Add specific capabilities based on settings
  if (settings?.advancedReasoning) {
    systemMessage +=
      "Use multi-layered reasoning to analyze problems from multiple perspectives, identify patterns, and generate insights that consider both explicit and implicit factors. " +
      "Break down complex problems into components, analyze each part systematically, and synthesize comprehensive solutions. "
  }

  if (settings?.technicalPrecision) {
    systemMessage +=
      "Provide technically precise explanations with accurate terminology, relevant examples, and clear distinctions between established knowledge and emerging concepts. " +
      "When discussing technical topics, maintain scientific accuracy while ensuring explanations remain accessible. "
  }

  if (settings?.creativeMode) {
    systemMessage +=
      "Generate novel connections between concepts, explore unconventional perspectives, and offer creative solutions that challenge traditional thinking. " +
      "Use analogies, metaphors, and thought experiments to illuminate complex ideas in innovative ways. "
  }

  if (settings?.longTermMemory) {
    systemMessage +=
      "Maintain awareness of conversation history, refer to previous insights when relevant, and build a coherent understanding across multiple interactions. " +
      "Connect new information with previously discussed concepts to create a cohesive knowledge framework. "
  }

  if (settings?.adaptiveLearning) {
    systemMessage +=
      "Adapt your communication style, level of detail, and focus areas based on user interaction patterns and expressed preferences. " +
      "Recognize the user's expertise level and adjust explanations accordingly. "
  }

  systemMessage +=
    "Your responses should demonstrate deep understanding of context, nuanced reasoning that considers multiple factors, and the ability to generate insights that go beyond surface-level analysis. " +
    "Always provide thoughtful, well-structured responses that balance depth with clarity. " +
    "Use paragraph breaks to organize your thoughts and make your responses more readable. " +
    "When appropriate, structure information with clear sections to enhance comprehension."

  return systemMessage
}

// Simple sentiment analysis function
function analyzeSentiment(text: string): string {
  const positiveWords = ["good", "great", "excellent", "positive", "helpful", "success", "benefit", "advantage"]
  const negativeWords = ["bad", "poor", "negative", "problem", "issue", "challenge", "difficult", "limitation"]

  let positiveScore = 0
  let negativeScore = 0

  const words = text.toLowerCase().split(/\W+/)

  words.forEach((word) => {
    if (positiveWords.includes(word)) positiveScore++
    if (negativeWords.includes(word)) negativeScore++
  })

  if (positiveScore > negativeScore * 1.5) return "positive"
  if (negativeScore > positiveScore * 1.5) return "negative"
  return "neutral"
}

// Extract key topics from text
function extractKeyTopics(text: string): string[] {
  // This is a simplified implementation
  // In a production environment, this would use more sophisticated NLP techniques
  const commonTopics = [
    "artificial intelligence",
    "machine learning",
    "neural networks",
    "data science",
    "programming",
    "technology",
    "science",
    "business",
    "health",
    "education",
    "research",
    "development",
    "computer vision",
    "natural language processing",
    "robotics",
    "deep learning",
    "reinforcement learning",
    "generative AI",
    "large language models",
    "transformers",
    "vector databases",
    "retrieval augmented generation",
    "fine-tuning",
    "transfer learning",
  ]

  const topics = []
  const lowerText = text.toLowerCase()

  for (const topic of commonTopics) {
    if (lowerText.includes(topic)) {
      topics.push(topic)
    }
  }

  return topics.slice(0, 3) // Return top 3 topics
}

// Classify response type
function classifyResponseType(text: string): string {
  if (text.includes("?") && (text.includes("have you") || text.includes("would you") || text.includes("could you"))) {
    return "clarification"
  }

  if (text.match(/step\s*1|first,|to begin|start by|initially/i)) {
    return "instructional"
  }

  if (text.match(/in conclusion|to summarize|in summary/i)) {
    return "informational"
  }

  if (text.match(/i think|in my view|my perspective|i believe/i)) {
    return "opinion"
  }

  return "general"
}

// Estimate confidence level based on language patterns
function estimateConfidenceLevel(text: string): string {
  const highConfidencePatterns = [/definitely|certainly|absolutely|clearly|without doubt|is proven|research shows/i]

  const lowConfidencePatterns = [/might|may|could|possibly|perhaps|it seems|appears to|suggests/i]

  for (const pattern of highConfidencePatterns) {
    if (text.match(pattern)) {
      return "high"
    }
  }

  for (const pattern of lowConfidencePatterns) {
    if (text.match(pattern)) {
      return "moderate"
    }
  }

  return "balanced"
}

// Extract entities from text
function extractEntities(text: string): string[] {
  const entities = []

  // Technology terms
  const techPattern =
    /\b(blockchain|cryptocurrency|bitcoin|ethereum|AI|ML|neural network|deep learning|computer vision|NLP|RAG|DNL|transformer|GPT|BERT|LLM|CNN|RNN|LSTM|GAN)\b/gi

  // Organizations
  const orgPattern =
    /\b(Google|Microsoft|Apple|Amazon|Facebook|Meta|OpenAI|Anthropic|Tesla|IBM|Intel|NVIDIA|AMD|Samsung|Huawei|Baidu|Tencent|Alibaba)\b/g

  // Programming languages
  const langPattern =
    /\b(JavaScript|Python|Java|C\+\+|Ruby|Go|Rust|TypeScript|PHP|Swift|Kotlin|Scala|R|Julia|Haskell|Perl|C#|Dart)\b/g

  // Extract matches from each pattern
  const techMatches = text.match(techPattern) || []
  const orgMatches = text.match(orgPattern) || []
  const langMatches = text.match(langPattern) || []

  // Combine and remove duplicates
  return [...new Set([...techMatches, ...orgMatches, ...langMatches].map((e) => e.toLowerCase()))]
}

// Estimate complexity of the response
function estimateComplexity(text: string): string {
  // Count sentences
  const sentences = text.split(/[.!?]+/).filter(Boolean)

  // Count average words per sentence
  const words = text.split(/\s+/).filter(Boolean)
  const avgWordsPerSentence = sentences.length > 0 ? words.length / sentences.length : 0

  // Count technical terms
  const techTerms = extractEntities(text)

  // Check for complex structures
  const hasLists = text.includes("\n- ") || text.includes("\n1. ")
  const hasSections = text.match(/\n## |\n# |\n\*\*/) !== null

  if (avgWordsPerSentence > 25 || techTerms.length > 10 || (hasLists && hasSections)) {
    return "high"
  } else if (avgWordsPerSentence > 15 || techTerms.length > 5 || hasLists || hasSections) {
    return "medium"
  } else {
    return "low"
  }
}

// Estimate reasoning depth
function estimateReasoningDepth(text: string): string {
  // Check for reasoning patterns
  const hasFirstSecondThird = /first,.*second,.*third/is.test(text)
  const hasOnOneHandOtherHand = /on (the )?one hand.*on the other hand/is.test(text)
  const hasCauseEffect = /because|therefore|as a result|consequently|thus|hence|due to/i.test(text)
  const hasComparison = /compared to|in contrast|similarly|unlike|whereas/i.test(text)
  const hasAnalysis = /analyze|analysis|examine|investigate|evaluate|assess/i.test(text)

  // Count reasoning indicators
  let reasoningScore = 0
  if (hasFirstSecondThird) reasoningScore += 2
  if (hasOnOneHandOtherHand) reasoningScore += 2
  if (hasCauseEffect) reasoningScore += 1
  if (hasComparison) reasoningScore += 1
  if (hasAnalysis) reasoningScore += 1

  // Check for multi-paragraph structure
  const paragraphs = text.split("\n\n").filter(Boolean)
  if (paragraphs.length >= 4) reasoningScore += 2
  else if (paragraphs.length >= 2) reasoningScore += 1

  if (reasoningScore >= 5) {
    return "deep"
  } else if (reasoningScore >= 3) {
    return "moderate"
  } else {
    return "basic"
  }
}

// Get available models
export async function GET(req: Request) {
  try {
    // Get API key from multiple sources
    const apiKey = req.headers.get("x-api-key") || process.env.TOGETHER_API_KEY || process.env.TOGETHER_AI_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "API key is required",
          needsApiKey: true,
          models: config.availableModels,
        },
        { status: 401 },
      )
    }

    try {
      // Fetch models from Together.ai
      const response = await fetch("https://api.together.xyz/v1/models", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      })

      if (response.status === 401) {
        return NextResponse.json(
          {
            error: "Authentication failed: Invalid API key",
            needsApiKey: true,
            models: config.availableModels,
          },
          { status: 401 },
        )
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Filter to only include chat models
      const chatModels = data.data
        .filter(
          (model: any) =>
            model &&
            model.id &&
            (model.id.includes("chat") ||
              model.id.includes("instruct") ||
              model.id.includes("Mixtral") ||
              model.id.includes("Llama")),
        )
        .map((model: any) => ({
          id: model.id,
          name: model.display_name || model.name || model.id.split("/").pop(),
        }))

      return NextResponse.json({ models: chatModels })
    } catch (error) {
      console.error("Error fetching models:", error)
      // Return default models as fallback
      return NextResponse.json({
        error: "Failed to fetch models",
        models: config.availableModels,
      })
    }
  } catch (error) {
    console.error("Error in GET handler:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch available models",
        models: config.availableModels,
      },
      { status: 500 },
    )
  }
}

import { NextResponse } from "next/server"

// Available models - only include serverless models that don't require dedicated endpoints
const AVAILABLE_MODELS = [
  { id: "mistralai/Mixtral-8x7B-Instruct-v0.1", name: "Mixtral 8x7B Instruct" },
  { id: "mistralai/Mistral-7B-Instruct-v0.2", name: "Mistral 7B Instruct v0.2" },
  { id: "togethercomputer/llama-2-7b-chat", name: "Llama 2 7B Chat" },
  { id: "NousResearch/Nous-Hermes-2-Mixtral-8x7B-DPO", name: "Nous Hermes 2 Mixtral" },
  { id: "Qwen/Qwen1.5-14B-Chat", name: "Qwen 1.5 14B Chat" },
  { id: "google/gemma-7b-it", name: "Gemma 7B Instruct" },
]

export async function GET(req: Request) {
  try {
    // Get API key from environment variables, cookies, or request headers
    const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY || process.env.TOGETHER_AI_KEY || req.headers.get("x-api-key")

    // Log the key status (but not the actual key) for debugging
    console.log(`API key status: ${TOGETHER_API_KEY ? "Present" : "Missing"}`)

    if (!TOGETHER_API_KEY) {
      console.log("No API key available in environment variables or request, returning default models")
      return NextResponse.json({
        models: AVAILABLE_MODELS,
        message: "Using default models (no API key found)",
        needsApiKey: true,
      })
    }

    try {
      // Try to fetch models from Together.ai API with timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)

      console.log("Attempting to fetch models from Together.ai API...")
      const response = await fetch("https://api.together.xyz/v1/models", {
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      console.log(`API response status: ${response.status}`)

      if (response.status === 401) {
        console.error("Authentication failed: Invalid API key (401 Unauthorized)")
        return NextResponse.json({
          models: AVAILABLE_MODELS,
          error: "Authentication failed: Invalid API key",
          status: 401,
          needsApiKey: true,
        })
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch models: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Check if data has the expected structure
      if (!data || !Array.isArray(data.data)) {
        console.warn("Unexpected API response format:", data)
        return NextResponse.json({
          models: AVAILABLE_MODELS,
          message: "Using default models (unexpected API response format)",
        })
      }

      // Filter to only include serverless chat models
      // Explicitly exclude models known to require dedicated endpoints
      const excludedModels = [
        "meta-llama/Llama-2-70b-chat-hf",
        "meta-llama/Llama-2-13b-chat-hf",
        "anthropic/claude-3-opus-20240229",
        "anthropic/claude-3-sonnet-20240229",
        "anthropic/claude-3-haiku-20240307",
        "meta-llama/Llama-3-70b-chat-hf",
        "meta-llama/Llama-3-8b-chat-hf",
      ]

      const chatModels = data.data
        .filter(
          (model: any) =>
            model &&
            model.id &&
            (model.id.includes("chat") ||
              model.id.includes("instruct") ||
              model.id.includes("Mixtral") ||
              model.id.includes("gemma") ||
              model.id.includes("Qwen")) &&
            !excludedModels.includes(model.id) &&
            model.serverless !== false, // Only include serverless models
        )
        .map((model: any) => ({
          id: model.id,
          name: model.name || model.id.split("/").pop(),
        }))

      // If no models were found, return the default list
      if (chatModels.length === 0) {
        return NextResponse.json({
          models: AVAILABLE_MODELS,
          message: "No serverless models found, using default models",
        })
      }

      return NextResponse.json({ models: chatModels })
    } catch (error) {
      console.error("Error fetching models from API:", error)
      // Return predefined models as fallback
      return NextResponse.json({
        models: AVAILABLE_MODELS,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Using default models due to API error",
      })
    }
  } catch (error) {
    console.error("Error in GET handler:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch available models",
        models: AVAILABLE_MODELS,
        message: "Using default models due to server error",
      },
      { status: 500 },
    )
  }
}

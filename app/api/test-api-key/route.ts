import { NextResponse } from "next/server"
import config from "@/lib/config"

export async function POST(req: Request) {
  try {
    // Get API key from request body or headers
    const body = await req.json()
    const apiKey = body.apiKey || req.headers.get("x-api-key")

    if (!apiKey) {
      return NextResponse.json({ error: "API key is required" }, { status: 400 })
    }

    console.log("Testing API key...")

    // Test the API key with a simple request to Together.ai
    const response = await fetch(config.apiEndpoints.models, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(5000),
    })

    if (response.status === 401) {
      console.log("API key test failed: 401 Unauthorized")
      return NextResponse.json({ error: "Invalid API key: Authentication failed" }, { status: 401 })
    }

    if (!response.ok) {
      console.log(`API key test failed: ${response.status} ${response.statusText}`)
      return NextResponse.json({ error: `Invalid API key: ${response.status} ${response.statusText}` }, { status: 400 })
    }

    // If we get here, the API key is valid
    console.log("API key test successful")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error testing API key:", error)
    return NextResponse.json({ error: "Failed to validate API key" }, { status: 500 })
  }
}

"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useConversation } from "@/lib/conversation-context"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { InsightsPanel } from "@/components/insights-panel"
import { ErrorDisplay } from "@/components/error-display"
import { handleApiError } from "@/lib/api-utils"
import { getApiClient } from "@/lib/api-client"
import ApiKeySetupBanner from "@/components/api-key-setup-banner"
import ChatSidebar from "@/components/chat-sidebar"
import { Brain, Send, Sparkles, Loader2 } from "lucide-react"

// Make sure to use a function declaration for the default export
export default function Page() {
  const { messages, addMessage, settings, isProcessing, getConversationHistory, currentConversationId } =
    useConversation()

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [needsApiKey, setNeedsApiKey] = useState(false)
  const [isThinking, setIsThinking] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [messageMetadata, setMessageMetadata] = useState<Record<string, any>>({})
  const [selectedModel, setSelectedModel] = useState("")
  const [availableModels, setAvailableModels] = useState<{ id: string; name: string }[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Check if API key is needed on component mount
  useEffect(() => {
    const checkApiKey = async () => {
      const apiClient = getApiClient()
      const hasKey = apiClient.hasApiKey()
      const hasAuthError = apiClient.hasAuthError()

      if (!hasKey || hasAuthError) {
        setNeedsApiKey(true)
      } else {
        // Fetch available models
        fetchAvailableModels()
      }
    }

    checkApiKey()
  }, [])

  // Fetch available models
  const fetchAvailableModels = async () => {
    try {
      const apiClient = getApiClient()
      const models = await apiClient.fetchModels()
      setAvailableModels(models)

      // Set default model if not already set
      if (!selectedModel && models.length > 0) {
        setSelectedModel(models[0].id)
      }
    } catch (error) {
      console.error("Error fetching models:", error)
      toast({
        title: "Error",
        description: "Failed to fetch available models",
        variant: "destructive",
      })
    }
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Handle API key update
  const handleApiKeyUpdated = () => {
    setNeedsApiKey(false)
    fetchAvailableModels()
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim() === "" || isLoading) return

    // If we need an API key, don't proceed
    if (needsApiKey) {
      toast({
        title: "API Key Required",
        description: "Please add your Together.ai API key to continue.",
        variant: "destructive",
      })
      return
    }

    const userMessage = input.trim()
    setInput("")
    setIsLoading(true)
    setIsThinking(true)
    setError(null) // Clear any previous errors
    setShowSuggestions(false) // Hide suggestions when user sends a message

    // Generate a unique message ID
    const userMessageId = Date.now().toString()

    // Add user message to the conversation
    addMessage({
      id: userMessageId,
      role: "user",
      content: userMessage,
      createdAt: new Date(),
    })

    try {
      // Get conversation history for context if enabled
      const conversationHistory = settings.contextRetention ? getConversationHistory() : []

      // Get API key from localStorage
      const apiKey = localStorage.getItem("TOGETHER_API_KEY")

      // Send message to API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey && { "x-api-key": apiKey }), // Include API key in headers if available
        },
        body: JSON.stringify({
          message: userMessage,
          conversationId: currentConversationId,
          model: selectedModel,
          settings: {
            ...settings,
            conversationHistory: conversationHistory,
          },
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Check if it's an authentication error
        if (response.status === 401 || data.needsApiKey) {
          setNeedsApiKey(true)
          throw new Error("Authentication failed: Invalid API key")
        }

        // Check if it's a model availability error
        if (data.modelError) {
          // Update the selected model to the suggested one
          if (data.suggestedModel) {
            setSelectedModel(data.suggestedModel)
            toast({
              title: "Model Changed",
              description: "The selected model requires a dedicated endpoint. Switched to an available model.",
            })

            // Retry with the new model
            setTimeout(() => {
              const form = document.querySelector("form")
              if (form) {
                setInput(userMessage)
                setTimeout(() => {
                  form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
                }, 100)
              }
            }, 500)
          }

          throw new Error(data.error || "Model not available. Please select a different model.")
        }

        throw new Error(data.error || `API error: ${response.status}`)
      }

      // Generate a unique message ID for the assistant's response
      const assistantMessageId = (Date.now() + 1).toString()

      // Add AI response to the conversation
      addMessage({
        id: assistantMessageId,
        role: "assistant",
        content: data.response,
        createdAt: new Date(),
        model: data.model,
      })

      // Store metadata if available
      if (data.metadata) {
        setMessageMetadata((prev) => ({
          ...prev,
          [assistantMessageId]: data.metadata,
        }))
      }
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage = handleApiError(error)

      setError(errorMessage)

      // Check if it's an authentication error
      if (errorMessage.includes("Authentication failed") || errorMessage.includes("Invalid API key")) {
        setNeedsApiKey(true)
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
      setIsThinking(false)
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  // Handle key press (Ctrl+Enter to submit)
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      const form = e.currentTarget.form
      if (form) form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-80 md:flex-col md:fixed md:inset-y-0 z-[80] bg-background">
        <ChatSidebar />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 md:pl-80">
        <main className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row">
            {/* Chat area */}
            <div className="flex-1 flex flex-col">
              {/* API key setup banner */}
              {needsApiKey && (
                <div className="px-4 py-2">
                  <ApiKeySetupBanner onApiKeyUpdated={handleApiKeyUpdated} />
                </div>
              )}

              {/* Error display */}
              {error && (
                <div className="px-4 py-2">
                  <ErrorDisplay error={error} />
                </div>
              )}

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="max-w-3xl mx-auto space-y-6">
                  {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)] text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Brain className="h-10 w-10 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Welcome to Sentient AI</h2>
                      <p className="text-muted-foreground max-w-md mb-8">
                        Experience advanced cognitive intelligence with multi-layered reasoning and contextual
                        understanding.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
                        <Button
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                          onClick={() => {
                            setInput("Explain how neural networks work")
                            setShowSuggestions(false)
                          }}
                        >
                          Explain neural networks
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                          onClick={() => {
                            setInput("Compare supervised and unsupervised learning")
                            setShowSuggestions(false)
                          }}
                        >
                          Compare learning methods
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                          onClick={() => {
                            setInput("What are the ethical implications of AI?")
                            setShowSuggestions(false)
                          }}
                        >
                          AI ethics
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                          onClick={() => {
                            setInput("Explain the concept of transfer learning")
                            setShowSuggestions(false)
                          }}
                        >
                          Transfer learning
                        </Button>
                      </div>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`rounded-lg px-4 py-2 max-w-[80%] ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary border border-primary/10"
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{message.content}</div>
                          {message.role === "assistant" && message.model && (
                            <div className="mt-2 text-xs text-muted-foreground flex items-center">
                              <Sparkles className="h-3 w-3 mr-1" />
                              {message.model.split("/").pop()}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}

                  {/* Thinking indicator */}
                  {isThinking && (
                    <div className="flex justify-start">
                      <div className="rounded-lg px-4 py-2 bg-secondary border border-primary/10">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1 items-center">
                            <div className="thinking-dot"></div>
                            <div className="thinking-dot"></div>
                            <div className="thinking-dot"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Input area */}
              <div className="p-4 border-t border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="max-w-3xl mx-auto">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Textarea
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="min-h-[60px] resize-none border-primary/20"
                      disabled={isLoading || needsApiKey}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="h-[60px] w-[60px] bg-primary hover:bg-primary/90"
                      disabled={isLoading || !input.trim() || needsApiKey}
                    >
                      {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                    </Button>
                  </form>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    Press Ctrl + Enter to send message
                  </div>
                </div>
              </div>
            </div>

            {/* Insights panel (only visible on larger screens and when there are messages) */}
            {messages.length > 0 && (
              <div className="hidden lg:block w-80 border-l border-primary/10 p-4 overflow-y-auto">
                <Tabs defaultValue="insights">
                  <TabsList className="w-full">
                    <TabsTrigger value="insights" className="flex-1">
                      Insights
                    </TabsTrigger>
                    <TabsTrigger value="models" className="flex-1">
                      Models
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="insights" className="mt-4">
                    <InsightsPanel messages={messages} metadata={messageMetadata} />
                  </TabsContent>
                  <TabsContent value="models" className="mt-4">
                    <Card className="border-primary/20">
                      <div className="p-4">
                        <h3 className="text-sm font-medium mb-3">Select Model</h3>
                        <div className="space-y-2">
                          {availableModels.map((model) => (
                            <div
                              key={model.id}
                              className={`p-2 rounded-md cursor-pointer transition-colors ${
                                selectedModel === model.id
                                  ? "bg-primary/10 border border-primary/20"
                                  : "hover:bg-secondary"
                              }`}
                              onClick={() => setSelectedModel(model.id)}
                            >
                              <div className="flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span className="text-sm">{model.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

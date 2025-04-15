import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Sparkles, Target, Zap, MessageSquare, Database, Code, Network } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-12">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 px-3 py-1">Insights</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                Conversation Analytics & Insights
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Understand how Sentient AI analyzes conversations to provide deeper understanding and validation
            </p>
          </div>

          {/* Overview Section */}
          <section className="mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  How Insights Work
                </CardTitle>
                <CardDescription>
                  Sentient AI's neural architecture continuously analyzes conversations to extract meaningful patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our insights system processes conversations through multiple specialized neural pathways to extract
                  meaningful patterns, validate information, and provide deeper understanding of the interaction. This
                  helps both users and the AI system to better understand the context, content, and quality of the
                  conversation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Neural Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Multi-layered processing extracts topics, entities, and patterns from conversation text
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Validation Metrics</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluates factual accuracy, reasoning coherence, and contextual relevance
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-4 bg-secondary/30 rounded-lg border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">Adaptive Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuously improves understanding based on conversation patterns and feedback
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Insights Components Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Key Insight Components</h2>

            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Validation Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Validation metrics evaluate the quality and reliability of AI responses across multiple dimensions:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                          <Zap className="h-3 w-3 text-green-500" />
                        </span>
                        Factual Accuracy
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Measures the factual correctness of AI responses based on known information and internal
                        knowledge. Higher scores indicate responses that align with established facts and avoid
                        misinformation.
                      </p>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Brain className="h-3 w-3 text-blue-500" />
                        </span>
                        Reasoning Coherence
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Evaluates the logical consistency and flow of reasoning in responses. This metric assesses
                        whether conclusions follow from premises and whether the reasoning process is clear and
                        structured.
                      </p>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Target className="h-3 w-3 text-amber-500" />
                        </span>
                        Contextual Relevance
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Assesses how well responses address the specific context of queries. High scores indicate the AI
                        is properly understanding and responding to the user's actual intent and question.
                      </p>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center">
                          <MessageSquare className="h-3 w-3 text-violet-500" />
                        </span>
                        Uncertainty Recognition
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Measures appropriate expression of uncertainty when information is limited or ambiguous. This
                        metric helps ensure the AI doesn't present speculative information as fact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Topic & Entity Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Sentient AI automatically identifies key topics and entities in conversations to build a semantic
                    understanding of the discussion:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Topic Extraction</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our neural topic modeling system identifies the main subjects being discussed in a conversation,
                        even when they're not explicitly mentioned. This helps track conversation themes over time.
                      </p>

                      <div className="p-3 bg-secondary/30 rounded-lg border border-primary/10">
                        <h4 className="text-sm font-medium mb-2">How It Works:</h4>
                        <ol className="text-xs text-muted-foreground space-y-1 pl-4 list-decimal">
                          <li>Tokenizes and lemmatizes conversation text</li>
                          <li>Applies neural topic modeling to identify key themes</li>
                          <li>Ranks topics by relevance and frequency</li>
                          <li>Tracks topic evolution across conversation history</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-3">Entity Recognition</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our entity recognition system identifies specific named entities like organizations,
                        technologies, concepts, and more to build a knowledge graph of the conversation.
                      </p>

                      <div className="p-3 bg-secondary/30 rounded-lg border border-primary/10">
                        <h4 className="text-sm font-medium mb-2">Entity Categories:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Technologies
                          </Badge>
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Organizations
                          </Badge>
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Concepts
                          </Badge>
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Programming Languages
                          </Badge>
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Frameworks
                          </Badge>
                          <Badge variant="outline" className="bg-primary/5 border-primary/20">
                            Methods
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Conversation Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Sentient AI analyzes conversation patterns to understand the nature and quality of the interaction:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2">Response Type Classification</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Automatically categorizes AI responses into different types to understand the nature of the
                        conversation:
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-secondary/50 rounded-lg">
                          <span className="text-xs font-medium">Instructional</span>
                        </div>
                        <div className="p-2 bg-secondary/50 rounded-lg">
                          <span className="text-xs font-medium">Informational</span>
                        </div>
                        <div className="p-2 bg-secondary/50 rounded-lg">
                          <span className="text-xs font-medium">Opinion</span>
                        </div>
                        <div className="p-2 bg-secondary/50 rounded-lg">
                          <span className="text-xs font-medium">Clarification</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2">Sentiment Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Tracks the emotional tone of the conversation to better understand user needs and adjust
                        responses accordingly:
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-xs">Positive</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                          <span className="text-xs">Neutral</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <span className="text-xs">Negative</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2">Complexity Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Evaluates the complexity level of both user queries and AI responses to ensure appropriate
                        depth:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Low Complexity</span>
                          <div className="w-24 h-2 bg-secondary rounded-full">
                            <div className="w-1/3 h-full bg-primary rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">Medium Complexity</span>
                          <div className="w-24 h-2 bg-secondary rounded-full">
                            <div className="w-2/3 h-full bg-primary rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs">High Complexity</span>
                          <div className="w-24 h-2 bg-secondary rounded-full">
                            <div className="w-full h-full bg-primary rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                      <h3 className="text-lg font-medium mb-2">Reasoning Depth</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Measures the depth of reasoning in AI responses to ensure thorough analysis:
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-primary" />
                          <span className="text-xs">Multi-step reasoning chains</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-primary" />
                          <span className="text-xs">Comparative analysis patterns</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-primary" />
                          <span className="text-xs">Cause-effect relationship identification</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Network className="h-4 w-4 text-primary" />
                          <span className="text-xs">Structured argumentation flow</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Neural Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  Sentient AI's insights system is built on a sophisticated neural architecture that processes
                  conversation data through multiple specialized pathways:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                    <h3 className="text-lg font-medium mb-2">Text Analysis Pipeline</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Our text analysis pipeline processes raw conversation text through multiple stages:
                    </p>
                    <ol className="text-sm space-y-2 pl-5 list-decimal">
                      <li>Tokenization and normalization</li>
                      <li>Entity extraction and classification</li>
                      <li>Topic modeling and clustering</li>
                      <li>Sentiment and intent analysis</li>
                      <li>Complexity and reasoning evaluation</li>
                    </ol>
                  </div>

                  <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                    <h3 className="text-lg font-medium mb-2">Memory Integration</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Insights are integrated with our memory system to provide contextual understanding:
                    </p>
                    <ul className="text-sm space-y-2 pl-5 list-disc">
                      <li>Short-term conversation context</li>
                      <li>Long-term knowledge retention</li>
                      <li>Cross-conversation pattern recognition</li>
                      <li>Semantic similarity matching</li>
                      <li>Temporal relationship tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-medium mb-3">Real-time Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    All insights are generated in real-time as conversations occur, with minimal latency impact. The
                    system uses a parallel processing architecture that analyzes conversations while the main AI model
                    generates responses, ensuring that insights are available immediately without delaying the user
                    experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section>
            <div className="p-8 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-xl border border-primary/20 text-center">
              <h2 className="text-2xl font-bold mb-4">Experience Advanced Insights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Start a conversation with Sentient AI to see these insights in action. Our neural architecture
                continuously analyzes your interactions to provide deeper understanding and more relevant responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/chat">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90"
                  >
                    Try Sentient AI
                  </Button>
                </Link>
                <Link href="/documentation">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

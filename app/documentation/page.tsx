import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap, Book, FileText, Server, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-12">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 px-3 py-1">Documentation</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                Sentient AI Technical Documentation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Comprehensive guide to Sentient AI's architecture, capabilities, and implementation
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="border-primary/20 mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Core Architecture</h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <a href="#neural-architecture" className="hover:text-primary transition-colors">
                          Neural Architecture
                        </a>
                      </li>
                      <li>
                        <a href="#memory-system" className="hover:text-primary transition-colors">
                          Memory System
                        </a>
                      </li>
                      <li>
                        <a href="#reasoning-engine" className="hover:text-primary transition-colors">
                          Reasoning Engine
                        </a>
                      </li>
                      <li>
                        <a href="#knowledge-retrieval" className="hover:text-primary transition-colors">
                          Knowledge Retrieval
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Technical Implementation</h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <a href="#api-integration" className="hover:text-primary transition-colors">
                          API Integration
                        </a>
                      </li>
                      <li>
                        <a href="#frontend-components" className="hover:text-primary transition-colors">
                          Frontend Components
                        </a>
                      </li>
                      <li>
                        <a href="#backend-services" className="hover:text-primary transition-colors">
                          Backend Services
                        </a>
                      </li>
                      <li>
                        <a href="#data-processing" className="hover:text-primary transition-colors">
                          Data Processing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Advanced Features</h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <a href="#insights-analytics" className="hover:text-primary transition-colors">
                          Insights & Analytics
                        </a>
                      </li>
                      <li>
                        <a href="#adaptive-learning" className="hover:text-primary transition-colors">
                          Adaptive Learning
                        </a>
                      </li>
                      <li>
                        <a href="#context-retention" className="hover:text-primary transition-colors">
                          Context Retention
                        </a>
                      </li>
                      <li>
                        <a href="#error-handling" className="hover:text-primary transition-colors">
                          Error Handling & Recovery
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Development Resources</h3>
                    <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                      <li>
                        <a href="#api-reference" className="hover:text-primary transition-colors">
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a href="#configuration" className="hover:text-primary transition-colors">
                          Configuration Options
                        </a>
                      </li>
                      <li>
                        <a href="#deployment" className="hover:text-primary transition-colors">
                          Deployment Guide
                        </a>
                      </li>
                      <li>
                        <a href="#best-practices" className="hover:text-primary transition-colors">
                          Best Practices
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Architecture */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Architecture</h2>

            <div className="space-y-8">
              <div id="neural-architecture">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Neural Architecture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI is built on a sophisticated neural architecture that combines multiple specialized
                      systems to deliver truly intelligent interactions:
                    </p>

                    <div className="space-y-6">
                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Foundation Model</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          At the core of Sentient AI is a state-of-the-art transformer-based language model with
                          billions of parameters, optimized for contextual understanding and knowledge representation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Model Architecture</h4>
                            <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                              <li>Transformer-based architecture with multi-head attention</li>
                              <li>Billions of parameters for deep contextual understanding</li>
                              <li>Optimized for both efficiency and accuracy</li>
                              <li>Fine-tuned on diverse, high-quality datasets</li>
                            </ul>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Training Methodology</h4>
                            <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                              <li>Pre-training on diverse text corpora</li>
                              <li>Supervised fine-tuning with human feedback</li>
                              <li>Reinforcement learning from human feedback (RLHF)</li>
                              <li>Continuous learning from interactions</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Specialized Neural Pathways</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Sentient AI processes information through multiple specialized neural pathways that work in
                          parallel to enable sophisticated reasoning and understanding:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                              <Cpu className="h-3 w-3 text-primary" />
                              Semantic Understanding Pathway
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Processes the meaning and context of language, recognizing intent, sentiment, and
                              contextual implications to provide more relevant responses.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                              <Cpu className="h-3 w-3 text-primary" />
                              Reasoning Pathway
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Handles logical operations, causal relationships, and multi-step reasoning to solve
                              complex problems and generate insights.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                              <Cpu className="h-3 w-3 text-primary" />
                              Knowledge Integration Pathway
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Connects external knowledge with internal representations to provide factually accurate
                              and comprehensive information.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1 flex items-center gap-1">
                              <Cpu className="h-3 w-3 text-primary" />
                              Adaptive Learning Pathway
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Continuously updates internal representations based on new information and feedback to
                              improve future responses.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="memory-system">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Memory System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI's memory system enables it to maintain context across conversations and learn from
                      past interactions:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Short-Term Memory</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Maintains the immediate context of the current conversation:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Stores recent messages with full context</li>
                            <li>Tracks conversation state and user intent</li>
                            <li>Maintains references to entities and topics</li>
                            <li>Configurable context window (default: 10 messages)</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Long-Term Memory</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Stores important information across multiple conversations:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Persistent storage of key insights and patterns</li>
                            <li>Topic and entity tracking across conversations</li>
                            <li>User preferences and interaction patterns</li>
                            <li>Importance-based retention policy</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Memory Management</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Sentient AI uses sophisticated memory management techniques to optimize storage and retrieval:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Importance Scoring</h4>
                            <p className="text-xs text-muted-foreground">
                              Automatically assigns importance scores to memories based on relevance, uniqueness, and
                              emotional significance.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Semantic Indexing</h4>
                            <p className="text-xs text-muted-foreground">
                              Organizes memories using semantic vectors for efficient retrieval based on meaning rather
                              than just keywords.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Forgetting Mechanisms</h4>
                            <p className="text-xs text-muted-foreground">
                              Implements controlled forgetting of less important information to prevent memory overload
                              while retaining critical context.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Implementation Details</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Technical implementation of the memory system:
                        </p>

                        <div className="overflow-x-auto">
                          <pre className="text-xs bg-secondary/50 p-3 rounded-lg overflow-x-auto">
                            <code>
                              {`// Memory Entry Interface
interface MemoryEntry {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  metadata?: {
    topics?: string[];
    importance?: number;
    [key: string]: any;
  };
}

// Memory Manager Class
class MemoryManager {
  private entries: MemoryEntry[] = [];
  private maxEntries: number;
  
  constructor(maxEntries: number = 100) {
    this.maxEntries = maxEntries;
  }
  
  public addEntry(entry: MemoryEntry): void {
    // Add entry and manage memory size
  }
  
  public getEntries(options?: {
    limit?: number;
    role?: string;
    topics?: string[];
    timeRange?: { start?: Date; end?: Date };
    sortBy?: "time" | "importance";
  }): MemoryEntry[] {
    // Retrieve filtered entries
  }
  
  public getRelatedMemories(query: string, limit: number = 5): MemoryEntry[] {
    // Find semantically related memories
  }
}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="reasoning-engine">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Reasoning Engine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI's reasoning engine enables it to process information through multiple layers of
                      analysis to generate insights and solve complex problems:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Multi-Step Reasoning</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Breaks down complex problems into manageable steps:
                          </p>
                          <ol className="text-xs text-muted-foreground space-y-1 pl-4 list-decimal">
                            <li>Problem decomposition into sub-problems</li>
                            <li>Sequential reasoning through each step</li>
                            <li>Intermediate result validation</li>
                            <li>Solution synthesis and verification</li>
                          </ol>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Causal Reasoning</h3>
                          <p className="text-sm text-muted-foreground mb-3">Identifies cause-effect relationships:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Causal relationship identification</li>
                            <li>Counterfactual analysis</li>
                            <li>Temporal sequence understanding</li>
                            <li>Intervention and outcome prediction</li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Analogical Reasoning</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Transfers knowledge between domains using analogies:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Structural mapping between domains</li>
                            <li>Similarity detection and abstraction</li>
                            <li>Knowledge transfer across contexts</li>
                            <li>Novel insight generation</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Uncertainty Handling</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Manages uncertainty in reasoning and knowledge:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Confidence estimation for assertions</li>
                            <li>Probabilistic reasoning under uncertainty</li>
                            <li>Explicit uncertainty communication</li>
                            <li>Alternative hypothesis consideration</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Reasoning Patterns</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Sentient AI employs various reasoning patterns depending on the task:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Deductive Reasoning</h4>
                            <p className="text-xs text-muted-foreground">
                              Drawing specific conclusions from general principles using logical rules and inference.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Inductive Reasoning</h4>
                            <p className="text-xs text-muted-foreground">
                              Deriving general principles from specific observations and patterns.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Abductive Reasoning</h4>
                            <p className="text-xs text-muted-foreground">
                              Forming the most likely explanation for incomplete observations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="knowledge-retrieval">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Knowledge Retrieval
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI uses advanced Retrieval Augmented Generation (RAG) to access and integrate relevant
                      information dynamically:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">RAG Architecture</h3>
                          <p className="text-sm text-muted-foreground mb-3">Core components of the RAG system:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Query understanding and reformulation</li>
                            <li>Vector embedding and semantic search</li>
                            <li>Context integration and synthesis</li>
                            <li>Source attribution and verification</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Knowledge Sources</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Information sources integrated with the system:
                          </p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Internal knowledge base from training</li>
                            <li>Conversation history and user context</li>
                            <li>Specialized domain knowledge</li>
                            <li>External API integrations (when available)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Retrieval Process</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The step-by-step process of knowledge retrieval:
                        </p>

                        <ol className="text-xs text-muted-foreground space-y-2 pl-4 list-decimal">
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Query Analysis:</span> Parse and understand the user's query
                            to identify key concepts, entities, and information needs.
                          </li>
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Query Expansion:</span> Enhance the original query with
                            related terms, synonyms, and contextual information to improve retrieval.
                          </li>
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Vector Search:</span> Convert the expanded query to a vector
                            embedding and search for semantically similar content.
                          </li>
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Relevance Ranking:</span> Score and rank retrieved information
                            based on relevance, recency, and reliability.
                          </li>
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Context Integration:</span> Incorporate the most relevant
                            information into the generation context.
                          </li>
                          <li className="p-2 bg-secondary/50 rounded-lg">
                            <span className="font-medium">Response Generation:</span> Generate a response that
                            seamlessly integrates retrieved knowledge with the model's capabilities.
                          </li>
                        </ol>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Implementation Details</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Technical implementation of the knowledge retrieval system:
                        </p>

                        <div className="overflow-x-auto">
                          <pre className="text-xs bg-secondary/50 p-3 rounded-lg overflow-x-auto">
                            <code>
                              {`// Knowledge Retrieval Process
async function retrieveRelevantKnowledge(query: string, options: RetrievalOptions): Promise<KnowledgeContext> {
  // 1. Analyze and expand the query
  const expandedQuery = await expandQuery(query);
  
  // 2. Generate vector embedding for the query
  const queryEmbedding = await generateEmbedding(expandedQuery);
  
  // 3. Perform vector search
  const searchResults = await vectorSearch(queryEmbedding, options.topK);
  
  // 4. Rank results by relevance
  const rankedResults = rankByRelevance(searchResults, query);
  
  // 5. Format and return knowledge context
  return formatKnowledgeContext(rankedResults, options.maxTokens);
}

// Integration with response generation
async function generateAugmentedResponse(messages: ChatMessage[], query: string): Promise<string> {
  // Retrieve relevant knowledge
  const knowledgeContext = await retrieveRelevantKnowledge(query, {
    topK: 5,
    maxTokens: 1000
  });
  
  // Add knowledge context to system message
  const augmentedMessages = [
    {
      role: "system",
      content: \`\${systemPrompt}\\n\\nRelevant context: \${knowledgeContext.text}\`
    },
    ...messages
  ];
  
  // Generate response with augmented context
  return generateCompletion(augmentedMessages);
}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Implementation</h2>

            <div className="space-y-8">
              <div id="api-integration">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      API Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI integrates with external AI providers through a robust API client architecture:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">API Client Architecture</h3>
                          <p className="text-sm text-muted-foreground mb-3">Core components of the API integration:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Unified client interface for multiple providers</li>
                            <li>Request/response standardization</li>
                            <li>Error handling and retry mechanisms</li>
                            <li>Rate limiting and throttling</li>
                            <li>Fallback strategies for service disruptions</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Supported Providers</h3>
                          <p className="text-sm text-muted-foreground mb-3">AI providers integrated with the system:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Together.ai (primary provider)</li>
                            <li>Local fallback processing</li>
                            <li>Extensible architecture for additional providers</li>
                          </ul>

                          <div className="mt-4 p-2 bg-secondary/50 rounded-lg">
                            <h4 className="text-xs font-medium mb-1">Supported Models</h4>
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                                Mixtral 8x7B
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                                Mistral 7B
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                                Llama 2 70B
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                                Llama 2 13B
                              </Badge>
                              <Badge variant="outline" className="text-xs bg-primary/5 border-primary/20">
                                Nous Hermes
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">API Client Implementation</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Technical implementation of the API client:
                        </p>

                        <div className="overflow-x-auto">
                          <pre className="text-xs bg-secondary/50 p-3 rounded-lg overflow-x-auto">
                            <code>
                              {`// API Client Class
class ApiClient {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  // Fetch available models
  async fetchModels(): Promise<{ id: string; name: string }[]> {
    try {
      const response = await fetch(config.apiEndpoints.models, {
        method: 'GET',
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(\`Failed to fetch models: \${response.statusText}\`);
      }
      
      const data = await response.json();
      
      // Filter and format models
      return data.data
        .filter((model: any) => 
          model.id.includes('chat') || 
          model.id.includes('instruct')
        )
        .map((model: any) => ({
          id: model.id,
          name: model.display_name || model.name || model.id.split('/').pop()
        }));
    } catch (error) {
      console.error('Error fetching models:', error);
      // Return default models as fallback
      return config.availableModels;
    }
  }
  
  // Generate completion
  async generateCompletion(
    messages: ChatMessage[],
    options: CompletionOptions = {}
  ): Promise<CompletionResponse> {
    const {
      model = config.defaultModel,
      temperature = config.systemSettings.temperature,
      top_p = config.systemSettings.topP,
      max_tokens = config.systemSettings.maxTokens,
      stop = undefined
    } = options;
    
    try {
      const response = await fetch(config.apiEndpoints.together, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${this.apiKey}\`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model,
          messages,
          temperature,
          top_p,
          max_tokens,
          stop
        })
      });
      
      // Process response
      // ...
    } catch (error) {
      // Handle error and implement fallback
      // ...
    }
  }
}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="frontend-components">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Frontend Components
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI's frontend is built with React and Next.js, providing a responsive and interactive
                      user experience:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Core Components</h3>
                          <p className="text-sm text-muted-foreground mb-3">Key frontend components:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Chat interface with real-time updates</li>
                            <li>Conversation management sidebar</li>
                            <li>Settings and configuration panel</li>
                            <li>Insights and analytics dashboard</li>
                            <li>Responsive layout for all devices</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">State Management</h3>
                          <p className="text-sm text-muted-foreground mb-3">Frontend state management approach:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>React Context for global state</li>
                            <li>Custom hooks for reusable logic</li>
                            <li>Local storage for persistence</li>
                            <li>Optimistic updates for better UX</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">UI/UX Features</h3>
                        <p className="text-sm text-muted-foreground mb-4">Enhanced user experience features:</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Responsive Design</h4>
                            <p className="text-xs text-muted-foreground">
                              Fully responsive layout that adapts to all screen sizes from mobile to desktop.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Animations</h4>
                            <p className="text-xs text-muted-foreground">
                              Subtle animations and transitions for a more engaging and polished experience.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Accessibility</h4>
                            <p className="text-xs text-muted-foreground">
                              ARIA attributes, keyboard navigation, and screen reader support for all users.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Dark/Light Mode</h4>
                            <p className="text-xs text-muted-foreground">
                              Theme switching with system preference detection and persistent user choice.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Loading States</h4>
                            <p className="text-xs text-muted-foreground">
                              Thoughtful loading indicators and skeleton screens to reduce perceived wait times.
                            </p>
                          </div>

                          <div className="p-3 bg-secondary/50 rounded-lg">
                            <h4 className="text-sm font-medium mb-1">Error Handling</h4>
                            <p className="text-xs text-muted-foreground">
                              User-friendly error messages with recovery options and fallback content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="backend-services">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      Backend Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI's backend is built with Next.js API routes, providing serverless functions for all AI
                      operations:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">API Routes</h3>
                          <p className="text-sm text-muted-foreground mb-3">Key backend API endpoints:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>
                              <code>/api/chat</code> - Main chat completion endpoint
                            </li>
                            <li>
                              <code>/api/models</code> - Available models endpoint
                            </li>
                            <li>
                              <code>/api/test-api-key</code> - API key validation
                            </li>
                            <li>
                              <code>/api/completion</code> - Direct completion endpoint
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Middleware</h3>
                          <p className="text-sm text-muted-foreground mb-3">Backend middleware components:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>API key injection for authenticated requests</li>
                            <li>Error handling and standardization</li>
                            <li>Request validation and sanitization</li>
                            <li>Response formatting and compression</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Chat API Implementation</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Implementation of the main chat API endpoint:
                        </p>

                        <div className="overflow-x-auto">
                          <pre className="text-xs bg-secondary/50 p-3 rounded-lg overflow-x-auto">
                            <code>
                              {`// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { preprocessUserMessage } from "@/lib/message-processor";
import { getApiClient, ChatMessage } from "@/lib/api-client";
import { getMemoryManager } from "@/lib/memory-manager";
import config from "@/lib/config";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { message, conversationId, model, settings } = await req.json();
    
    // Get API client
    const apiClient = getApiClient();
    
    // Preprocess the user message with advanced NLP techniques
    const processedMessage = await preprocessUserMessage(message);
    
    // Prepare conversation history if available
    const messages: ChatMessage[] = [
      {
        role: "system",
        content: createSystemPrompt(settings),
      },
    ];
    
    // Add conversation history if provided
    if (settings?.conversationHistory && Array.isArray(settings.conversationHistory)) {
      messages.push(...settings.conversationHistory);
    }
    
    // Get memory manager
    const memoryManager = getMemoryManager();
    
    // Add relevant memories as context
    const relatedMemories = memoryManager.getRelatedMemories(processedMessage, 3);
    if (relatedMemories.length > 0) {
      messages.push({
        role: "system",
        content: \`Relevant context from previous conversations: \${relatedMemories.map(m => m.content).join(" | ")}\`,
      });
    }
    
    // Add the current user message
    messages.push({
      role: "user",
      content: processedMessage,
    });
    
    try {
      // Get response from API
      const result = await apiClient.generateCompletion(messages, {
        model: model || config.defaultModel,
        temperature: settings?.temperature || config.systemSettings.temperature,
        top_p: settings?.top_p || config.systemSettings.topP,
        max_tokens: settings?.maxTokens || config.systemSettings.maxTokens,
      });
      
      // Extract and analyze key concepts from the response
      const responseText = result.text;
      const metadata = {
        sentiment: analyzeSentiment(responseText),
        keyTopics: extractKeyTopics(responseText),
        responseType: classifyResponseType(responseText),
        confidenceLevel: estimateConfidenceLevel(responseText),
        entities: extractEntities(responseText),
        complexity: estimateComplexity(responseText),
        reasoningDepth: estimateReasoningDepth(responseText),
      };
      
      // Store in memory
      memoryManager.addEntry({
        id: \`user-\${Date.now()}\`,
        role: "user",
        content: message,
        timestamp: new Date(),
        metadata: {
          importance: 0.5,
        }
      });
      
      memoryManager.addEntry({
        id: \`assistant-\${Date.now()}\`,
        role: "assistant",
        content: responseText,
        timestamp: new Date(),
        metadata: {
          importance: 0.5,
          model: model || config.defaultModel,
          ...metadata
        }
      });
      
      return NextResponse.json({
        response: responseText,
        model: model || config.defaultModel,
        conversationId,
        metadata,
      });
    } catch (error) {
      console.error("API error:", error);
      throw error;
    }
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: \`Failed to process your request: \${error.message}\`,
        response: "I apologize, but I'm currently experiencing technical difficulties. Please try again later.",
      },
      { status: 500 }
    );
  }
}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div id="data-processing">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Data Processing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">
                      Sentient AI employs sophisticated data processing pipelines for message analysis and
                      understanding:
                    </p>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Message Preprocessing</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            Steps in the message preprocessing pipeline:
                          </p>
                          <ol className="text-xs text-muted-foreground space-y-1 pl-4 list-decimal">
                            <li>Text normalization and cleaning</li>
                            <li>Intent and query type identification</li>
                            <li>Entity extraction and classification</li>
                            <li>Topic identification and categorization</li>
                            <li>Sentiment analysis and emotion detection</li>
                            <li>Complexity assessment and metadata generation</li>
                          </ol>
                        </div>

                        <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                          <h3 className="text-lg font-medium mb-3">Response Analysis</h3>
                          <p className="text-sm text-muted-foreground mb-3">Analysis performed on AI responses:</p>
                          <ul className="text-xs text-muted-foreground space-y-1 pl-4 list-disc">
                            <li>Response type classification</li>
                            <li>Confidence level estimation</li>
                            <li>Reasoning depth assessment</li>
                            <li>Factual accuracy validation (when possible)</li>
                            <li>Metadata extraction for insights</li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg border border-primary/10">
                        <h3 className="text-lg font-medium mb-3">Text Analysis Implementation</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Implementation of the text analysis module:
                        </p>

                        <div className="overflow-x-auto">
                          <pre className="text-xs bg-secondary/50 p-3 rounded-lg overflow-x-auto">
                            <code>
                              {`// lib/text-analysis.ts
/**
 * Enhanced entity extraction function
 */
export function extractKeyEntities(text: string): string[] {
  const entities: string[] = [];

  // Expanded regex patterns for common entity types
  const patterns = [
    // Technology terms
    /\\b(blockchain|cryptocurrency|bitcoin|ethereum|AI|ML|neural network|deep learning|computer vision|NLP|RAG|DNL|transformer|GPT|BERT|LLM|CNN|RNN|LSTM|GAN)\\b/gi,
    // Organizations
    /\\b(Google|Microsoft|Apple|Amazon|Facebook|Meta|OpenAI|Anthropic|Tesla|IBM|Intel|NVIDIA|AMD|Samsung|Huawei|Baidu|Tencent|Alibaba)\\b/g,
    // Programming languages
    /\\b(JavaScript|Python|Java|C\\+\\+|Ruby|Go|Rust|TypeScript|PHP|Swift|Kotlin|Scala|R|Julia|Haskell|Perl|C#|Dart)\\b/g,
    // Frameworks and libraries
    /\\b(React|Angular|Vue|Next\\.js|Node\\.js|Django|Flask|TensorFlow|PyTorch|Keras|scikit-learn|pandas|NumPy|Matplotlib|Express|Spring|Laravel|Rails)\\b/g,
    // Cloud services
    /\\b(AWS|Azure|Google Cloud|GCP|Heroku|Vercel|Netlify|DigitalOcean|Cloudflare|Firebase|Supabase)\\b/g,
    // Database technologies
    /\\b(SQL|NoSQL|MongoDB|PostgreSQL|MySQL|SQLite|Redis|Cassandra|DynamoDB|Elasticsearch|Neo4j|GraphQL)\\b/g,
    // AI concepts
    /\\b(supervised learning|unsupervised learning|reinforcement learning|classification|regression|clustering|NLP|computer vision|neural network|deep learning|machine learning|artificial intelligence|generative AI|large language model|embedding|vector database|fine-tuning|transfer learning)\\b/gi,
  ];

  // Extract matches from each pattern
  patterns.forEach((pattern) => {
    const matches = text.match(pattern);
    if (matches) {
      entities.push(...matches);
    }
  });

  // Remove duplicates and return
  return [...new Set(entities.map((e) => e.toLowerCase()))];
}

/**
 * Analyzes the complexity of a text
 */
export function analyzeTextComplexity(text: string): { complexity: "simple" | "moderate" | "complex"; score: number } {
  // Count words
  const words = text.split(/\\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;

  // Count sentences
  const sentences = text.split(/[.!?]+/).filter((sentence) => sentence.trim().length > 0);
  const sentenceCount = sentences.length;

  // Calculate average words per sentence
  const avgWordsPerSentence = sentenceCount > 0 ? wordCount / sentenceCount : 0;

  // Count complex words (words with 3+ syllables)
  const complexWords = words.filter((word) => countSyllables(word) >= 3);
  const complexWordCount = complexWords.length;

  // Calculate complexity score (based on Flesch-Kincaid readability)
  const score = 0.39 * avgWordsPerSentence + 11.8 * (complexWordCount / wordCount) - 15.59;

  // Determine complexity level
  let complexity: "simple" | "moderate" | "complex";
  if (score < 30) {
    complexity = "simple";
  } else if (score < 50) {
    complexity = "moderate";
  } else {
    complexity = "complex";
  }

  return { complexity, score };
}`}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="p-8 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-xl border border-primary/20 text-center">
              <h2 className="text-2xl font-bold mb-4">Start Building with Sentient AI</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Explore the capabilities of Sentient AI's advanced neural architecture. Our comprehensive documentation
                provides everything you need to understand and leverage the system's full potential.
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
                <Link href="/insights">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                    Explore Insights
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

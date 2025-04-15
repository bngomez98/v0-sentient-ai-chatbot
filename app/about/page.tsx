import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Cpu, Network, Database, Zap, Code, Server, Globe, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 px-3 py-1">About</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                Sentient AI
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Advanced neural architecture for cognitive intelligence and contextual understanding
            </p>
          </div>

          <div className="space-y-10">
            {/* Overview Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                Overview
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Sentient AI is a cutting-edge cognitive intelligence system designed to provide human-like
                    reasoning, contextual understanding, and adaptive learning capabilities. Built on a foundation of
                    advanced neural architectures, Sentient AI goes beyond traditional language models by incorporating
                    multi-layered reasoning, knowledge retrieval, and pattern recognition.
                  </p>
                  <p>
                    Our system combines the latest advancements in natural language processing (NLP) and deep neural
                    learning (DNL) to deliver responses that demonstrate deep understanding, nuanced reasoning, and the
                    ability to generate insights that go beyond surface-level analysis.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Technical Architecture Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Cpu className="h-6 w-6 text-primary" />
                Technical Architecture
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <Network className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Advanced Pretraining</h3>
                          <p className="text-muted-foreground">
                            Sentient AI is built on a foundation model pretrained on 2.8M challenging questions across
                            diverse domains, enabling it to handle complex reasoning tasks with greater accuracy. Our
                            pretraining approach focuses on quality and diversity rather than just quantity, resulting
                            in steeper scaling of capabilities.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Knowledge Retrieval</h3>
                          <p className="text-muted-foreground">
                            Our system employs advanced Retrieval Augmented Generation (RAG) to access and integrate
                            relevant information dynamically. This allows Sentient AI to provide responses grounded in
                            accurate, up-to-date knowledge while maintaining the flexibility of generative AI.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Natural Language Processing</h3>
                          <p className="text-muted-foreground">
                            Sentient AI incorporates state-of-the-art NLP techniques including advanced entity
                            recognition, sentiment analysis, topic clustering, and contextual understanding. Our
                            preprocessing pipeline enhances the system's ability to comprehend nuanced queries and
                            generate coherent, relevant responses.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">Deep Neural Learning</h3>
                          <p className="text-muted-foreground">
                            Our DNL architecture enables multi-layered reasoning through specialized neural pathways
                            that process information in parallel. This allows Sentient AI to understand complex
                            relationships, identify patterns, and generate insights beyond simple pattern matching,
                            approaching problems with human-like reasoning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Capabilities Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Capabilities
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Cognitive Processing</h3>
                      <p className="text-muted-foreground">
                        Multi-layered neural reasoning that enables understanding of complex relationships, pattern
                        identification, and insight generation beyond simple pattern matching.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Adaptive Learning</h3>
                      <p className="text-muted-foreground">
                        Continuous evolution through interaction, refining understanding through a proprietary neural
                        adaptation system that identifies patterns in user interactions.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Semantic Understanding</h3>
                      <p className="text-muted-foreground">
                        Deep comprehension of language nuances, recognizing intent, sentiment, and contextual
                        implications to provide more relevant responses.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Insight Generation</h3>
                      <p className="text-muted-foreground">
                        Identification of connections between seemingly unrelated concepts, generating novel ideas and
                        perspectives that can lead to breakthrough solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resilient Architecture Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Server className="h-6 w-6 text-primary" />
                Resilient Architecture
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <p>
                      Sentient AI is designed with resilience at its core, ensuring continuous operation even when
                      external services are unavailable. Our multi-layered fallback system includes:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">API Redundancy</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Multiple model providers with automatic failover to ensure continuous service availability.
                        </p>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Local Embeddings</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          On-device vector embeddings for core functionality when cloud services are unavailable.
                        </p>
                      </div>

                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">Middleware Protection</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Intelligent request routing and caching to minimize dependency on external services.
                        </p>
                      </div>
                    </div>

                    <p>
                      Our architecture ensures that Sentient AI can continue to provide high-quality responses using
                      plain text output while maintaining advanced NLP and DNL capabilities, even in degraded
                      connectivity scenarios.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

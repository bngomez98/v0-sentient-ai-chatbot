import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, Brain, Code, Cpu, Network, Shield, Lightbulb } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <Header />

      {/* Hero Section with Neural Network Animation */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
        </div>

        <NeuralNetworkBackground />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col space-y-6">
              <Badge className="w-fit bg-primary/10 text-primary border-primary/20 px-3 py-1">
                Cognitive Intelligence Platform
              </Badge>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                  Sentient AI
                </span>
              </h1>

              <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                Experience a new paradigm in artificial intelligence with our cognitive neural architecture that
                understands context, recognizes patterns, and delivers insights with human-like reasoning.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/chat" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-1.5 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-500"
                  >
                    Start Conversation <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary/20 hover:bg-primary/10"
                  >
                    Login to Account
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/10 border border-background flex items-center justify-center"
                    >
                      <span className="text-xs text-primary font-medium">{i}K+</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Trusted by thousands of researchers and professionals</p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-primary/20 glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-500/5"></div>

              <BrainVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="w-full py-12 md:py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">Advanced Capabilities</Badge>
            <h2 className="text-3xl font-bold">Cognitive Intelligence Platform</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our neural architecture combines multiple specialized systems to deliver a truly intelligent experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cognitive Processing</CardTitle>
                <CardDescription>Multi-layered neural reasoning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our cognitive engine processes information through multiple parallel pathways, enabling it to
                  understand complex relationships, identify patterns, and generate insights beyond simple pattern
                  matching.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Network className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Adaptive Learning</CardTitle>
                <CardDescription>Continuous evolution through interaction</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sentient AI evolves with each conversation, refining its understanding through a proprietary neural
                  adaptation system that identifies patterns in user interactions and adjusts its knowledge
                  representation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Knowledge Retrieval</CardTitle>
                <CardDescription>Context-aware information access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our advanced RAG (Retrieval Augmented Generation) system dynamically accesses relevant information
                  based on conversation context, ensuring responses are both accurate and comprehensive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Semantic Understanding</CardTitle>
                <CardDescription>Deep comprehension of language nuances</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sentient AI goes beyond keywords to understand the semantic meaning behind user queries, recognizing
                  intent, sentiment, and contextual implications to provide more relevant responses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure Processing</CardTitle>
                <CardDescription>Enterprise-grade data protection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All conversations are processed with end-to-end encryption and advanced security protocols, with
                  optional local processing capabilities for sensitive information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm card-3d">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Insight Generation</CardTitle>
                <CardDescription>Discovering hidden connections</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our proprietary insight engine identifies connections between seemingly unrelated concepts, generating
                  novel ideas and perspectives that can lead to breakthrough solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-12 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-3 py-1">
                Neural Core Technology
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Advanced Neural Architecture</h2>
              <p className="text-muted-foreground mb-6">
                Sentient AI is built on our proprietary neural architecture that combines multiple specialized systems
                to deliver truly intelligent interactions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Cpu className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Transformer-Based Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Built on a state-of-the-art transformer architecture with billions of parameters, optimized for
                      contextual understanding and knowledge representation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Cpu className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Sentiment Analysis Engine</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time analysis of emotional context and user sentiment enables more empathetic and appropriate
                      responses tailored to the conversation tone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Cpu className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Dynamic Knowledge Retrieval</h3>
                    <p className="text-sm text-muted-foreground">
                      Our RAG system dynamically accesses and integrates relevant information from multiple sources to
                      provide comprehensive and accurate responses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Cpu className="h-3 w-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">Conversation Clustering</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically identifies related topics and themes across conversations, building a comprehensive
                      understanding of user interests and needs over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-primary/20 glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-violet-500/5"></div>

              <NeuralNetworkVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
              Experience Cognitive Intelligence
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience the Future of AI</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Join researchers, developers, and professionals already leveraging Sentient AI for breakthrough insights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/chat" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-1.5 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-500"
                >
                  Start Conversation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 hover:bg-primary/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Update the navItems array in the landing page to include pricing
const navItems = [
  { name: "Home", path: "/" },
  { name: "Chat", path: "/chat" },
  { name: "Insights", path: "/insights" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
]

// Neural Network Background Component
function NeuralNetworkBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="neural-net" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#neural-net)" />

        {/* Random connection lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <path
            key={i}
            d={`M${Math.random() * 100}%,${Math.random() * 100}% C${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}%`}
            stroke="currentColor"
            className="text-primary/30 connection-animate"
            fill="none"
            strokeWidth="0.5"
          />
        ))}
      </svg>
    </div>
  )
}

// Brain Visualization Component
function BrainVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[300px] h-[300px] animate-float">
        <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
        <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse [animation-delay:0.3s]"></div>
        <div className="absolute inset-8 rounded-full bg-primary/15 animate-pulse [animation-delay:0.6s]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Brain className="h-24 w-24 text-primary" />
        </div>

        {/* Orbiting particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const x = 150 + Math.cos(angle) * 120
          const y = 150 + Math.sin(angle) * 120
          return (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-primary/30"
              style={{
                left: x,
                top: y,
                animation: `orbit ${3 + (i % 2)}s linear infinite`,
                transformOrigin: "center center",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// Neural Network Visualization Component
function NeuralNetworkVisualization() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full p-8">
        {/* Input layer */}
        <div className="absolute left-10 inset-y-0 flex flex-col justify-around">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Hidden layer 1 */}
        <div className="absolute left-1/4 inset-y-0 flex flex-col justify-around">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse [animation-delay:0.1s]"></div>
            </div>
          ))}
        </div>

        {/* Hidden layer 2 */}
        <div className="absolute left-2/4 inset-y-0 flex flex-col justify-around">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse [animation-delay:0.2s]"></div>
            </div>
          ))}
        </div>

        {/* Hidden layer 3 */}
        <div className="absolute left-3/4 inset-y-0 flex flex-col justify-around">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse [animation-delay:0.3s]"></div>
            </div>
          ))}
        </div>

        {/* Output layer */}
        <div className="absolute right-10 inset-y-0 flex flex-col justify-around">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse [animation-delay:0.4s]"></div>
            </div>
          ))}
        </div>

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" fill="none" className="text-primary/30">
            {/* Generate connections between layers */}
            {Array.from({ length: 30 }).map((_, i) => {
              const startX = 50 + (i % 5) * 10
              const startY = 50 + Math.floor(i / 5) * 50
              const endX = 150 + (i % 8) * 5
              const endY = 30 + Math.floor(i / 4) * 60
              return (
                <path
                  key={`c1-${i}`}
                  d={`M${startX},${startY} ${endX},${endY}`}
                  strokeWidth="0.5"
                  className="connection-animate"
                />
              )
            })}

            {Array.from({ length: 24 }).map((_, i) => {
              const startX = 150 + (i % 8) * 5
              const startY = 30 + Math.floor(i / 4) * 60
              const endX = 250 + (i % 6) * 5
              const endY = 50 + Math.floor(i / 3) * 70
              return (
                <path
                  key={`c2-${i}`}
                  d={`M${startX},${startY} ${endX},${endY}`}
                  strokeWidth="0.5"
                  className="connection-animate"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              )
            })}

            {Array.from({ length: 18 }).map((_, i) => {
              const startX = 250 + (i % 6) * 5
              const startY = 50 + Math.floor(i / 3) * 70
              const endX = 350 + (i % 4) * 5
              const endY = 70 + Math.floor(i / 2) * 90
              return (
                <path
                  key={`c3-${i}`}
                  d={`M${startX},${startY} ${endX},${endY}`}
                  strokeWidth="0.5"
                  className="connection-animate"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              )
            })}
          </g>
        </svg>
      </div>
    </div>
  )
}

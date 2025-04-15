import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Brain, Zap, Shield, Sparkles } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20 px-3 py-1">Pricing</Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
                Unlock the Full Potential
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that best fits your needs and experience the power of advanced cognitive intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border-primary/20 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>Explorer</span>
                  <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                    Basic
                  </Badge>
                </CardTitle>
                <CardDescription>Perfect for getting started</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$9</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>Access to core neural capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>Up to 100 messages per day</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>Standard response time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>Basic knowledge retrieval</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-blue-500" />
                    <span>7-day conversation history</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-primary/20 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40 scale-105 shadow-lg">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-violet-500"></div>
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-primary/20 rounded-full"></div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>Innovator</CardTitle>
                  <Badge className="bg-primary/10 text-primary border-primary/20">Popular</Badge>
                </div>
                <CardDescription>For professionals and teams</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Advanced neural architecture access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited messages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Enhanced knowledge retrieval</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>30-day conversation history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom model selection</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90">
                  Upgrade Now
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-primary/20 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/40">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-800"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between">
                  <span>Visionary</span>
                  <Badge variant="outline" className="bg-violet-500/10 text-violet-500 border-violet-500/20">
                    Enterprise
                  </Badge>
                </CardTitle>
                <CardDescription>For organizations with advanced needs</CardDescription>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Full neural core capabilities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Unlimited everything</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Dedicated processing resources</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Advanced RAG with custom knowledge bases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Unlimited conversation history</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-violet-500" />
                    <span>Custom model fine-tuning</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-violet-500/20 text-violet-500 hover:bg-violet-500/10"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mt-20 space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Advanced Features Across All Plans</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the power of Sentient AI's cognitive intelligence with these core capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Neural Architecture</h3>
                <p className="text-muted-foreground">
                  Multi-layered reasoning capabilities that understand complex relationships and generate insights
                  beyond pattern matching.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Adaptive Learning</h3>
                <p className="text-muted-foreground">
                  Evolves with each conversation, refining understanding through neural adaptation that identifies
                  patterns in interactions.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Secure Processing</h3>
                <p className="text-muted-foreground">
                  End-to-end encryption and advanced security protocols with optional local processing for sensitive
                  information.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Insight Generation</h3>
                <p className="text-muted-foreground">
                  Identifies connections between seemingly unrelated concepts, generating novel ideas that lead to
                  breakthrough solutions.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about Sentient AI subscriptions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <h3 className="text-lg font-medium mb-2">How does billing work?</h3>
                <p className="text-muted-foreground">
                  Subscriptions are billed monthly or annually. You can upgrade, downgrade, or cancel your subscription
                  at any time from your account settings.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <h3 className="text-lg font-medium mb-2">Can I switch plans?</h3>
                <p className="text-muted-foreground">
                  Yes, you can switch between plans at any time. When upgrading, you'll be prorated for the remainder of
                  your billing cycle.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and for Enterprise plans, we also support invoicing and wire
                  transfers.
                </p>
              </div>

              <div className="p-6 bg-secondary/30 rounded-xl border border-primary/10">
                <h3 className="text-lg font-medium mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes, all plans come with a 7-day free trial. No credit card required to start exploring Sentient AI's
                  capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="p-8 bg-gradient-to-r from-primary/10 to-violet-500/10 rounded-xl border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Advanced Cognitive Intelligence?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Join thousands of researchers, developers, and professionals already leveraging Sentient AI for
                breakthrough insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-violet-500 hover:from-primary/90 hover:to-violet-500/90"
                  >
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

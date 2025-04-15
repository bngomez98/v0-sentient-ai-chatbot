import DatasetBrowser from "@/components/dataset-browser"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DatasetsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-6">Hugging Face Datasets</h1>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Browse and explore datasets from Hugging Face that can be used with Sentient AI. These datasets are available
          without additional input and can be referenced in your conversations.
        </p>

        <DatasetBrowser />
      </main>
      <Footer />
    </div>
  )
}

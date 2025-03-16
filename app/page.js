import { ArrowRight, Code, Github, Mail, Palette, Sparkles, Star, Twitter, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
   
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black">
    {/* Hero Section */}
    <header className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-100 opacity-50 blur-3xl filter dark:bg-cyan-900"></div>
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-amber-100 opacity-40 blur-3xl filter dark:bg-amber-900"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex items-center">
              <h1 className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
                Compose<span className="text-black dark:text-white">Flow</span>
              </h1>
              <div className="ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-amber-500 px-3 py-1 text-xs font-medium text-white">
                BETA
              </div>
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-300">
              Create stunning emails without the complexity. Free, open-source, and ready for your next campaign.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600"
              >
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-700">
                <Github className="mr-2 h-4 w-4" />
                Explore Code
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
              <span>Join our growing community of email creators</span>
            </div>
          </div>

          <div className="relative h-80 w-80 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-amber-500/20 blur-xl"></div>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="h-8 border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-full items-center gap-1.5 px-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="h-6 w-24 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-2 h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-2 h-4 w-4/6 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-4 h-24 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-4 h-8 w-32 rounded bg-gradient-to-r from-cyan-500 to-amber-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Main Headline */}
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Email Creation{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-transparent">
            Simplified
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          ComposeFlow transforms the way you build emails. Our intuitive editor makes it easy to create
          professional-looking emails that engage your audience and drive results.
        </p>
      </div>
    </section>

    {/* Features */}
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose ComposeFlow?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our platform combines powerful features with simplicity to give you the best email creation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Palette className="h-6 w-6 text-cyan-500" />,
              title: "Drag & Drop Editor",
              description: "Create beautiful emails with our intuitive drag and drop interface. No coding required.",
            },
            {
              icon: <Zap className="h-6 w-6 text-amber-500" />,
              title: "Lightning Fast",
              description: "Our editor is optimized for speed, so you can create emails quickly and efficiently.",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-cyan-500" />,
              title: "Responsive Design",
              description: "All emails created with ComposeFlow look great on any device, from desktop to mobile.",
            },
            {
              icon: <Code className="h-6 w-6 text-amber-500" />,
              title: "Open Source",
              description: "ComposeFlow is completely open source, so you can contribute and make it even better.",
            },
            {
              icon: <Mail className="h-6 w-6 text-cyan-500" />,
              title: "Template Library",
              description: "Get started quickly with our growing library of professionally designed templates.",
            },
            {
              icon: <Star className="h-6 w-6 text-amber-500" />,
              title: "Always Free",
              description:
                "ComposeFlow is and will always be free to use for everyone. No hidden fees or limitations.",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="overflow-hidden border-slate-200 bg-white p-6 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Component Showcase */}
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Building Blocks</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Mix and match these components to create the perfect email for your campaign.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {[
            "Headers",
            "Hero Sections",
            "Content Blocks",
            "Image Galleries",
            "Call to Actions",
            "Testimonials",
            "Product Cards",
            "Feature Lists",
            "Footers",
            "Social Media",
            "Buttons",
            "Dividers",
            "Spacers",
            "Text Blocks",
            "Columns",
          ].map((component, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-6 text-center font-medium transition-all hover:border-cyan-300 hover:bg-cyan-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-800 dark:hover:bg-cyan-900/20"
            >
              {component}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Community Section */}
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">Join Our Growing Community</h2>
        <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
          ComposeFlow is built by the community, for the community. We're just getting started and would love your
          support.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="outline"
            className="border-amber-200 bg-amber-50 text-slate-800 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-900/20 dark:text-slate-200 dark:hover:bg-amber-900/30"
          >
            <Star className="mr-2 h-4 w-4" />
            Star on GitHub
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600"
          >
            Start Creating
          </Button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-slate-200 bg-slate-50 py-8 dark:border-slate-800 dark:bg-black">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center">
            <h2 className="bg-gradient-to-r from-cyan-500 to-amber-500 bg-clip-text text-2xl font-bold text-transparent">
              Compose<span className="text-black dark:text-white">Flow</span>
            </h2>
            <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">© 2025</span>
          </div>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-slate-600 transition-colors hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>

  );
}

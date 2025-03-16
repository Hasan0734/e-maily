import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Github, Star } from 'lucide-react'

const Hero = () => {
  return (
    <header className="relative overflow-hidden border-b border-zinc-200 bg-white px-4 py-12 dark:border-zinc-800 dark:bg-zinc-950">
    <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-teal-100 opacity-50 blur-3xl filter dark:bg-teal-900"></div>
    <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-indigo-100 opacity-40 blur-3xl filter dark:bg-indigo-900"></div>

    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
              maily<span className="text-black dark:text-white">.to</span>
            </h1>
            <div className="ml-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 px-3 py-1 text-xs font-medium text-white">
              FREE
            </div>
          </div>

          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            Open-source editor for crafting beautiful emails. 100% free, forever.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
            >
              Open Editor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-300 dark:border-zinc-700">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
            <span>100% open-source and community-driven</span>
          </div>
        </div>

        <div className="relative h-80 w-80 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-xl"></div>
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="h-8 border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-full items-center gap-1.5 px-3">
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
              </div>
            </div>
            <div className="p-4">
              <div className="h-6 w-24 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mt-3 h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mt-2 h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mt-2 h-4 w-4/6 rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mt-4 h-24 w-full rounded bg-zinc-200 dark:bg-zinc-800"></div>
              <div className="mt-4 h-8 w-32 rounded bg-gradient-to-r from-teal-500 to-indigo-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Hero
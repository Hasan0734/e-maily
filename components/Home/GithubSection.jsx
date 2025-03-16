import React from 'react'
import { Button } from '../ui/button'
import { Star } from 'lucide-react'
import Link from 'next/link'

const GithubSection = () => {
  return (
    <section className="py-16">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-6 text-4xl font-bold">
        <span className="relative">
          <span className="relative z-10 line-through text-red-500">
            So Many
          </span>
        </span>{" "}
        Not Many Stars
      </h2>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-300">
        I just launched the project — thus, not many stars.
      </p>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-300">
        Please do{" "}
        <Link
          href="#"
          className="text-indigo-500 underline hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          leave a star on GitHub
        </Link>{" "}
        if you like the project. Also, I would love to hear from you if you
        have any feedback or suggestions.
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          size="lg"
          variant="outline"
          className="border-pink-200 bg-pink-50 text-zinc-800 hover:bg-pink-100 dark:border-pink-900 dark:bg-pink-900/20 dark:text-zinc-200 dark:hover:bg-pink-900/30"
        >
          <Star className="mr-2 h-4 w-4" />
          <span className="line-through">100k</span> GitHub Stars
        </Button>
        <Button
          size="lg"
          className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
        >
          Open Editor
        </Button>
      </div>
    </div>
  </section>
  )
}

export default GithubSection
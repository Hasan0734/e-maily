import React from 'react';
import { ArrowRight, Github, Star, Twitter } from "lucide-react"
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-black">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center">
          <h2 className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-2xl font-bold text-transparent">
            maily<span className="text-black dark:text-white">.to</span>
          </h2>
        </div>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-zinc-600 transition-colors hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="#"
            className="text-zinc-600 transition-colors hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
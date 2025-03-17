import { Github, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
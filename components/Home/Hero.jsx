import React from "react";
import { ArrowRight, Github, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
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
              Create stunning emails without the complexity. Free, open-source,
              and ready for your next campaign.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-amber-500 hover:from-cyan-600 hover:to-amber-600"
                asChild
              >
                <Link href={'/playground'}>
                
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 dark:border-slate-700"
              >
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
  );
};

export default Hero;

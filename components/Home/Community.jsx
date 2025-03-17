import React from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Community = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold">Join Our Growing Community</h2>
        <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
          ComposeFlow is built by the community, for the community. We're just
          getting started and would love your support.
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
  );
};

export default Community;

import React from "react";

const Component = () => {

    const data = [
        "Logo",
        "Buttons and Variants",
        "Variables",
        "Text Formatting",
        "Image",
        "Alignment",
        "Divider",
        "Spacer",
        "Footer",
        "List",
        "Quote",
        "Code",
        "Section",
        "Columns",
        "Repeat",
      ]
    const socials  =["Show", "Social", "Video", "Table", "Countdown"]

  return (
    <section className="border-y border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Pre-Designed Components</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Here is a list of pre-designed components that you can use to build
            your emails. We are adding more components as we speak.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((com, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-6 text-center font-medium transition-all hover:border-teal-300 hover:bg-teal-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-teal-800 dark:hover:bg-teal-900/20"
            >
              {com}
            </div>
          ))}
          {socials.map(
            (so, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-6 text-center font-medium opacity-60 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="mr-2 rounded bg-zinc-200 px-1.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                  SOON
                </span>
                {so}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Component;

import React from "react";

const ComponentShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Building Blocks</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Mix and match these components to create the perfect email for your
            campaign.
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
  );
};

export default ComponentShowcase;

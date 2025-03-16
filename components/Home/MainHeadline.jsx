import React from "react";

const MainHeadline = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
          Designing Emails is{" "}
          <span className="relative">
            <span className="relative z-10 line-through text-red-500">
              Hard
            </span>
          </span>{" "}
          <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
            Easy
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Maily is a free and open-source editor that makes it hassle-free to
          craft beautiful emails. It comes with a set of pre-built components
          that you can use to build your emails.
        </p>
      </div>
    </section>
  );
};

export default MainHeadline;

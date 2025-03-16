import React from "react";

const Description = () => {
  return (
    <section className="border-b-8 border-b-black">
      <div className="max-w-5xl mx-auto px-4 md:px-0 py-16 space-y-10">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Designing Emails is{" "}
            <span className="text-red-500 line-through">Hard</span> Easy
          </h1>

          <p className="text-3xl leading-[55px]">
            Maily is a free and{" "}
            <span className="bg-gray-200 px-2 py-1 rounded-md">
              open-source editor
            </span>{" "}
            that makes it hassle-free to craft{" "}
            <span className="bg-gray-200 px-2 py-1 rounded-md">
              beautiful emails
            </span>{" "}
            . It comes with a set of{" "}
            <span className="bg-gray-200 px-2 py-1 rounded-md">
              pre-built components
            </span>{" "}
            and{" "}
            <span className="bg-gray-200 px-2 py-1 rounded-md">
              opinionated design
            </span>
            that you can use to build your emails.
          </p>
        </div>
        <div className="space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Pre-Designed Components
          </h1>
          <p className="text-3xl leading-[55px]">
            Here is a list of pre-designed components that you can use to build
            your emails. We are adding more components as we speak.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;

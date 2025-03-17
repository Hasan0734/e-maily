import React from "react";
import { Code, Mail, Palette, Sparkles, Star, Zap } from "lucide-react";
import { Card } from "../ui/card";

const Features = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Why Choose ComposeFlow?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our platform combines powerful features with simplicity to give you
            the best email creation experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Palette className="h-6 w-6 text-cyan-500" />,
              title: "Drag & Drop Editor",
              description:
                "Create beautiful emails with our intuitive drag and drop interface. No coding required.",
            },
            {
              icon: <Zap className="h-6 w-6 text-amber-500" />,
              title: "Lightning Fast",
              description:
                "Our editor is optimized for speed, so you can create emails quickly and efficiently.",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-cyan-500" />,
              title: "Responsive Design",
              description:
                "All emails created with ComposeFlow look great on any device, from desktop to mobile.",
            },
            {
              icon: <Code className="h-6 w-6 text-amber-500" />,
              title: "Open Source",
              description:
                "ComposeFlow is completely open source, so you can contribute and make it even better.",
            },
            {
              icon: <Mail className="h-6 w-6 text-cyan-500" />,
              title: "Template Library",
              description:
                "Get started quickly with our growing library of professionally designed templates.",
            },
            {
              icon: <Star className="h-6 w-6 text-amber-500" />,
              title: "Always Free",
              description:
                "ComposeFlow is and will always be free to use for everyone. No hidden fees or limitations.",
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="overflow-hidden border-slate-200 bg-white p-6 transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

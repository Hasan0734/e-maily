import React from "react";
import Hero from "./Hero";
import MainHeadline from "./MainHeadline";
import Component from "./Component";
import GithubSection from "./GithubSection";
import Footer from "./Footer";

const Home1 = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <Hero />
      <MainHeadline />
      <Component />
      <GithubSection />
      <Footer />
    </div>
  );
};

export default Home1;

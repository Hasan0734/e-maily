import { Github, LucideGithub, PenIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="max-w-5xl mx-auto px-4 sm:px-0 py-16">
      <div className="space-y-4">
        <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-black">
          email.to
        </h1>
        <p className="text-xl sm:text-3xl">
          Open-source editor for crafting emails.
        </p>
        <Button size={'lg'} className={'text-xl font-bold py-6 flex items-center gap-2 hover:bg-green-500 hover:text-white'}>
          <PenIcon className="size-8" /> Open Editor
        </Button>

        <Button size={'lg'} variant={'outline'} className={'text-xl font-bold py-6 flex items-center gap-2 hover:bg-green-500 hover:text-white'}>
          <LucideGithub /> Open Editor
        </Button>
      </div>
      <div></div>
    </header>
  );
};

export default Header;

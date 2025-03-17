import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, Copy, Eye, Save, Send, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ApiFrom from "./ApiFrom";
import { ThemeToggle } from "../theme-toggle";
import { SidebarTrigger } from "../ui/sidebar";

const TopBar = ({ copied, copyHTML }) => {
  return (
    <div className="flex h-14 items-center justify-between bg-sidebar text-sidebar-foreground border-b border-slate-200  px-4 dark:border-slate-800 ">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        {/* md:hidden lg:block */}
        <div className="hidden xs:block  text-sm font-medium text-slate-500 dark:text-slate-400">
          <span className="text-slate-700 dark:text-slate-300">
            Hello World
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Popover>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <PopoverContent className="w-80">
            <ApiFrom />
          </PopoverContent>
        </Popover>

        {/* <Button variant="outline" size="sm" className="gap-2">
          <Eye className="h-4 w-4" />
          <span className="hidden md:block">Preview Email</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={copyHTML}
        >
          {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="hidden md:block">
            {copied ? "Copied!" : "Copy HTML"}
          </span>
        </Button> */}

        <Button variant="outline" size="sm" className="gap-2">
          <Send className="h-4 w-4" />
          <span className="hidden md:block">Send Email</span>
        </Button>

        <Button size="sm" className="gap-2 bg-cyan-500 hover:bg-cyan-600">
          <Save className="h-4 w-4" />
          <span className="hidden md:block"> Save</span>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopBar;

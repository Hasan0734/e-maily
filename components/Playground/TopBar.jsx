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


const TopBar = ({ copied, copyHTML }) => {
  return (
    <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950">
      <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
       
        <span className="text-slate-700 dark:text-slate-300">Hello World</span>
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
           <ApiFrom/>
          </PopoverContent>
        </Popover>


        <Button variant="outline" size="sm" className="gap-2">
          <Eye className="h-4 w-4" />
          Preview Email
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
          {copied ? "Copied!" : "Copy HTML"}
        </Button>

        <Button variant="outline" size="sm" className="gap-2">
          <Send className="h-4 w-4" />
          Send Email
        </Button>

        <Button size="sm" className="gap-2 bg-cyan-500 hover:bg-cyan-600">
          <Save className="h-4 w-4" />
          Save
        </Button>
      </div>
    </div>
  );
};

export default TopBar;


import React from "react";
import Design from "./Design";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "./TopBar";
import CodeTab from "./CodeTab";
import Preview from "./Preview";

const EditorArea = () => {
  const [copied, setCopied] = useState(false);

  const copyHTML = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-1 flex-col">
      <TopBar copied={copied} copyHTML={copyHTML} />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-auto p-6">
          <Tabs defaultValue="design" className="w-full">
            <div className="mb-6 flex items-center justify-between">
              <TabsList className="grid w-[400px] grid-cols-3">
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>

            <Design />
            <CodeTab copied={copied} copyHTM={copyHTML}/>
            <Preview/>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditorArea;

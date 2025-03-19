import React, { act } from "react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "./TopBar";
import CodeTab from "./CodeTab";
import Preview from "./Preview";
// import TempEditor from "./TempEditor";
import { Card } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrushIcon, CodeIcon, EyeIcon } from "lucide-react";
import dynamic from "next/dynamic";

export const TempEditor = dynamic(() => import("./TempEditor"), { ssr: false });



const EditorArea = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
  const [template, setTemplate] = useState({})


  const copyHTML = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="flex flex-1 flex-col">
      <TopBar copied={copied} copyHTML={copyHTML} />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-auto px-4 sm:p-6">
          <Tabs defaultValue="design" className="w-full">
            <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700 mb-6">
              <h2 className="mb-4 text-lg font-medium">Email Details</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="subject">
                    Subject <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Email Subject"
                    defaultValue="Discover Maily"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="from">From</Label>
                  <Input id="from" placeholder="hello@componseFlow" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="to">
                    To <span className="text-red-500">*</span>
                  </Label>
                  <Input id="to" placeholder="Email Recipient(s)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply-to">Reply-To</Label>
                  <Input id="reply-to" placeholder="Reply-To Email" />
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700">
   
              <div className="flex items-center justify-between">
                <TabsList className="grid w-[400px] grid-cols-3">
                  <TabsTrigger value="design" onClick={() => setActiveTab('design')}>
                    <BrushIcon /> Design
                  </TabsTrigger>
                  <TabsTrigger value="code" onClick={() => setActiveTab('code')}>
                    <CodeIcon /> HTML
                  </TabsTrigger>
                  <TabsTrigger value="preview" onClick={() => setActiveTab('preview')}>
                    <EyeIcon /> Preview
                  </TabsTrigger>
                </TabsList>
              </div>

              <Card>
                <TempEditor setTemplate={setTemplate} template={template} activeTab={activeTab} />
                <CodeTab copied={copied} copyHTML={copyHTML} />
                <Preview template={template} />
              </Card>
            </Card>

          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditorArea;

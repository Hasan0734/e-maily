import React, { useEffect } from "react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TopBar from "./TopBar";
import CodeTab from "./CodeTab";
import Preview from "./Preview";
import { Card } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrushIcon, CodeIcon, EyeIcon, Save } from "lucide-react";
import { Editor } from "../editor/DynamicEditor";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { cn, loadFromStorage, saveToStorage } from "@/lib/utils";
import { toast } from "sonner";

const EditorArea = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("design");
  const [template, setTemplate] = useState(null);

  const copyHTML = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    loadFromStorage("editorContent").then((content) => {
      setTemplate(content);
    });
  }, []);

  const saveDocument = () => {
    if (!template) {
      toast.error("You are nothing to type");
      return;
    }

    saveToStorage("editorContent", template).then(() => {
      toast.success("Template saved");
    });
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
                  <TabsTrigger
                    value="design"
                    onClick={() => setActiveTab("design")}
                  >
                    <BrushIcon /> Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    onClick={() => setActiveTab("code")}
                  >
                    <CodeIcon /> HTML
                  </TabsTrigger>
                  <TabsTrigger
                    value="preview"
                    onClick={() => setActiveTab("preview")}
                  >
                    <EyeIcon /> Preview
                  </TabsTrigger>
                </TabsList>

                <Button onClick={saveDocument}>
                  <Save className="h-4 w-4" />
                  Save
                </Button>
              </div>
              <Separator />

              <div className="max-w-2xl mx-auto w-full">
                <TabsContent value="design">
                  <Card>
                    {/* <Tiptap /> */}
                    <Editor setTemplate={setTemplate} template={template} />
                  </Card>
                </TabsContent>
                <Card className={"py-0 overflow-hidden"}>
                  <CodeTab copied={copied} copyHTML={copyHTML} />
                  <Preview template={template} />
                </Card>
              </div>
            </Card>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default EditorArea;

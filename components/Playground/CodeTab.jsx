import { Check, Code, Copy } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { htmlTemplate } from "@/data/template";
import Editor from "@monaco-editor/react";

const CodeTab = ({ copyHTML, copied }) => {

  const editorRef = useRef(null)

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor
  }

  return (
    <TabsContent value="code">
      <Card className="overflow-hidden border-slate-200 dark:border-slate-700">
        <div className="px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
          <div className="flex items-center gap-2 text-lg font-medium">
            <Code className="h-5 w-5 text-slate-500" />
            <span className="">HTML Code</span>
          </div>

          <Button variant="ghost" size="sm" onClick={copyHTML}>
            {copied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <div className="px-6">
          <Editor
          className="rounded-md"
            height="70vh"
            defaultLanguage="html"
            defaultValue={htmlTemplate}
            theme="vs-dark"
            onChange={(value) => setCode(value)}
            onMount={handleEditorDidMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              formatOnPaste: true,
              formatOnType: true,
            }}
          />
        </div>
      </Card>
    </TabsContent>
  );
};

export default CodeTab;

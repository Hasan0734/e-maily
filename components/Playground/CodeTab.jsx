import { Check, Code, Copy } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { htmlTemplate } from "@/data/template";
import Editor from "@monaco-editor/react";

const CodeTab = ({ copyHTML, copied }) => {
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  return (
    <TabsContent value="code">
      <div className="px-3 sm:px-6 flex items-center justify-end border-b border-slate-200 dark:border-slate-700 pb-4 mb-3">
        <Button variant="outline" size="sm" onClick={copyHTML}>
          {copied ? (
            <Check className=" h-4 w-4" />
          ) : (
            <Copy className=" h-4 w-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <div className="px-3 sm:px-6">
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
    </TabsContent>
  );
};

export default CodeTab;

import { Check, Code, Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { htmlTemplate } from "@/data/template";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml"; // Import XML (HTML) highlighting
import "highlight.js/styles/atom-one-dark.css"; // Import theme
import { html as beautifyHtml } from "js-beautify"; // Import js-beautify


hljs.registerLanguage("xml", xml);

const CodeTab = ({ copyHTML, copied, html }) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    // Highlight code after rendering
    if (html) {

      const prettyHtml = beautifyHtml(html, {
        indent_size: 2, // 2 spaces for indentation
        wrap_line_length: 80, // Wrap long lines
        preserve_newlines: true, // Keep newlines
      });

      const formattedCode = hljs.highlight(prettyHtml, {
        language: "xml",
      }).value;
      setHighlightedCode(formattedCode);
    }
  }, [html]); // Re-run when template updates


  console.log(highlightedCode)
  return (
    <TabsContent value="code">
      <div className="relative">
        <pre className="theme-atom-one-dark shadow-3xl text-sm   max-w-full tab-size h-full max-h-[600px] min-h-96 overflow-y-scroll group"
        >
          <span className="hljs xml mb-0 p-4 block overflow-auto min-h-96">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </span>


          <div className="absolute top-1 right-2 uppercase font-bold text-xs rounded-bl-md px-2 py-1">
            <Button
              variant="secondary"
              size="sm"
              onClick={copyHTML}
              className={"bg-gray-100/20"}
            >
              {copied ? (
                <Check className=" h-4 w-4" />
              ) : (
                <Copy className=" h-4 w-4" />
              )}
              <span className="sr-only"> {copied ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </pre>
      </div>
    </TabsContent>
  );
};

export default CodeTab;

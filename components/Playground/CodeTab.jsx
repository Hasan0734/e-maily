import { Check, Code, Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { htmlTemplate } from "@/data/template";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml"; // Import XML (HTML) highlighting
import "highlight.js/styles/atom-one-dark.css"; // Import theme

hljs.registerLanguage("xml", xml);

const CodeTab = ({ copyHTML, copied }) => {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    // Highlight code after rendering
    if (htmlTemplate) {
      const formattedCode = hljs.highlight(htmlTemplate, {
        language: "xml",
      }).value;
      setHighlightedCode(formattedCode);
    }
  }, [htmlTemplate]); // Re-run when template updates

  return (
    <TabsContent value="code">
      <div className="relative">
        <pre class="theme-atom-one-dark shadow-3xl text-sm   max-w-full tab-size h-full max-h-[600px] overflow-scroll group">
          <span class="hljs xml mb-0 p-4 block min-h-full overflow-auto">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </span>

          {/* <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300  right-2 top-2"></div> */}

          <div class="absolute top-1 right-2 uppercase font-bold text-xs rounded-bl-md px-2 py-1">
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

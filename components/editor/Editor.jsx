"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect, useMemo } from "react";
import { BlockNoteEditor } from "@blocknote/core";



export default function Editor({ template, setTemplate }) {
  const { resolvedTheme } = useTheme();


  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    tables: {
      splitCells: true,
      cellBackgroundColor: true,
      cellTextColor: true,
      headers: true,
    },

    initialContent: template,
  });


  // Renders the editor instance using a React component.
  return (
    <div className="min-h-96">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "light" ? "light" : "dark"}
        onChange={() => {
          setTemplate(editor.document);
        }}
      ></BlockNoteView>
    </div>
  );
}

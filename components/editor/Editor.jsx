"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import {
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
} from "@blocknote/react";

import { filterSuggestionItems } from "@blocknote/core";

export default function Editor({ onChangeTemplate, editor, insertAlert }) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="min-h-96">
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "light" ? "light" : "dark"}
        onChange={() => onChangeTemplate(editor)}
      >
        {/* Replaces the default Slash Menu. */}
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>
            filterSuggestionItems(
              [...getDefaultReactSlashMenuItems(editor), insertAlert(editor)],
              query
            )
          }
        />
      </BlockNoteView>
    </div>
  );
}

"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";

import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useTheme } from "next-themes";
import { getDefaultReactSlashMenuItems, SuggestionMenuController, useCreateBlockNote } from "@blocknote/react";
import { useEffect, useMemo } from "react";
import {
  BlockNoteEditor,
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
} from "@blocknote/core";
import { RiAlertFill } from "react-icons/ri";
import { Alert } from "./blocks/alert";

const schema = BlockNoteSchema.create({
  blockSpecs: {
    // Adds all default blocks.
    ...defaultBlockSpecs,
    // Adds the Alert block.
    alert: Alert,
  },
});

// Slash menu item to insert an Alert block
const insertAlert = (editor) => ({
  title: "Alert",
  onItemClick: () => {
    insertOrUpdateBlock(editor, {
      type: "alert",
    });
  },
  aliases: [
    "alert",
    "notification",
    "emphasize",
    "warning",
    "error",
    "info",
    "success",
  ],
  group: "Components",
  icon: <RiAlertFill />,
});

export default function Editor({ template, onChangeTemplate }) {
  const { resolvedTheme } = useTheme();

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    schema,
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
        onChange={() => onChangeTemplate(editor)}
      >
        {/* Replaces the default Slash Menu. */}
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) =>
            // Gets all default slash menu items and `insertAlert` item.
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

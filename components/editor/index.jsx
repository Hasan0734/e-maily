import React from "react";
import { DEFAULT_PLACEHOLDER_URL, TempProvider } from "./provider";
import { DEFAULT_SLASH_COMMANDS } from "./extensions/slash-command/default-slash-command";
import { cn } from "@/lib/utils";
import { useEditor } from "@tiptap/react";

const Editor = (props) => {
  const {
    config: {
      wrapClassName = "",
      contentClassName = "",
      bodyClassName = "",
      hasMenuBar = true,
      spellCheck = false,
      autofocus = "end",
      immediatelyRender = false,
    },
    onCreate,
    onUpdate,
    extensions,
    contentHtml,
    contentJson,
    blocks = DEFAULT_SLASH_COMMANDS,
    editable = true,
    placeholderUrl = DEFAULT_PLACEHOLDER_URL,
  } = props;

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: cn(`prose w-full`, contentClassName),
        spellCheck: spellCheck ? "true" : "false",
      },
    },
    immediatelyRender,
    onCreate: ({ editor }) => {
      onCreate?.(editor);
    },
    onUpdate: ({ editor }) => {
      onUpdate?.(editor);
    },
    extensions: defaultExte
  });

  return (
    <TempProvider placeholderUrl={placeholderUrl}>
      <div className={cn("antialiased", editor)}></div>
    </TempProvider>
  );
};

export default Editor;

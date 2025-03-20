"use client";

import { EditorBubble, EditorCommand, EditorCommandEmpty, EditorCommandItem, EditorCommandList, EditorContent, EditorRoot } from "novel";
import { useState } from "react";
import { defaultExtensions } from "./extensions";
import { NodeSelector } from "./selector/node-selector";
import { LinkSelector } from "./selector/link-selector";
import { TextButtons } from "./selector/text-buttons";
import { ColorSelector } from "./selector/color-selector";
import { slashCommand, suggestionItems } from "./slash-command";
import EditorMenu from "./editor-menu";
import { Separator } from "../ui/separator";
import { MathSelector } from "./selector/math-selector";

const extensions = [...defaultExtensions, slashCommand];

const Editor = () => {
  const [content, setContent] = useState(null);
  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  return (
    <EditorRoot>
      <EditorContent

         className='min-h-96 rounded-xl border p-4'
        extensions={extensions}
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}

        editorProps={{
          handleDOMEvents: {
            keydown: (_view, event) => handleCommandNavigation(event)
          },
          handlePaste: (view, event) =>
            handleImagePaste(view, event, uploadFn),
          handleDrop: (view, event, _slice, moved) =>
            handleImageDrop(view, event, moved, uploadFn),
          attributes: {
            class:
              'prose dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full'
          }
        }}
      >
        <EditorBubble
          tippyOptions={{
            placement: "top",
          }}
          className="flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl"
        >
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <TextButtons />
          <ColorSelector open={openColor} onOpenChange={setOpenColor} />
        </EditorBubble>

        <EditorCommand className="z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
          <EditorCommandEmpty className="px-2 text-muted-foreground">
            No results
          </EditorCommandEmpty>
          <EditorCommandList>
            {suggestionItems.map((item) => (
              <EditorCommandItem
                value={item.title}
                onCommand={(val) => item.command(val)}
                className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                key={item.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </EditorCommandItem>
            ))}
          </EditorCommandList>
        </EditorCommand>


        <EditorMenu open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation='vertical' />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />

            <Separator orientation='vertical' />
            <LinkSelector open={openLink} onOpenChange={setOpenLink} />

            <Separator orientation='vertical' />
            <MathSelector />

            <Separator orientation='vertical' />
            <TextButtons />

            <Separator orientation='vertical' />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </EditorMenu>
      </EditorContent>
    </EditorRoot>
  );
};
export default Editor;

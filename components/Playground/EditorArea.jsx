import React, { useEffect } from "react";
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import TopBar from "./TopBar";
import { Card } from "../ui/card";
import { Editor } from "../editor/DynamicEditor";
import { Separator } from "../ui/separator";
import { loadFromStorage, saveToStorage } from "@/lib/utils";
import { toast } from "sonner";
import { useCreateBlockNote } from "@blocknote/react";
import {
  BlockNoteSchema,
  defaultBlockSpecs,
  insertOrUpdateBlock,
} from "@blocknote/core";
import { RiAlertFill } from "react-icons/ri";
import { Alert } from "../editor/blocks/alert";
import TabArea from "./TabArea";
import EmailForm from "../forms/EmailForm";
import CodeTab from "./CodeTab";

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

const EditorArea = () => {
  const [copied, setCopied] = useState(false);
  // const [activeTab, setActiveTab] = useState("design");
  const [template, setTemplate] = useState(null);
  const [html, setHTML] = useState("");

  const copyHTML = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  useEffect(() => {
    loadFromStorage("editorContent").then((content) => {
      setTemplate(content);
      onHTML(content);
    });
  }, []);

  const onHTML = async (content) => {
    const html = await editor.blocksToHTMLLossy(content);
    setHTML(html);
  };

  const saveDocument = () => {
    if (!template) {
      toast.error("You are nothing to type");
      return;
    }

    saveToStorage("editorContent", template).then(() => {
      toast.success("Template saved");
    });
  };

  const onChangeTemplate = async (ed) => {
    setTemplate(ed.document);
    onHTML(ed.document);
  };

  return (
    <div className="flex flex-1 flex-col">
      <TopBar copied={copied} copyHTML={copyHTML} />

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-auto px-4 sm:p-6">
          <Tabs defaultValue="design" className="w-full">
            <EmailForm />

            <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700">
              <TabArea saveDocument={saveDocument} />
              <Separator />

              <div className="max-w-2xl mx-auto w-full">
                <TabsContent value="design">
                  <Card>
                    <Editor
                      editor={editor}
                      setHTML={setHTML}
                      onChangeTemplate={onChangeTemplate}
                      template={template}
                      insertAlert={insertAlert}
                    />
                  </Card>
                </TabsContent>

                <Card className={"py-0 overflow-hidden"}>
                  <CodeTab copied={copied} copyHTML={copyHTML} html={html} />
                  {/* <Preview template={html} /> */}
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

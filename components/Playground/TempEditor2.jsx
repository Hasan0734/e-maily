"use client";

import React, { useState } from "react";
import { EditorContent, EditorRoot } from "novel";
import { TabsContent } from "../ui/tabs";
import Editor from "../editor";

const TempEditor2 = () => {
  const [content, setContent] = useState(null);

  return (
    <TabsContent value="design" className="">
      {/* <EditorRoot>
      <EditorContent
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot> */}
      <Editor />
    </TabsContent>
  );
};

export default TempEditor2;

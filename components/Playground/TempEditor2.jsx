"use client";

import React, { useState } from "react";
// import { EditorContent, EditorRoot } from "novel";
import { TabsContent } from "../ui/tabs";
// import Editor from "../editor";
import NovelEditor from "../editor/NovelEditor";

const TempEditor2 = () => {
  const [content, setContent] = useState(initialContent);

  return (
    <TabsContent value="design" className="">
     
      {/* <Editor /> */}

      <NovelEditor
        content={content}
        setContent={setContent}
        title="Product Content"
      />
    </TabsContent>
  );
};

export default TempEditor2;

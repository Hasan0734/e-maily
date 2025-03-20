"use client";

import React, { useState } from "react";
import { EditorContent, EditorRoot } from "novel";
import { TabsContent } from "../ui/tabs";
import Editor from "../editor";

const TempEditor2 = () => {


  return (
    <TabsContent value="design" className="">
     
      <Editor />
    </TabsContent>
  );
};

export default TempEditor2;

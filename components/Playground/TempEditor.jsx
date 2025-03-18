import { TabsContent } from "@radix-ui/react-tabs";
import React, { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import EmailEditor from "react-email-editor";
import { Button } from "../ui/button";
import sample from "./sample.json";

const TempEditor = ({ activeTab, setTemplate }) => {
  const emailEditorRef = useRef(null);



  // const togglePreview = () => {
  //   const unlayer = emailEditorRef.current?.editor;

  //   if (preview) {
  //     unlayer?.hidePreview();
  //     setPreview(false);
  //   } else {
  //     unlayer?.showPreview('desktop');
  //     setPreview(true);
  //   }
  // };

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setTemplate(html);
    });
  };

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setTemplate(html);
    });
  };

  const onReady = (unlayer) => {};

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.loadDesign(sample);
  };

  return (
    <TabsContent value="design" className="">
      <div className="pl-10">
        <Button onClick={saveDesign}>Save</Button>
      </div>

      <EmailEditor
        id="editor-container"
        ref={emailEditorRef}
        onReady={onReady}
        onLoad={onLoad}
      />
    </TabsContent>
  );
};

export default TempEditor;

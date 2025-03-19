import { TabsContent } from "@radix-ui/react-tabs";
import React, { useEffect, useRef } from "react";
import { Card } from "../ui/card";
import EmailEditor from "react-email-editor";
import { Button } from "../ui/button";
import sample from "./sample.json";
import { Reader } from '@usewaypoint/email-builder';


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
      console.log(data)
      const blob = new Blob([data.html], { type: "text/html" });
      const blobUrl = URL.createObjectURL(blob);
     
    });


  };

  const onReady = (unlayer) => {};

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.loadDesign(sample);
  };
  const CONFIGURATION = {
    root: {
      type: 'EmailLayout',
      data: {
        backdropColor: '#F8F8F8',
        canvasColor: '#FFFFFF',
        textColor: '#242424',
        fontFamily: 'MODERN_SANS',
        childrenIds: ['block-1709578146127'],
      },
    },
    'block-1709578146127': {
      type: 'Text',
      data: {
        style: {
          fontWeight: 'normal',
          padding: {
            top: 16,
            bottom: 16,
            right: 24,
            left: 24,
          },
        },
        props: {
          text: 'Hello world',
        },
      },
    },
  };

  return (
    <TabsContent value="design" className="">
      <div className="pl-10">
        <Button onClick={saveDesign}>Save</Button>
      </div>

     <Reader document={CONFIGURATION} rootBlockId="root" />;
      {/* <EmailEditor
        id="editor-container"
        ref={emailEditorRef}
        onReady={onReady}
        onLoad={onLoad}
      /> */}
    </TabsContent>
  );
};

export default TempEditor;

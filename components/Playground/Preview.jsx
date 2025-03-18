import React, { useRef } from "react";
import { TabsContent } from "../ui/tabs";
import { Card } from "../ui/card";
import { ArrowRight, Eye, Image, Mail } from "lucide-react";
import { Button } from "../ui/button";
import EmailEditor from "react-email-editor";

const Preview = ({template}) => {
  const emailEditorRef = useRef(null);

  console.log(template);
  const onReady = (unlayer) => {
  };

  const onLoad = (unlayer) => {
    console.log("onLoad", unlayer);
    unlayer.loadDesign(template);
    unlayer?.showPreview("desktop");

  };

  return (
    <TabsContent value="preview">
      {/* <EmailEditor
        id="editor-container"
        ref={emailEditorRef}
        onReady={onReady}
        onLoad={onLoad}
      /> */}


     
    </TabsContent>
  );
};

export default Preview;

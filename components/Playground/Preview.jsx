import React from "react";
import { TabsContent } from "../ui/tabs";

const Preview = ({ template }) => {
  return (
    <TabsContent value="preview">
      {/* <EmailEditor
        id="editor-container"
        ref={emailEditorRef}
        onReady={onReady}
        onLoad={onLoad}
      /> */}

      {template && (
        <div
          dangerouslySetInnerHTML={{ __html: template }}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginTop: "20px",
          }}
        />
      )}
    </TabsContent>
  );
};

export default Preview;

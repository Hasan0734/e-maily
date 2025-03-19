"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import { AnyButton } from "editorjs-button";
import { TabsContent } from "../ui/tabs";
import dynamic from "next/dynamic";
import Paragraph from "@editorjs/paragraph";

// const EditorJS = dynamic(() => import('@editorjs/editorjs').then(mod => mod.Steps), {
//   ssr: false
// });

const EDITTOR_HOLDER_ID = "editorjs";

const TempEditor = ({ activeTab, setTemplate }) => {
  const ejInstance = useRef(null);
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    // Ensure Editor.js runs only in the browser
    if (typeof window !== "undefined") {
      if (!ejInstance.current) {
        initEditor();
      }
    }

    return () => {
      if (ejInstance.current && ejInstance.current.destroy) {
        ejInstance.current.destroy();
        ejInstance.current = null;
      }
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData || {
        time: new Date().getTime(),
        blocks: [
          {
            type: "header",
            data: {
              text: "Type here you email and create a template",
              level: 2,
            },
          },
        ],
      },
      onReady: (editor) => {
        ejInstance.current = editor;
        console.log(first)
      },
      onChange: async (editor) => {
        let content = await editor.saver.save();
        setEditorData(content);
      },
      autofocus: true,
      tools: {
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        header: {
          class: Header,
          inlineToolbar: ["bold", "link", "color"],
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a header",
            // levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 1,
          },
        },
        list: List,

        // AnyButton: {
        //   class: AnyButton,
        //   inlineToolbar: false,
        //   config:{
        //     css:{
        //       "btnColor": "btn--gray",
        //     },
        //     textValidation: (text) => {
        //       console.log("error!", text)
        //       return true;
        //     },
        //     linkValidation: (text) => {
        //       console.log("error!", text)
        //       return false;
        //     }
        //   }
        // },
      },
    });
  };

  return (
    <TabsContent value="design" className="">
      <div id={EDITTOR_HOLDER_ID} className=""></div>
    </TabsContent>
  );
};

export default TempEditor;


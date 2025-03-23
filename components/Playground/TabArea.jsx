import React from "react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import { BrushIcon, CodeIcon, Save } from "lucide-react";
import { Button } from "../ui/button";

const TabArea = ({ saveDocument }) => {
  return (
    <div className="flex items-center justify-between">
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger
          value="design"
          // onClick={() => setActiveTab("design")}
        >
          <BrushIcon /> Design
        </TabsTrigger>
        <TabsTrigger
          value="code"
          // onClick={() => setActiveTab("code")}
        >
          <CodeIcon /> HTML
        </TabsTrigger>
        {/* <TabsTrigger
        value="preview"
        onClick={() => setActiveTab("preview")}
      >
        <EyeIcon /> Preview
      </TabsTrigger> */}
      </TabsList>

      <Button onClick={saveDocument}>
        <Save className="h-4 w-4" />
        Save
      </Button>
    </div>
  );
};

export default TabArea;

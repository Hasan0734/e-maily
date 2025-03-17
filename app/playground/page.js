"use client";

import Sidebar from "@/components/Playground/Sidebar";
import EditorArea from "@/components/Playground/EditorArea";

const Playground = () => {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      {/* Sidebar */}
      <Sidebar />

      <EditorArea />
    </div>
  );
};

export default Playground;

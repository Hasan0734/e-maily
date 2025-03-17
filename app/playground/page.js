"use client";

import EditorArea from "@/components/Playground/EditorArea";
import { SidebarProvider } from "@/components/ui/sidebar";
import PlayGroundSidebar from "@/components/Playground/PlaygroundSidebar";

const Playground = () => {
  return (
    <SidebarProvider>
      <PlayGroundSidebar />
      <div className=" bg-sidebar text-sidebar-foreground w-full">
       
        <EditorArea />
      </div>
    </SidebarProvider>
  );
};

export default Playground;

import { LogOut, Mail, Plus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "../ui/sidebar";

const PlayGroundSidebar = () => {
  const [activeTemplate, setActiveTemplate] = useState("hello-world");

  return (
    <Sidebar className={'bg-foreground'}>
      <SidebarHeader>
        <div className="flex justify-center items-center">
          <h1 className="flex items-center text-xl font-bold">
            <Mail className="mr-2 h-5 w-5 text-cyan-500" />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Compose
            </span>
            <span className="text-slate-800 dark:text-slate-200">Flow</span>
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <Button className="mb-4 w-full justify-start bg-cyan-500 hover:bg-cyan-600">
              <Plus className="mr-2 h-4 w-4" /> New Email
            </Button>

            <div className="space-y-1">
              <h2 className="mb-2 px-2 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                Templates
              </h2>

              {[
                { id: "hello-world", name: "Hello World" },
                { id: "welcome", name: "Welcome Email" },
                { id: "newsletter", name: "Newsletter" },
                { id: "product-launch", name: "Product Launch" },
              ].map((template) => (
                <button
                  key={template.id}
                  className={`w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors ${
                    activeTemplate === template.id
                      ? " font-medium bg-slate-300 text-cyan-900 dark:bg-cyan-900/20 dark:text-cyan-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActiveTemplate(template.id)}
                >
                  {template.name}
                </button>
              ))}
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="outline"
          className="w-full justify-start text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>


  );
};

export default PlayGroundSidebar;

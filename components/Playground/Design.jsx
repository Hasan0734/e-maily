import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Card } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Tiptap from "./Tiptap";

const Design = () => {
  return (
    <TabsContent value="design" className="space-y-6">
      <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700">
        <h2 className="mb-4 text-lg font-medium">Email Details</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="subject">
              Subject <span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              placeholder="Email Subject"
              defaultValue="Discover Maily"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="from">From</Label>
            <Input id="from" placeholder="hello@componseFlow" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="to">
              To <span className="text-red-500">*</span>
            </Label>
            <Input id="to" placeholder="Email Recipient(s)" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reply-to">Reply-To</Label>
            <Input id="reply-to" placeholder="Reply-To Email" />
          </div>
        </div>
      </Card>

      <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700">
        <h2 className="mb-4 text-lg font-medium">Email Content</h2>

        <Tiptap />
      </Card>
    </TabsContent>
  );
};

export default Design;

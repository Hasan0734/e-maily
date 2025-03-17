import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { Card } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

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
            <Input
              id="from"
              placeholder="hello@componseFlow"
          
            />
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

        <div className="rounded-md border border-slate-200 bg-white px-3 sm:p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex justify-center">
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Avatar"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <h1 className="mb-4 text-center text-3xl font-bold text-slate-900 dark:text-white">
              Discover Maily
            </h1>

            <p className="mb-4 text-slate-700 dark:text-slate-300">
              Are you ready to transform your email communication? Introducing
              Maily, the powerful email editor that enables you to craft
              captivating emails effortlessly.
            </p>

            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Elevate your email communication with Maily! Click below to try it
              out:
            </p>

            <div className="mb-6 flex justify-center">
              <Button className="bg-cyan-500 hover:bg-cyan-600">
                Try Maily Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="mb-2 text-slate-700 dark:text-slate-300">
              Join our vibrant community of users and developers on{" "}
              <a href="#" className="text-cyan-500 hover:underline">
                GitHub
              </a>
              , where Maily is an{" "}
              <span className="font-medium">open-source</span> project.
              Together, we'll shape the future of email editing.
            </p>
          </div>
        </div>
      </Card>
    </TabsContent>
  );
};

export default Design;

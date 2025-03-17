import React from 'react'
import { TabsContent } from '../ui/tabs'
import { Card } from '../ui/card'
import { ArrowRight, Eye, Image, Mail } from 'lucide-react'
import { Button } from '../ui/button'

const Preview = () => {
  return (
    <TabsContent value="preview">
    <Card className="overflow-hidden border-slate-200 dark:border-slate-700">
      <div className="px-3 sm:px-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
        <div className="flex items-center gap-2 text-lg font-medium">
          <Eye className="h-5 w-5 text-slate-500" />
          <span className="">Email Preview</span>
        </div>

        <Button variant="outline" size="sm">
          <Mail className="mr-2 h-4 w-4" />
          Send Test
        </Button>
      </div>

      <div className="p-3 sm:p-6 ">
        <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="p-6">
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
              Are you ready to transform your email communication?
              Introducing Maily, the powerful email editor that
              enables you to craft captivating emails effortlessly.
            </p>

            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Elevate your email communication with Maily! Click below
              to try it out:
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
              <span className="font-medium">open-source</span>{" "}
              project. Together, we'll shape the future of email
              editing.
            </p>
          </div>
        </div>
      </div>
    </Card>
  </TabsContent>
  )
}

export default Preview
import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../ui/TextInput";

const EmailForm = () => {
  const form = useForm({
    resolver: zodResolver(),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Card className="overflow-hidden border-slate-200 p-3 sm:p-6 dark:border-slate-700 mb-6">
      <h2 className="mb-4 text-lg font-medium">Email Details</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          <TextInput
            name={"subject"}
            label="Subject"
            form={form}
            placeholder={"Email Subject"}
            defaultValue="Discover Maily"
            message={true}
          />

          <TextInput
            name={"from"}
            label="Form"
            form={form}
            placeholder="hello@componseFlow"
            message={true}
          />

          <TextInput
            name={"to"}
            label="To"
            form={form}
            placeholder="Email Recipient(s)"
            message={true}
          />

          <TextInput
            name="reply-to"
            label="Reply-To"
            form={form}
            placeholder="Reply-To Email"
            message={true}
          />
        </form>
      </Form>
    </Card>
  );
};

export default EmailForm;

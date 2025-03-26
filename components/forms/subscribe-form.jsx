"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { emailSchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import TextInput from "../ui/TextInput";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(emailSchema),
  });

  function onSubmit(data) {
    console.log(data);
    setEmail(() => data.email);

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  return (
    <div className="flex justify-center mt-9">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex w-full max-w-sm items-center space-x-2">
         
            <TextInput form={form} name={"email"} placeholder="m@example.com" />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Loading..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SubscribeForm;

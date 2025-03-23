import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { apiFormSchema } from "@/lib/form-schema";

const ApiForm = () => {
  const form = useForm({
    resolver: zodResolver(apiFormSchema),
    defaultValues: {
      APIProvider: undefined, // Ensures validation triggers
      APIKey: "",
      APIEndpoint: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Configuration</h4>
          <p className="text-sm text-muted-foreground">
            Configure your Provider API Key and Endpoint(if any). These settings
            are saved in your browser.
          </p>
        </div>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="APIProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Provider <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.trigger("APIProvider"); // Ensures validation is triggered
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a provider" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="RESEND">Resend</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="APIKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  API Key <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} className="h-8" placeholder="API Key" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="APIEndpoint"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Endpoint</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="h-8"
                    placeholder="API Endpoint"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full flex items-center gap-0.5">
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default ApiForm;

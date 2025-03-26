import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { cn } from "@/lib/utils";

const TextInput = ({
  form,
  name,
  label,
  message,
  className,
  isLabelSub,
  labelComponent,
  ...rest
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {!isLabelSub && label && <FormLabel>{label}</FormLabel>}
          {isLabelSub && labelComponent}
          <FormControl>
            <Input {...field} {...rest} className={cn("h-8", className)} />
          </FormControl>
          {message && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default TextInput;

"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { signupSchema } from "@/lib/form-schema";
import {
  Form,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../ui/TextInput";

export function SignupForm({ className, ...props }) {
  const form = useForm({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create a new account</CardTitle>
          <CardDescription>Please enter your details.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-6">
                <div className="grid gap-6">
                  <TextInput
                    name="fullName"
                    label="Full Name"
                    form={form}
                    placeholder="John Weak"
                    message={true}
                  />

                  <TextInput
                    name="email"
                    label="Email"
                    form={form}
                    placeholder="m@example.com"
                    message={true}
                  />

                  <TextInput
                    name="password"
                    label="Password"
                    form={form}
                    placeholder="*******"
                    message={true}
                    type="password"
                  />
                  <TextInput
                    name="confirmPassword"
                    label="Confrm Password"
                    form={form}
                    placeholder="*******"
                    message={true}
                    type="password"
                  />

                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </div>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="hove:underline underline-offset-4"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { emailSchema } from "@/lib/form-schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import TextInput from "../ui/TextInput";

const ForgotPasswordForm = ({ className, ...props }) => {
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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot your password?</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your
            password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <TextInput
                      name={"email"}
                      label="Email"
                      form={form}
                      placeholder="m@example.com"
                      message={true}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-black hover:bg-gray-800 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send reset link"}
                    </Button>

                    <div className="text-center">
                      <Link
                        href="/login"
                        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                      >
                        <ArrowLeft className="mr-1 h-4 w-4" />
                        Back to login
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
          ) : (
            <div className="space-y-4">
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Check your email
                    </p>
                    <p className="mt-2 text-sm text-green-700 text-wrap">
                      We've sent a password reset link to <br /> {email}
                    </p>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  setEmail("");
                  setIsSubmitted(false);
                }}
                variant="outline"
                className="w-full"
              >
                Back to forgot password
              </Button>
              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Back to login
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default ForgotPasswordForm;

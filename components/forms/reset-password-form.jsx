"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Check, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPasswordForm = ({ className, ...props }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Password validation criteria
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== "";

  const isValidPassword =
    hasMinLength && hasUppercase && hasNumber && hasSpecialChar;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPassword) {
      setError("Please ensure your password meets all requirements");
      return;
    }

    if (!passwordsMatch) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Reset your password</CardTitle>
          <CardDescription>
            Create a new password for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-6">
                <div className="grid gap-6">
                  {error && (
                    <div className="rounded-md bg-red-50 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <X className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-red-800">
                            {error}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="password">New Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <div className="mt-2 space-y-2 text-sm">
                      <p className="font-medium text-gray-700">
                        Password requirements:
                      </p>
                      <ul className="space-y-1 pl-5 text-base">
                        <li className="flex items-center">
                          {hasMinLength ? (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <X className="mr-2 h-4 w-4 text-gray-300" />
                          )}
                          <span
                            className={
                              hasMinLength ? "text-green-700" : "text-gray-500"
                            }
                          >
                            At least 8 characters
                          </span>
                        </li>
                        <li className="flex items-center">
                          {hasUppercase ? (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <X className="mr-2 h-4 w-4 text-gray-300" />
                          )}
                          <span
                            className={
                              hasUppercase ? "text-green-700" : "text-gray-500"
                            }
                          >
                            At least one uppercase letter
                          </span>
                        </li>
                        <li className="flex items-center">
                          {hasNumber ? (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <X className="mr-2 h-4 w-4 text-gray-300" />
                          )}
                          <span
                            className={
                              hasNumber ? "text-green-700" : "text-gray-500"
                            }
                          >
                            At least one number
                          </span>
                        </li>
                        <li className="flex items-center">
                          {hasSpecialChar ? (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <X className="mr-2 h-4 w-4 text-gray-300" />
                          )}
                          <span
                            className={
                              hasSpecialChar
                                ? "text-green-700"
                                : "text-gray-500"
                            }
                          >
                            At least one special character
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    {confirmPassword && !passwordsMatch && (
                      <p className="text-sm text-red-500">
                        Passwords do not match
                      </p>
                    )}
                    {confirmPassword && passwordsMatch && (
                      <p className="text-sm text-green-500">Passwords match</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white"
                    disabled={
                      isSubmitting || !isValidPassword || !passwordsMatch
                    }
                  >
                    {isSubmitting ? "Resetting..." : "Reset password"}
                  </Button>
                </div>
              </div>
            </form>
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
                      Password reset successful!
                    </p>
                    <p className="mt-2 text-sm text-green-700">
                      Your password has been reset successfully. <br /> You can
                      now log in with your new password.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-black hover:bg-gray-800 text-white"
              >
                <Link href="/login">Go to login</Link>
              </Button>
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

export default ResetPasswordForm;

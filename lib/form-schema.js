import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({
    required_error: "Please enter your email.",
  }),
  password: z.string({ required_error: "Please enter your password." }),
});

const passwordSchema = z
  .string({ required_error: "Password is required." })
  .min(8, { message: "Password must be at least 8 characters long." })
  .max(20, { message: "Password cannot exceed 20 characters." })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Password must contain at least one lowercase letter.",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Password must contain at least one number.",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Password must contain at least one special character (!@#$%^&*).",
  });

export const signupSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  name: z
    .string({ required_error: "Full name is required." })
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(50, { message: "Name cannot exceed 50 characters." }),
  password: passwordSchema,
  confirmPassword: z
    .string({ required_error: "Please confirm your password." })
    .refine(
      (value, ctx) => {
        if (ctx.parent.password !== value) {
          return false;
        }
        return true;
      },
      { message: "Passwords do not match. Please enter the same password." }
    ),
});

export const apiFormSchema = z.object({
  APIProvider: z.enum(["RESEND"], {
    required_error: "Please select an API Provider.",
  }),
  APIKey: z.string().min(1, "API Key is required!"),
  APIEndpoint: z.string().optional(),
});

export const emailSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
});

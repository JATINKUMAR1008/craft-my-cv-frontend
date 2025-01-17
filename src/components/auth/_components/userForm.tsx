import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import GoogleIcon from "@/assets/google-icon-logo-svgrepo-com (1).svg";
import React, { useCallback, useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  registerFormSchema,
  registerFormSchemaType,
} from "@/schemas/registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { registerUser } from "@/functions/auth/register";
import { toast } from "sonner";
import { redirect, useNavigate } from "@tanstack/react-router";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const [isPendingTransition, startTransition] = useTransition();

  const form = useForm<registerFormSchemaType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {},
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: "register",
    mutationFn: registerUser,
    onError: (error: any) => {
      toast.error(error?.message || "An error occurred");
    },
    onSuccess: () => {
      toast.success(
        "Account created successfully. Please check your email to verify your account"
      );
      navigate({
        to: "/dashboard",
        replace: true,
      });
    },
  });
  const onSubmit = useCallback(
    (values: registerFormSchemaType) => {
      startTransition(() => {
        mutate(values);
      });
    },
    [mutate]
  );

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="grid gap-1">
              <Label
                className="text-xs text-muted-foreground font-extralight"
                htmlFor="firstname"
              >
                First Name
              </Label>
              <Input
                placeholder="John"
                {...form.register("first_name", {
                  required: "First name is required",
                })}
                aria-invalid={
                  form.formState.errors.first_name ? "true" : "false"
                }
              />
              {form.formState.errors.first_name && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.first_name.message}
                </p>
              )}
            </div>
            <div className="grid gap-1">
              <Label
                className="text-xs text-muted-foreground font-extralight"
                htmlFor="firstname"
              >
                Last Name
              </Label>
              <Input
                placeholder="Doe"
                {...form.register("last_name", {
                  required: "Last name is required",
                })}
                aria-invalid={
                  form.formState.errors.last_name ? "true" : "false"
                }
              />
              {form.formState.errors.last_name && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.last_name.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              placeholder="name@example.com"
              {...form.register("email", {
                required: "Email is required",
              })}
              aria-invalid={form.formState.errors.email ? "true" : "false"}
            />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              {...form.register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
              type="password"
            />
            {form.formState.errors.password && (
              <p className="text-xs text-red-500">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up with Email
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <img src={GoogleIcon} className="mr-2 size-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
}

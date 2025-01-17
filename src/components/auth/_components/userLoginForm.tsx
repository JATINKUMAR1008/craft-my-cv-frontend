import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import GoogleIcon from "@/assets/google-icon-logo-svgrepo-com (1).svg";
import React, { useCallback, useTransition } from "react";
import { useMutation } from "react-query";
import {
  loginFormSchemaType,
  loginFormSchema,
} from "@/schemas/loginFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUser } from "@/functions/auth/login";
import { toast } from "sonner";
import { Router, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/hooks/useAuth";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [isPendingTransition, startTransition] = useTransition();

  const form = useForm<loginFormSchemaType>({
    defaultValues: {},
    resolver: zodResolver(loginFormSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: "login",
    mutationFn: loginUser,
    onError: (error: any) => {
      toast.error(error?.message || "An error occurred");
    },
    onSuccess: (data) => {
      setUser(data.user);
      toast.success("Login Successful");
      navigate({
        to: "/dashboard",
        replace: true,
      });
    },
  });

  const onSubmit = useCallback(
    (values: loginFormSchemaType) => {
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
              <div className="text-xs text-red-500">
                {form.formState.errors.email.message}
              </div>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              placeholder="Password"
              type="password"
              {...form.register("password", {
                required: "Password is required",
              })}
              aria-invalid={form.formState.errors.password ? "true" : "false"}
            />
            {form.formState.errors.password && (
              <div className="text-xs text-red-500">
                {form.formState.errors.password.message}
              </div>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
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
      {/* <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GithubIcon className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button> */}
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

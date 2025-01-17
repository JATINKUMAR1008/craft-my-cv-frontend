import { Link } from "@tanstack/react-router";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export const UserAuth = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "signin" | "signup";
}) => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-2 lg:divide-x-[1px] border-separate">
      <div className="relative h-full w-full lg:flex hidden flex-col justify-between">
        <div className="p-2">
          <h1 className="text-2xl font-sans font-semibold">Optimus</h1>
        </div>
        <div className="bottom-5 p-2">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <div className="relative w-full h-full flex justify-center items-center ">
        {type === "signup" ? (
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-4"
            )}
          >
            Login
          </Link>
        ) : (
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute right-4 top-4 md:right-8 md:top-4"
            )}
          >
            Sign Up
          </Link>
        )}

        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] max-w-[300px] lg:max-w-full">
          <div className="flex flex-col space-y-2 text-center">
            {type === "signup" ? (
              <>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Welcome back!
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to sign in again
                </p>
              </>
            )}
          </div>
          {children}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

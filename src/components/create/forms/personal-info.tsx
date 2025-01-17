import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useStepCounter } from "@/hooks/useStepsCounter";
import { StoreType, useStore } from "@/hooks/useStore";
import {
  personalInfoSchema,
  personalInfoSchemaType,
} from "@/schemas/personalInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendIcon } from "lucide-react";
import { useCallback, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const PersonalInfoForm = () => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPendingTransition, startTransition] = useTransition();
  const { storeFormData, setCurrentStep, getCurrentStep } = useStore();
  const { setCurrentStep: Stepper } = useStepCounter();
  const form = useForm<personalInfoSchemaType>({
    defaultValues: {
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
    },
    resolver: zodResolver(personalInfoSchema),
  });
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "text/plain",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(selectedFile.type)) {
      setError("File type must be .pdf, .txt, or .docx.");
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  const { mutate, isLoading } = useMutation({
    mutationKey: [user.id, "personalInfo"],
    mutationFn: (values: personalInfoSchemaType) => {
      storeFormData(values, StoreType.PERSONAL_INFORMATION);
      const step = getCurrentStep();
      setCurrentStep(step + 1);
      Stepper(step + 1);
    },
    onError: (error: any) => {
      setError(error?.message || "An error occurred");
    },
  });

  const onSubmit = useCallback(
    (values: personalInfoSchemaType) => {
      console.log("values", values);
      startTransition(() => {
        mutate(values);
      });
    },
    [mutate]
  );
  return (
    <div className="p-8 relative">
      <form
        className="grid grid-cols-3 gap-2 relative h-full w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid gap-1">
          <Label
            htmlFor="first_name"
            className="text-xs text-muted-foreground font-extralight"
          >
            First Name
          </Label>
          <Input
            {...form.register("first_name", {
              required: "First name is required",
            })}
            aria-invalid={form.formState.errors.first_name ? "true" : "false"}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="last_name"
            className="text-xs text-muted-foreground font-extralight"
          >
            Last Name
          </Label>
          <Input
            {...form.register("last_name", {
              required: "Lasr name is required",
            })}
            aria-invalid={form.formState.errors.last_name ? "true" : "false"}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="email"
            className="text-xs text-muted-foreground font-extralight"
          >
            Email
          </Label>
          <Input
            {...form.register("email", {
              required: "Email is required",
            })}
            type="email"
            aria-invalid={form.formState.errors.email ? "true" : "false"}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="phoneNumber"
            className="text-xs text-muted-foreground font-extralight"
          >
            Phone
          </Label>
          <Input
            {...form.register("phoneNumber", {
              required: "Phone is required",
            })}
            type="tel"
            aria-invalid={form.formState.errors.phoneNumber ? "true" : "false"}
          />
        </div>
        <div className="grid gap-1 ">
          <Label
            htmlFor="dob"
            className="text-xs text-muted-foreground font-extralight"
          >
            Date of Birth
          </Label>
          <Input
            {...form.register("DateOfBirth", {
              required: "DOB is required",
            })}
            type="date"
            aria-invalid={form.formState.errors.DateOfBirth ? "true" : "false"}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="currentLocation"
            className="text-xs text-muted-foreground font-extralight"
          >
            Current Location
          </Label>
          <Input
            {...form.register("currentLocation", {
              required: "Location is required",
            })}
            aria-invalid={
              form.formState.errors.currentLocation ? "true" : "false"
            }
          />
        </div>
        <div className="grid col-span-3 h-[50vh] items-center justify-center border border-dashed">
          <div className="flex flex-col gap-2 items-center">
            <label
              htmlFor="resume"
              className="cursor-pointer border p-2 text-center text-xs bg-muted rounded-md"
            >
              Select from device
            </label>
            <p className="text-xs font-thin">
              Please select your latest resume.
            </p>
            <Input
              id="resume"
              type="file"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  onFileChange(e);
                  form.setValue("resume", selectedFile); // Ensure proper file type and value
                }
              }}
            />
            {file && (
              <div className="mt-2 text-center">
                <p className="text-sm text-success">{file.name}</p>
                <button
                  type="button"
                  className="text-red-500 text-xs underline"
                  onClick={removeFile}
                >
                  Remove file
                </button>
              </div>
            )}
            {error && <p className="text-xs text-red-500">{error}</p>}
          </div>
        </div>
        {form.formState.errors && (
          <div className="col-span-3 text-red-500 text-xs">
            {Object.values(form.formState.errors).map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )}
        <div className="col-span-3 flex justify-end">
          <Button
            className="flex justify-start items-center"
            disabled={isLoading}
          >
            <p>Submit</p>
            <SendIcon size={20} className="ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
};

"use client";

import { IconPlus } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Slider, sliderSchema } from "./slider";

type SliderHeaderProps = {
  sliders: Slider[];
  setSliders: Dispatch<SetStateAction<Slider[]>>;
};

export function SliderHeader({ sliders, setSliders }: SliderHeaderProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogError, setDialogError] = useState("");

  return (
    <div className="flex items-center justify-between pt-4">
      <p className="text-xl font-bold">Sliders</p>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="sm"
            className="h-6 px-2 py-0"
            onClick={() => {
              setDialogError("");
            }}
          >
            <IconPlus
              size={12}
              className="mr-1  text-zinc-400 transition hover:text-zinc-500"
            />

            <span className="text-xs text-gray-400">Add Slider</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Slider</DialogTitle>
          </DialogHeader>
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();

              const fd = new FormData(e.currentTarget);
              const variable = fd.get("variable") as string;
              const min = parseFloat((fd.get("min") as string) || "-5");
              const max = parseFloat((fd.get("max") as string) || "5");
              const step = parseFloat((fd.get("step") as string) || "0.1");
              const value = (min + max) / 2;

              if (variable === "t") {
                setDialogError("Cannot use variable 't'.");
                return;
              } else if (sliders.some((s) => s.variable === variable)) {
                setDialogError("Variable already exists.");
                return;
              }

              try {
                const result = sliderSchema.parse({
                  variable,
                  value,
                  min,
                  max,
                  step,
                });
                setSliders([...sliders, { ...result }]);
              } catch (err) {
                const validationError = fromZodError(err as ZodError);
                setDialogError(validationError.message);
              }
            }}
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="variable" className="text-right">
                Variable
              </Label>
              <Input id="variable" name="variable" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="min" className="text-right">
                Min
              </Label>
              <Input
                id="min"
                name="min"
                className="col-span-3"
                placeholder="5"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="max" className="text-right">
                Max
              </Label>
              <Input
                id="max"
                name="max"
                className="col-span-3"
                placeholder="-5"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="step" className="text-right">
                Step
              </Label>
              <Input
                id="step"
                name="step"
                className="col-span-3"
                placeholder="0.1"
              />
            </div>

            <p className="text-sm text-red-300">{dialogError}</p>

            <Button type="submit" variant="secondary">
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

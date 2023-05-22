"use client";

import { IconPlus, IconX } from "@tabler/icons-react";
import * as math from "mathjs";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { ZodError, z } from "zod";
import { fromZodError } from "zod-validation-error";
import { Graph } from "~/components/graph";
import { LessonLayout } from "~/components/lesson-layout";
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

const sliderSchema = z.object({
  variable: z.string().length(1, { message: "Must be a single character." }),
  value: z.number(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
});

type Slider = {
  variable: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  error?: string;
};

export default function Page() {
  const [xNode, setXNode] = useState<math.MathNode>(math.parse("t"));
  const [yNode, setYNode] = useState<math.MathNode>(math.parse("sin(t)"));

  const [xError, setXError] = useState("");
  const [yError, setYError] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogError, setDialogError] = useState("");

  const [sliders, setSliders] = useState<Slider[]>([
    { variable: "a", value: 1 },
    { variable: "b", value: 3 },
  ]);

  const scope = Object.fromEntries(
    sliders.map((slider) => [slider.variable, slider.value])
  );

  return (
    <LessonLayout
      title="Playground"
      graph={
        <Graph
          s={[
            (t) => xNode.compile().evaluate({ ...scope, t }),
            (t) => yNode.compile().evaluate({ ...scope, t }),
          ]}
        />
      }
    >
      <p>Please enter your own equations to draw out!</p>

      <BlockMath
        math={`x(t) = ${xNode.toTex()} \\\\ y(t) = ${yNode.toTex()}`}
      />

      <div className="my-2 flex items-start gap-2">
        <span className="pt-2">
          <InlineMath math="x(t) =" />
        </span>

        <div className="flex flex-col gap-1">
          <Input
            type="text"
            defaultValue="t"
            onChange={(e) => {
              try {
                if (e.target.value === "")
                  throw new Error("Please enter an expression.");
                const node = math.parse(e.target.value);

                const test = node.compile().evaluate({ ...scope, t: 1 });
                if (typeof test !== "number")
                  throw new Error("Please enter a valid expression.");

                setXNode(node);
                setXError("");
              } catch (e) {
                setXError((e as any).toString());
              }
            }}
            className={
              "font-mono " + (xError !== "" ? "border border-red-500" : "")
            }
          />
          {xError !== "" && (
            <span className="text-sm text-red-300">{xError}</span>
          )}
        </div>
      </div>

      <div className="my-2 flex items-start gap-2">
        <span className="pt-2">
          <InlineMath math="y(t) =" />
        </span>

        <div className="flex flex-col gap-1">
          <Input
            type="text"
            defaultValue="sin(t)"
            onChange={(e) => {
              try {
                if (e.target.value === "")
                  throw new Error("Please enter an expression.");
                const node = math.parse(e.target.value);

                const test = node.compile().evaluate({ ...scope, t: 1 });
                if (typeof test !== "number")
                  throw new Error("Please enter a valid expression.");

                setYNode(node);
                setYError("");
              } catch (e) {
                setYError((e as any).toString());
              }
            }}
            className={
              "font-mono " + (yError !== "" ? "border border-red-500" : "")
            }
          />
          {yError !== "" && (
            <span className="text-sm text-red-300">{yError}</span>
          )}
        </div>
      </div>

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

      <div className="flex flex-col gap-1 pt-2">
        {sliders.map((slider) => (
          <div key={slider.variable} className="flex flex-col">
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={slider.min ?? -5}
                max={slider.max ?? 5}
                step={slider.step ?? 0.1}
                value={slider.value}
                onChange={(e) => {
                  setSliders(
                    sliders.map((s) =>
                      s.variable === slider.variable
                        ? { ...s, value: parseFloat(e.target.value) }
                        : s
                    )
                  );
                }}
              />

              <InlineMath math={`${slider.variable} = ${slider.value}`} />

              <IconX
                size={16}
                className="cursor-pointer text-zinc-400 transition hover:text-zinc-500"
                onClick={() => {
                  // check if removing the slider will cause the equation to be invalid
                  try {
                    const xTest = xNode.compile().evaluate({
                      ...scope,
                      t: 1,
                      [slider.variable]: undefined,
                    });

                    const yTest = yNode.compile().evaluate({
                      ...scope,
                      t: 1,
                      [slider.variable]: undefined,
                    });

                    if (typeof xTest !== "number" || typeof yTest !== "number")
                      throw new Error();
                  } catch (e) {
                    setSliders(
                      sliders.map((s) =>
                        s.variable === slider.variable
                          ? {
                              ...s,
                              error:
                                "Please remove references to this variable to delete it.",
                            }
                          : s
                      )
                    );

                    return true;
                  }

                  setSliders(
                    sliders.filter((s) => s.variable !== slider.variable)
                  );
                }}
              />
            </div>
            {slider.error && (
              <span className="text-sm text-red-300">{slider.error}</span>
            )}
          </div>
        ))}
      </div>
    </LessonLayout>
  );
}

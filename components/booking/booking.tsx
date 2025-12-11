"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { sendBookingInquiry } from "./actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { bookingFormSchema, type BookingFormData } from "./validations";
import { z } from "zod";

export function Booking({
  package_name,
  styles,
}: {
  package_name: string;
  styles?: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [wantKite, setWantKite] = useState<boolean>(false);
  const [errors, setErrors] =
    useState<z.ZodFormattedError<BookingFormData> | null>(null);

  const handleWantKite = () => {
    setWantKite(!wantKite);
  };

  const [isPendingAction, setIsPendingAction] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPendingAction(true);
    setErrors(null);

    const formData = new FormData(e.currentTarget);
    formData.set("packageName", package_name);
    formData.set("wantKite", wantKite ? "true" : "");

    // Client-side validation
    const formDataObj = Object.fromEntries(formData);
    const validation = bookingFormSchema.safeParse(formDataObj);

    if (!validation.success) {
      setErrors(validation.error.format());
      toast.error("Bitte überprüfe die Formularfelder!");
      setIsPendingAction(false);
      return;
    }

    try {
      await sendBookingInquiry(formData);
      toast.success("Anfrage verschickt!");
      setOpen(false);
      setWantKite(false);
      setErrors(null);
    } catch (error) {
      console.error("Error executing server action", error);
      toast.error("Fehler beim Senden der Anfrage. Versuche es später erneut.");
    } finally {
      setIsPendingAction(false);
    }
  };
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const form = e.currentTarget;

  //   const formData = new FormData(form);
  //   const [data, err] = await execute(formData);

  //   if (err) {
  //     toast.error("Bitte fehler prüfen!");
  //     return;
  //   }

  //   setOpen(false);
  //   setWantKite(false);
  //   toast.success("Anfrage verschickt!");
  //   form.reset();
  // };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "wbroder-white border-2",
            styles ? styles : "white bg-transparent"
          )}
        >
          Buchungsanfrage
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-125 bg-white">
        <DialogHeader>
          <DialogTitle>Buchungsanfrage</DialogTitle>
          <DialogDescription>
            Fülle das Formular aus, um deine Buchungsanfrage zu senden.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Label htmlFor="packageName">Paket</Label>
          <Input readOnly name="packageName" disabled value={package_name} />
          <Label htmlFor="name">Name</Label>
          <Input name="name" type="text" />
          {errors?.name && (
            <p className="text-red-500 text-sm">{errors.name._errors[0]}</p>
          )}
          <Label htmlFor="email">Email</Label>
          <Input name="email" type="text" />
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors.email._errors[0]}</p>
          )}
          <Label htmlFor="numberOfPersons">Personenzahl</Label>
          <Select name="numberOfPersons" defaultValue="1">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="6">6</SelectItem>
              <SelectItem value="7">7</SelectItem>
              <SelectItem value="8">8</SelectItem>
            </SelectContent>
          </Select>

          <Label htmlFor="wantKite">Ich möchte/kann Kitesurfen</Label>
          <Switch
            name="wantKite"
            checked={wantKite}
            onCheckedChange={handleWantKite}
            // defaultValue={wantKite}
          />
          {wantKite && (
            <>
              <Label htmlFor="kiteLevel">Mein Kite-Level</Label>
              <Select name="kiteLevel">
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Wähle dein Kitelevel"
                    defaultValue={kiteLevel[0]}
                  />
                </SelectTrigger>
                <SelectContent>
                  {kiteLevel.map((level) => (
                    <SelectItem key={level} value={level}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors?.kiteLevel && (
                <p className="text-red-500 text-sm">
                  {errors.kiteLevel._errors[0]}
                </p>
              )}
            </>
          )}
          <Button
            className="w-full hover:bg-pink-500 hover:text-white"
            type="submit"
            variant={"outline"}
            disabled={isPendingAction}
          >
            {isPendingAction ? "Sende..." : "Abschicken"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const kiteLevel = [
  "Keine Erfahrung, ich möchte es lernen",
  "Anfänger, ich kann bereits fahren",
  "Fortgeschritten, ich kann Höhe laufen und springen",
  "Profi, ich kann bei starken Winden fahren und beherrsche Tricks",
];

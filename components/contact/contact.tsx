"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import ContactImg from "@/public/contact.jpg";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { contactFormSchema, type ContactFormData } from "./validations";
import { set, z } from "zod";
import { sendContactMessage } from "./actions";
import { CheckCircle2Icon, X } from "lucide-react";

export default function Contact() {
  const fromRef = useRef<HTMLFormElement>(null);
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] =
    useState<z.ZodFormattedError<ContactFormData> | null>(null);
  const [wasSuccessful, setWasSuccessful] = useState(false);
  const [failed, setHasFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    setErrors(null);

    const formData = new FormData(e.currentTarget);

    // Client-side validation
    const formDataObj = Object.fromEntries(formData);
    const validation = contactFormSchema.safeParse(formDataObj);

    if (!validation.success) {
      setErrors(validation.error.format());
      setHasFailed(true);
      setIsPending(false);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setHasFailed(false);
      return;
    }

    try {
      //await sendContactMessage(formData);
      // fromRef.current?.reset();
      // setErrors(null);

      setWasSuccessful(true);
    } catch (error) {
      console.error("Error executing server action", error);
      setHasFailed(true);
      await new Promise((resolve) => setTimeout(resolve, 4000));
    } finally {
      setIsPending(false);
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setWasSuccessful(false);
    }
  };

  return (
    <div className="bg-white px-4">
      <div id="kontakt" className="md:p-10 max-w-300 mx-auto">
        <h2 className="text-xl md:text-5xl  uppercase text-pink-500 text-center font-bold my-10 border-b pb-2">
          So erreichst Du uns
        </h2>

        <div className="container grid md:grid-cols-2 w-full h-full gap-4 ">
          <div className="h-[400px] md:h-full relative">
            <Image
              src={ContactImg}
              alt="Kamel"
              className="object-cover object-center rounded-lg"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className=" w-full h-full ">
            <form
              ref={fromRef}
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <Label htmlFor="name">Name</Label>
              <Input name="name" type="text" />
              {errors?.name && (
                <p className="text-red-500 text-sm">{errors.name._errors[0]}</p>
              )}
              <Label htmlFor="email">Email</Label>
              <Input name="email" type="text" />
              {errors?.email && (
                <p className="text-red-500 text-sm">
                  {errors.email._errors[0]}
                </p>
              )}
              <Label htmlFor="message">Nachricht</Label>
              <Textarea name="message" rows={10} />
              {errors?.message && (
                <p className="text-red-500 text-sm">
                  {errors.message._errors[0]}
                </p>
              )}
              <Button
                variant={"outline"}
                className="w-full cursor-pointer hover:bg-pink-500 hover:text-white"
                type="submit"
                disabled={isPending}
              >
                {isPending ? "Sende..." : "Abschicken"}
              </Button>
            </form>
            {wasSuccessful && (
              <div className="flex items-center justify-between mt-4 gap-3 border border-green-500 p-4 rounded-lg bg-green-50">
                <CheckCircle2Icon className="size-8 text-green-500" />
                <p className="text-green-500">
                  Vielen Dank für deine Nachricht! Wir werden uns so schnell wie
                  möglich bei dir melden.
                </p>
              </div>
            )}
            {failed && (
              <div className="flex items-center justify-between mt-4 gap-3 border border-red-500 p-4 rounded-lg bg-green-50">
                <X className="size-8 text-red-500" />
                <p className="text-red-500">
                  Ein Fehler ist aufgetreten. Bitte versuche es jetzt oder
                  später erneut."
                </p>
              </div>
            )}
            <div className="text-sm mt-4">
              <p>
                Deine Angaben werden ausschließlich zur Beantwortung Deiner
                Frage genutzt. Weitere Informationen findest Du in den{" "}
                <Link
                  className="text-pink-500"
                  href="https://www.michaela-suessbauer.de/datenschutz.html"
                  target="_blank"
                >
                  Datenschutzhinweisen.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

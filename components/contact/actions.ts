"use server";

import z from "zod";
import { createServerAction } from "zsa";

import { contactFormSchema } from "./validations";
export const sendContactMessage = createServerAction()
  .input(contactFormSchema, {
    type: "formData",
  })
  .handler(async ({ input }) => {
    console.log("input", input);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return input;
  });

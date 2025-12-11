"use server";

import { resend } from "@/lib/resend";
import { contactFormSchema } from "./validations";
import ContactFormEmailTemplate from "./email-template";

const senderEmail: string = process.env.RESEND_FROM_EMAIL as string;

export const sendContactMessage = async (formData: FormData) => {
  const parsedData = contactFormSchema.safeParse(Object.fromEntries(formData));

  if (!parsedData.success) {
    console.log("Validation error:", parsedData.error);
    throw new Error("Invalid form data");
  }

  const input = parsedData.data;
  console.log("input", input);
  try {
    await resend.emails.send({
      from: `M. Suessbauer <${senderEmail}>`,
      to: process.env.RESEND_TO_EMAIL_EVENT as string,
      subject: "Kite Spirit Fun Camp 2025: Anfrage über das Kontaktformular",
      react: ContactFormEmailTemplate({
        name: input.name,
        email: input.email,
        message: input.message,
      }),
    });
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email", error);
    throw new Error("Error sending email");
  }
};

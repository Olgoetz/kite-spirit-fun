"use server";

import { bookingFormSchema } from "./validations";
import { resend } from "@/lib/resend";
import { BookingEmailTemplate } from "./email-template";

const senderEmail: string = process.env.RESEND_FROM_EMAIL as string;

export const sendBookingInquiry = async (formData: FormData) => {
  const parsedData = bookingFormSchema.safeParse(Object.fromEntries(formData));

  if (!parsedData.success) {
    console.log("Validation error:", parsedData.error);
    throw new Error("Invalid form data");
  }

  const input = parsedData.data;

  try {
    await resend.emails.send({
      from: `M. Suessbauer <${senderEmail}>`,
      to: [process.env.RESEND_TO_EMAIL_BOOKING as string],
      cc: process.env.RESEND_TO_EMAIL_EVENT as string,
      subject: "Move-Spirit-Fun 2026 Ocean Edition: Neue Buchungsanfrage",
      react: await BookingEmailTemplate({
        name: input.name,
        email: input.email,
        numberOfPersons: input.numberOfPersons,
        packageName: input.packageName,
        wantKite: input.wantKite,
        kiteLevel: input.kiteLevel,
      }),
    });
    console.log("Email sent");
  } catch (error) {
    console.error("Error sending email", error);
    throw new Error("Error sending email");
  }
};

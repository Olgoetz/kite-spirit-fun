import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Styles {
  classes?: string;
}

const SocialMedia = ({ classes }: Styles) => {
  return (
    <>
      <div className={cn("flex", classes)}>
        <Link
          href="https://www.instagram.com/michaela_suessbauer//?hl=de"
          target="_blank"
        >
          <FaInstagram size={24} />
        </Link>
        <Link
          href="https://www.facebook.com/michaelasuessbauer1.de"
          target="_blank"
        >
          <FaFacebook size={24} />
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;

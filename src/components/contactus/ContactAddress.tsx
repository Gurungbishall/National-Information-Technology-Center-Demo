
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const ContactAddress = () => {
  return (
    <>
      <section className="pb-4 md:p-20 flex flex-col gap-4 items-center justify-center">
        <div className="text-xl md:ext-2xl font-bold">Contact Infromation</div>

        <div className="flex flex-col gap-4 md:gap-8 text-sm px-6">
          <Link
            href="https://www.google.com/maps/place/Integrated+Data+Management+Center/@27.700449,85.321103,17.29z/data=!4m6!3m5!1s0x39eb19a6022349eb:0x37b2ff903b56ea80!8m2!3d27.6999787!4d85.3239136!16s%2Fg%2F11by_jvcn1?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="flex gap-2"
          >
            <MapPin />
            Singhadarbar, Kathmandu
          </Link>
          <Link
            href="mailto:info@idmc.gov.np; support@idmc.gov.np"
            className="flex gap-2"
          >
            <Mail />
            info@idmc.gov.np; support@idmc.gov.np
          </Link>
          <Link
            href="tel:01-4211527; 4211917; 4211710; 01-5970646"
            className="flex gap-2"
          >
            <Phone />
            01-4211527; 4211917; 4211710; 01-5970646
          </Link>
        </div>
      </section>
    </>
  );
};

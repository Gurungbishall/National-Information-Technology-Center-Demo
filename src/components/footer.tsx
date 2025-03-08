import Emblem_of_Nepal from "../../public/Emblem_of_Nepal.png";
import facebookIcon from "../../public/facebook.svg";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <>
      <section className=" bottom-0 right-0 left-0 z-10 px-6 py-8 flex flex-col gap-4 border-2">
        <div className="flex flex-row gap-4 items-center justify-center h-auto ">
          <Image
            src={Emblem_of_Nepal}
            alt="Emblem of Nepal"
            width={80}
            height={80}
            className="mb-2 md:mb-0"
          />
          <div className="flex flex-col gap-1 font-bold text-left">
            <div className="text-sm md:text-xl">
              National Information Technology Center
            </div>
            <div className="text-xs md:text-sm">Singhadarbar, Kathmandu</div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-18 md:justify-center">
          <div className="flex flex-col gap-4">
            <span className="font-bold">Office hours</span>
            <div className="flex flex-col gap-3 text-sm  md:w-[350px]">
              <span className="font-semibold">
                Winter (Kartik 16 to Magh 15)
              </span>
              <div className="flex justify-between">
                <p>Sunday - Thursday</p>
                <p>10:00 A.M. - 4:00 P.M.</p>
              </div>
              <div className="flex justify-between">
                <p>Friday</p>
                <p>10:00 A.M. - 3:00 P.M.</p>
              </div>
              <div className="border-2 dark:border-white border-black"></div>
              <span className="font-semibold">
                Summer (Magh 16 to Kartik 15)
              </span>
              <div className="flex justify-between">
                <p>Sunday - Thursday</p>
                <p>10:00 A.M. - 5:00 P.M.</p>
              </div>
              <div className="flex justify-between">
                <p>Friday</p>
                <p>10:00 A.M. - 3:00 P.M.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold">Important Links</span>
            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li className="cursor-pointer">
                | Department of Information Technology
              </li>
              <li className="cursor-pointer">
                | National Cyber Security Center
              </li>
              <li className="cursor-pointer">
                | Ministry of Federal Affairs & General Administration
              </li>
              <li className="cursor-pointer">
                | Ministry of Communication and Information Technology
              </li>
              <li className="cursor-pointer">
                | Office of Controller of Certification
              </li>
              <li className="cursor-pointer">
                | The Official Portal of Government of Nepal
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between">
          <div>
            <Image src={facebookIcon} alt="FaceBook" />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:gap-8 text-sm">
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
        </div>
      </section>
    </>
  );
};

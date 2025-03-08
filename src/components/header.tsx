import { ModeToggle } from "./modetoggle";
import Emblem_of_Nepal from "../../public/Emblem_of_Nepal.png";
import Nepal_flag_gif from "../../public/Nepal-flag.gif";
import Image from "next/image";
import TimeAndDate from "./timeanddate/timeanddate";
import { NavLinks } from "./navLinks";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <ModeToggle />
      <section className="px-6 py-4 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex flex-row gap-4 items-center justify-start h-auto md:w-2/5">
            <Link href="/" >
              <Image
                src={Emblem_of_Nepal}
                alt="Emblem of Nepal"
                width={250}
                height={300}
              />
            </Link>
            <div className="flex flex-col gap-1 font-bold text-left">
              <div className="text-sm md:text-lg">
                Government Of Nepal Ministry of Communication and Information
                Technology Department of Information Technology
              </div>
              <div className="text-lg md:text-2xl">
                National Information Technology Center
              </div>
              <div className="text-xs md:text-sm">Singhadarbar, Kathmandu</div>
            </div>
          </div>
          <div className="hidden md:flex gap-2 justify-center items-center">
            <Image
              src={Nepal_flag_gif}
              alt="Nepal Flag"
              width={60}
              height={60}
              className="mb-2 md:mb-0"
            />
            <TimeAndDate />
          </div>
        </div>

        <NavLinks />
      </section>
    </>
  );
};

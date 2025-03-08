import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import nationalLogo from "../../../public/Emblem_of_Nepal.png";
import nationalHeadCenter from "../../../public/national_Information.jpg";
import domain from "../../../public/Domain Registration.png";
import internet from "../../../public/Internet.png";
import webhosting from "../../../public/webhosting.png";
import vpn from "../../../public/vpn.png";
import serverColocation from "../../../public/serverCo-location.png";
import Backup from "../../../public/Backup.png";

const highlights = [
  {
    title: "Notice of Bid Amendment on Contract IDMC/ NCB/G/2081-82/004",
    date: "February 28, 2025, 04:14 PM",
    src: "https://idmc.gov.np/content/13223/pac-bid-amendment/",
  },
  {
    title: "Notice of Bid Amendment on Contract IDMC/NCB/G/2081-82/003",
    date: "February 28, 2025, 04:13 PM",
    src: "https://idmc.gov.np/content/13224/ups-bid-amendment/",
  },
  {
    title:
      "Notice of inviting National Competitive Bidding through Online for the purchase of necessary technical materials in the Center",
    date: "February 16, 2025, 11:02 AM",
    src: "https://idmc.gov.np/content/13221/technical-equipments-tender/",
  },
  {
    title: "Notice related to transfer of websites hosted in cPanel to GIWMS",
    date: "February 14, 2025, 12:02 PM",
    src: "https://idmc.gov.np/content/13220/in-the-cpanel-s-websites-notice-to-transfer/",
  },
  {
    title: "Email Setup Process for Android",
    date: "December 18, 2024, 04:38 PM",
    src: "https://idmc.gov.np/content/13212/email-set-up-process-for-android/",
  },
  {
    title: "Status and Challenges of Information Technology in Nepal",
    date: "December 13, 2024, 11:32 AM",
    src: "https://idmc.gov.np/content/13211/the-state-and-challenge-of-information-and/",
  },
];

const news = [
  {
    title: "Notice of Bid Amendment on Contract IDMC/ NCB/G/2081-82/004",
    src: "https://idmc.gov.np/content/13223/pac-bid-amendment/",
    download:
      "https://giwmscdnone.gov.np/media/pdf_upload/Addendum_PAC_4uslg1m.pdf",
  },
  {
    title: "Notice of Bid Amendment on Contract IDMC/NCB/G/2081-82/003",
    src: "https://idmc.gov.np/content/13224/ups-bid-amendment/",
    download:
      "https://giwmscdnone.gov.np/media/pdf_upload/Addendum_UPS_gt55qs8.pdf",
  },
  {
    title:
      "Notice of inviting National Competitive Bidding through Online for the purchase of necessary technical materials in the Center",
    src: "https://idmc.gov.np/content/13221/technical-equipments-tender/",
    download:
      "https://giwmscdnone.gov.np/media/pdf_upload/Advertisement_egojp5p.pdf",
  },
];
export const HomePage = () => {
  return (
    <>
      <section className="relative">
        <Image
          src={nationalHeadCenter}
          alt="National Information Technology Office Building"
          className="h-20 md:h-96 w-full object-cover object-center"
        />
        <div className="px-3 py-4 md:px-4 md:py-6  absolute md:right-50 md:top-80 md:w-[800px] flex flex-col gap-2 items-center md:items-start bg-white/75 hover:bg-white dark:bg-black/75 hover:dark:bg-black">
          <span className="text-xl md:text-2xl font-bold">
            National Information Technology Center
          </span>
          <span className="text-xs">Office Building</span>
        </div>
      </section>

      <section className="pt-30 pb-4 md:p-20 flex flex-col gap-4 items-center justify-center">
        <div className="text-2xl font-bold">Our Services</div>
        <div className="md:w-1/2 grid grid-cols-2  md:grid-cols-3 gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <Image src={domain} alt="domain image" height={70} width={70} />
            <span>Domain Registration</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={internet} alt="internet image" height={70} width={70} />
            <span>Internet</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={webhosting}
              alt="web hosting image"
              height={70}
              width={70}
            />
            <span>Web Hosting</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={vpn} alt="Vpn image" height={70} width={70} />
            <span>VM / VPS</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src={serverColocation}
              alt="server co-location image"
              height={70}
              width={70}
            />
            <span>Server Co-location</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src={Backup} alt="backup image" height={70} width={70} />
            <span>Backup and Replication</span>
          </div>
        </div>
      </section>
      <section className="p-4 flex flex-col gap-8 items-center justify-center">
        <div className="text-2xl font-bold">Our Mission</div>
        <Image
          src={nationalHeadCenter}
          alt="National Information Technology Office Building"
          width={800}
        />
        <div className="px-4 grid grid-cols-1  md:grid-cols-3 gap-8 justify-center items-center font-bold text-justify">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl">Vision</span>
            <ul className="list-disc">
              <li>
                To be the leading digital transformation catalyst, driving
                efficient, transparent, and citizen-centric public services.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl">Mission</span>
            <ul className="list-disc">
              <li>
                To empower Nepal government through robust IT infrastructure,
                secure data management, and innovative e-governance solutions.
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl">Goal</span>
            <ul className="list-disc">
              <li>
                To establish Nepal as a digitally advanced nation by providing
                world-class IT services, fostering innovation, and securing
                critical government data.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="pb-6 pt-10 px-8 md:pt-20 md:px-30 flex flex-col md:flex-row gap-8  justify-center">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">Highlights</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc">
            {highlights.map((highlight, index) => (
              <Link
                href={highlight.src}
                key={index}
                target="_blank"
                className="flex flex-col gap-2"
              >
                <div className="font-semibold flex gap-2  hover:text-cyan-700">
                  <div className="border-2 border-black dark:border-white" />
                  <div>{highlight.title}</div>
                </div>
                <span className="text-sm">{highlight.date}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">latest News</div>
          <div className="flex flex-col gap-4">
            {news.map((news, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 md:flex-row"
              >
                <Image
                  src={nationalLogo}
                  alt="Emblem of Nepal"
                  width={50}
                  height={50}
                />
                <Link
                  href={news.src}
                  target="_blank"
                  className=" font-semibold hover:text-cyan-700"
                >
                  {news.title}
                </Link>
                <Link
                  href={news.download}
                  target="_blank"
                  className="px-5 h-[30px] flex items-center justify-center gap-1 text-sm rounded-2xl text-white bg-black hover:bg-black/75 dark:text-black dark:bg-white hover:dark:bg-white/75"
                >
                  <Download size={18} />
                  Download
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

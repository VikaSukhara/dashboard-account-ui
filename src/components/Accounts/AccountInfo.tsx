import { ExclamationCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const attentionItems = [
  {
    title: "Marine Survey Required",
    subtitle: "Scheduled for 06/12/2025",
    linkText: "Review details link →",
    linkHref: "#",
    linkClass: "text-[#3676de] text-[12px] hover:underline",
  },
  {
    title: "Loss Control Complete",
    subtitle: "Last inspection: 02/15/2025",
    linkText: "View report →",
    linkHref: "#",
    linkClass: "text-blue-400 hover:underline",
  },
  {
    title: "Claims Review Required",
    subtitle: "3 open claims // $245,000 TTL",
    linkText: "View claims →",
    linkHref: "#",
    linkClass: "text-blue-400 hover:underline",
  },
];

export default function AccountInfo() {
  return (
    <div className="flex justify-between sm:overflow-x-visible overflow-x-auto flex-col gap-10 lg:flex-row">
      <div className="flex items-center gap-4">
        <Image
          src="/images/accountLogo.png"
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full bg-white p-2"
        />
        <div>
          <h2 className="text-2xl text-[#e5e7eb]">Maritime Logistics Corp</h2>

          <div className="flex text-xs mt-1 text-[#768395] divide-x divide-[#2c3440]">
            <p className="text-sm text-[#e5e7eb] w-50">
              {" "}
              425 Harbor Boulevard, Suite 300, Seattle, WA 98104
            </p>

            <div className="px-4">
              <p>EXISTING ACCOUNT:</p>
              <span className="text-white">54383</span>
            </div>

            <div className="px-4">
              <p>BROKER:</p>
              <span className="text-white">Marsh McLennan</span>
            </div>

            <div className="px-4">
              <p>UNDERWRITER:</p>
              <span className="text-white">Kate Johnson</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[#dfba5a] text-yellow-300 rounded-[20px] p-3 w-[560px] bg-[#1e2233]">
        <div className="flex items-center gap-1 mb-2">
          <ExclamationCircleIcon className="w-4 h-4 text-yellow-300" />
          <span>Needs Attention</span>
        </div>
        <div className="flex justify-between text-sm text-white">
          {attentionItems.map(
            ({ title, subtitle, linkText, linkHref, linkClass }, index) => (
              <div key={index}>
                <p className="text-gray-300">{title}</p>
                <p className="text-[12px] text-[#4c505f]">{subtitle}</p>
                <a href={linkHref} className={linkClass}>
                  {linkText}
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

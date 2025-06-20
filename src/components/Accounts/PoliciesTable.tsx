"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export function PoliciesTable() {
  const policies = [
    {
      icon: "🚢",
      line: "Marine Cargo",
      policyNo: "17030212",
      effDate: "6/30/2026",
      expDate: "6/30/2027",
      status: "Active",
      expiringTech: "$587,500",
      expiringPremium: "$605,000",
      renewalToTech: "$610,000",
      renewalTech: "$620,000",
      renewalPremium: "$625,000",
      rateChange: "3.3%",
      lossRatio: "22%",
      color: "text-green-500 bg-green-900/60",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-green-400" />,
      line: "General Liability",
      policyNo: "4631092",
      effDate: "6/30/2026",
      expDate: "6/30/2027",
      status: "Active",
      expiringTech: "$160,000",
      expiringPremium: "$165,000",
      renewalToTech: "$170,000",
      renewalTech: "$172,500",
      renewalPremium: "$175,000",
      rateChange: "6.1%",
      lossRatio: "55%",
      color: "text-yellow-400 bg-yellow-800/60",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-purple-400" />,
      line: "Workers Comp",
      policyNo: "9182371",
      effDate: "Pending",
      expDate: "Pending",
      status: "Pending",
      expiringTech: "$0",
      expiringPremium: "$0",
      renewalToTech: "$73,500",
      renewalTech: "$75,000",
      renewalPremium: "$75,000",
      rateChange: "N/A",
      lossRatio: "N/A",
      color: "",
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-400" />,
      line: "Umbrella",
      policyNo: "5274936",
      effDate: "13/03/2026",
      expDate: "13/03/2027",
      status: "Active",
      expiringTech: "$245,000",
      expiringPremium: "$250,000",
      renewalToTech: "$267,500",
      renewalTech: "$270,000",
      renewalPremium: "$275,000",
      rateChange: "10.0%",
      lossRatio: "78%",
      color: "text-red-500 bg-red-900/60",
    },
  ];

  const [activePanel, setActivePanel] = useState<null | "Filter" | "Group">(
    null
  );

  const [tooltipVisibleIndex, setTooltipVisibleIndex] = useState<number | null>(
    null
  );

  const togglePanel = (panelName: "Filter" | "Group") => {
    setActivePanel((prev) => (prev === panelName ? null : panelName));
  };
  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-6">Policies</h2>

      <div className="bg-[#1e2233] rounded-2xl p-6  border border-[#43485A] flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 ">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border border-[#2e3d66] rounded-full px-4 py-1 text-sm placeholder-[#65729A] focus:outline-none"
          />
          <button
            onClick={() => togglePanel("Filter")}
            className={`px-5 py-1.5 rounded-full border text-sm hover:bg-[#25305a] ${
              activePanel === "Filter"
                ? "border-[#6bb5ff] text-[#6bb5ff]"
                : "border-[#346bc8] text-[#346bc8]"
            }`}
          >
            Filter
          </button>
          <button
            onClick={() => togglePanel("Group")}
            className={`px-5 py-1.5 rounded-full border text-sm hover:bg-[#25305a] ${
              activePanel === "Group"
                ? "border-[#6bb5ff] text-[#6bb5ff]"
                : "border-[#346bc8] text-[#346bc8]"
            }`}
          >
            Group
          </button>
        </div>
        {activePanel === "Filter" && (
          <div className="bg-[#2a2f45] p-4 rounded-xl text-white mb-6">
            Filtering options will appear here.
          </div>
        )}
        {activePanel === "Group" && (
          <div className="bg-[#2a2f45] p-4 rounded-xl text-white mb-6">
            Grouping options will appear here.
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="text-[#6c789b] border-b border-[#2a2f48]">
              <tr className="bg-[#252a3d] text-[#8e9cb2] ">
                <th className="py-2 pl-5 text-[12px]">Line</th>
                <th className="py-2 px-4 text-[12px]">Eff. Date</th>
                <th className="py-2 px-4 text-[12px]">Exp. Date</th>
                <th className="py-2 px-4 text-[12px]">Status</th>
                <th className="py-2 px-4 text-[12px]">Expiring Tech</th>
                <th className="py-2 px-4 text-[12px]">Expiring Premium</th>
                <th className="py-2 px-4 text-[12px]">Renewal to Tech</th>
                <th className="py-2 px-4 text-[12px]">Renewal Tech</th>
                <th className="py-2 px-4 text-[12px]">Renewal Premium</th>
                <th className="py-2 px-4 text-[12px]">Rate Change</th>
                <th className="py-2 px-4 text-[12px]">Loss Ratio</th>
                <th className="py-2 px-4 text-[12px]"></th>
              </tr>
            </thead>
            <tbody>
              {policies.map((p, idx) => (
                <tr
                  key={idx}
                  className={cn(
                    "border-b border-[#2a2f48]",
                    idx % 2 === 1 && "bg-[#252a3d]"
                  )}
                >
                  <td className="py-3 pr-4 w-[200px]">
                    <div className="flex pl-2 flex-col">
                      <span className="font-semibold text-white flex items-center gap-2">
                        <span className="text-lg">{p.icon}</span>
                        {p.line}
                      </span>
                      <span className="text-[#6c789b] text-xs mt-0.5">
                        {p.policyNo}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{p.effDate}</td>
                  <td className="py-3 px-4">{p.expDate}</td>
                  <td className="py-3 px-4 w-[100px]">
                    <div className="flex items-center justify-start">
                      <span
                        className={`text-sm font-medium ${
                          p.status === "Active"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }`}
                      >
                        ● {p.status}
                      </span>
                    </div>
                  </td>

                  <td className="py-3 px-4">{p.expiringTech}</td>
                  <td className="py-3 px-4">{p.expiringPremium}</td>
                  <td className="py-3 px-4">{p.renewalToTech}</td>
                  <td className="py-3 px-4">{p.renewalTech}</td>
                  <td className="py-3 px-4 font-bold text-white">
                    {p.renewalPremium}
                  </td>
                  <td className="py-3 px-4 text-red-400">{p.rateChange}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${p.color}`}
                    >
                      {p.lossRatio}
                    </span>
                  </td>
                  <td className="py-[6px] pr-2 text-right relative">
                    <span
                      className="w-5 h-5 flex rounded-full border border-white flex-col justify-center items-center hover:bg-[#363C4A] cursor-pointer transition relative"
                      onMouseEnter={() => setTooltipVisibleIndex(idx)}
                      onMouseLeave={() => setTooltipVisibleIndex(null)}
                    >
                      <svg width={10} height={10} fill="none">
                        <circle cx="5" cy="2" r="0.8" fill="#A3AED0" />
                        <circle cx="5" cy="5" r="0.8" fill="#A3AED0" />
                        <circle cx="5" cy="8" r="0.8" fill="#A3AED0" />
                      </svg>
                      {tooltipVisibleIndex === idx && (
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-300 text-xs text-black whitespace-nowrap shadow-lg z-10">
                          Details
                        </div>
                      )}
                    </span>
                  </td>
                </tr>
              ))}

              <tr className="border-t border-[#2a2f48]">
                <td className="py-3 pr-4 font-semibold text-white">
                  TOTAL (4)
                </td>
                <td colSpan={3}></td>
                <td className="py-3 px-4">$992,500</td>
                <td className="py-3 px-4">$1,020,000</td>
                <td className="py-3 px-4">$1,121,000</td>
                <td className="py-3 px-4">$1,137,500</td>
                <td className="py-3 px-4 font-bold text-white">$1,150,000</td>
                <td className="py-3 px-4 text-red-400">6.9%</td>
                <td className="py-3 px-4">
                  <span className="text-xs px-2 py-1 rounded-full font-semibold text-yellow-400 bg-yellow-800/60">
                    58.3%
                  </span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

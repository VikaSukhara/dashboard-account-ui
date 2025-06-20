import { cn } from "@/lib/utils";
import { useState } from "react";

export function MyAccounts() {
  const accounts = [
    {
      name: "NAMEX Tech Solutions",
      type: "Large Enterprise",
      line: "D&O Liability",
      broker: "Willis Towers",
      renewal: "04/16/2025",
      premium: "$2.3M",
      ratedPremium: "$2.8M",
      lossRatio: "32%",
      lossColor: "bg-green-500",
      appetite: "HIGH",
      status: "Active",
      triage: 180,
      win: "Very Strong",
      winDots: 5,
    },
    {
      name: "Alliance Healthcare Systems",
      type: "Mid-Market",
      line: "Medical Malpractice",
      broker: "Aon Risk",
      renewal: "06/30/2025",
      premium: "$1.7M",
      ratedPremium: "$1.9M",
      lossRatio: "38%",
      lossColor: "bg-yellow-400",
      appetite: "MEDIUM",
      status: "Under review",
      triage: 165,
      win: "Strong",
      winDots: 4,
    },
    {
      name: "Maritime Logistics Corp",
      type: "Shipping/Logistics",
      line: "Marine Cargo",
      broker: "Marsh McLennan",
      renewal: "09/05/2025",
      premium: "$875K",
      ratedPremium: "$920K",
      lossRatio: "25%",
      lossColor: "bg-green-500",
      appetite: "HIGH",
      status: "Active",
      triage: 182,
      win: "Very Strong",
      winDots: 5,
    },
    {
      name: "GreenField Energy Ltd",
      type: "Energy Sector",
      line: "Environmental Liability",
      broker: "Aon Risk",
      renewal: "07/22/2025",
      premium: "$1.2M",
      ratedPremium: "$1.4M",
      lossRatio: "67%",
      lossColor: "bg-red-500",
      appetite: "CAUTIOUS",
      status: "Under review",
      triage: 158,
      win: "Medium",
      winDots: 3,
    },
  ];

  const [activeAction, setActiveAction] = useState("All");
  const [tooltipVisibleIndex, setTooltipVisibleIndex] = useState<number | null>(
    null
  );

  return (
    <section className="bg-[#1e2233]  border border-[#43485A] p-6 rounded-2xl">
      <div className="flex flex-wrap items-center mb-6 gap-4">
        <h2 className="text-xl font-medium">My accounts</h2>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#232838] text-white placeholder-gray-400 px-4 w-[220px] rounded-full focus:outline-none"
          />
          {["Filter", "Sort", "Group", "+ New"].map((label) => (
            <button
              key={label}
              onClick={() =>
                setActiveAction((prev) => (prev === label ? "All" : label))
              }
              className={`px-6 py-1 rounded-full border border-blue-500 text-sm font-medium ${
                label === "+ New"
                  ? "bg-blue-600 text-white"
                  : "text-blue-500 hover:bg-blue-600/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {activeAction === "Filter" && (
        <div className="bg-[#2a2f45] p-4 rounded-xl text-white my-4">
          Filtering options will appear here.
        </div>
      )}
      {activeAction === "Sort" && (
        <div className="bg-[#2a2f45] p-4 rounded-xl text-white my-4">
          Sorting options will appear here.
        </div>
      )}
      {activeAction === "Group" && (
        <div className="bg-[#2a2f45] p-4 rounded-xl text-white my-4">
          Grouping options will appear here.
        </div>
      )}
      {activeAction === "+ New" && (
        <div className="bg-[#2a2f45] p-4 rounded-xl text-white my-4">
          New account creation form will appear here.
        </div>
      )}

      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-400 border-b border-gray-700">
            <tr className="bg-[#252a3d] px-2">
              <th className="py-2 block text-[12px] text-[#8694a8] font-normal pl-2">
                ACCOUNT NAME/TYPE
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">LINE</th>
              <th className="text-[12px] text-[#8694a8] font-normal">BROKER</th>
              <th className="text-[12px] text-[#8694a8] font-normal">
                RENEWAL DATE
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">
                PREMIUM
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">
                RATED PREMIUM
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">
                LOSS RATIO
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">
                APPETITE
              </th>
              <th className="text-[12px] text-[#8694a8] font-normal">STATUS</th>
              <th className="text-[12px] text-[#8694a8] font-normal">TRIAGE</th>
              <th className="text-[12px] text-[#8694a8] font-normal pl-3">
                WINNABILITY
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, i) => (
              <tr
                key={i}
                className={cn(
                  "border-b border-gray-800 hover:bg-[#1C2236]",

                  i % 2 === 1 && "bg-[#252a3d]"
                )}
              >
                <td className="py-[6px]">
                  <div className="font-medium text-white pl-2 text-[12px]">
                    {acc.name}
                  </div>
                  <div className="text-gray-400 pl-2 text-[12px]">
                    {acc.type}
                  </div>
                </td>
                <td className="text-[12px]">{acc.line}</td>
                <td className="text-[12px]">{acc.broker}</td>
                <td className="text-[12px]">{acc.renewal}</td>
                <td className="text-[#3b82f6] text-[12px]">{acc.premium}</td>
                <td className="text-[12px] pl-[34px]">{acc.ratedPremium}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${acc.lossColor}`}
                  >
                    {acc.lossRatio}
                  </span>
                </td>
                <td>
                  <span className="w-[90px] text-center block py-1 rounded-full bg-[#1d2a58] text-xs">
                    {acc.appetite}
                  </span>
                </td>
                <td>
                  <span
                    className={`flex items-center gap-2 text-xs ${
                      acc.status === "Active"
                        ? "text-green-400"
                        : "text-blue-400"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current" />
                    {acc.status}
                  </span>
                </td>
                <td>
                  <div className="px-1 py-1 rounded-full text-center border border-[#3774da] text-[#3774da] text-[12px]">
                    {acc.triage}
                  </div>
                </td>
                <td>
                  <div className="flex items-center pl-3 gap-1">
                    {[...Array(5)].map((_, j) => (
                      <div
                        key={j}
                        className={`w-2 h-2 rounded-full ${
                          j < acc.winDots ? "bg-blue-400" : "bg-gray-600"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-blue-400 ml-1">
                      {acc.win}
                    </span>
                  </div>
                </td>
                <td className="py-[6px] pr-2 text-right relative">
                  <span
                    className="w-5 h-5 flex rounded-full border border-white flex-col justify-center items-center hover:bg-[#363C4A] cursor-pointer transition relative"
                    onMouseEnter={() => setTooltipVisibleIndex(i)}
                    onMouseLeave={() => setTooltipVisibleIndex(null)}
                  >
                    <svg width={10} height={10} fill="none">
                      <circle cx="5" cy="2" r="0.8" fill="#A3AED0" />
                      <circle cx="5" cy="5" r="0.8" fill="#A3AED0" />
                      <circle cx="5" cy="8" r="0.8" fill="#A3AED0" />
                    </svg>
                    {tooltipVisibleIndex === i && (
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded bg-gray-300 text-xs text-black whitespace-nowrap shadow-lg z-10">
                        Details
                      </div>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

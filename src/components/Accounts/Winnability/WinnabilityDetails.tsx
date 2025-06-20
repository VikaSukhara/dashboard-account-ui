"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";

import { PositionBar } from "./PositionBar";

export function WinnabilityDetails() {
  const increasing = [
    { name: "Brokers relationship", value: "+28%" },
    { name: "Loss history", value: "+22%" },
    { name: "Industry growth", value: "+16%" },
    { name: "Multiline opportunity", value: "+11%" },
  ];

  const decreasing = [
    { name: "Premium pricing", value: "-24%" },
    { name: "Total exposure", value: "-18%" },
    { name: "Loss ratio trend", value: "-13%" },
    { name: "Market competition", value: "-5%" },
  ];

  return (
    <div className="lg:flex lg:flex-row lg:gap-[20px]">
      <div className="flex-1 bg-[#23283A] rounded-2xl p-6 lg:max-w-[450px]">
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-[22px] h-[22px] rounded-full flex items-center justify-center"
            style={{
              border: "2px solid #3bb979",
              backgroundColor: "transparent",
            }}
          >
            <ArrowUpCircleIcon className="w-[16px] h-[16px] text-[#3bb979]" />
          </div>
          <h3 className="text-lg text-white">Increasing Winnability</h3>
        </div>
        <div className="space-y-4">
          {increasing.map((item, idx) => (
            <div
              key={item.name}
              className="flex flex-col md:flex-row md:items-center gap-3"
            >
              <div className="flex gap-2 md:block">
                {" "}
                <span className="w-7 h-7 rounded-full bg-[#23283A] border-2 border-[#31C491] flex items-center justify-center text-base font-semibold text-[#31C491]">
                  {idx + 1}
                </span>
                <span className="flex-1 text-white">{item.name}</span>
              </div>
              <div className="flex flex-1 items-center ml-2 gap-2">
                <PositionBar
                  value={parseInt(item.value)}
                  label={item.value}
                  height="16px"
                  background="#1A2235"
                  gradient="linear-gradient(90deg, #273542 0%, #3ab577 100%)"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-[#23283A] rounded-2xl p-6 lg:max-w-[450px] mt-5 md:mt-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-[22px] h-[22px] rounded-full flex items-center justify-center border-2 border-[#FFD066] bg-transparent">
            <ArrowDownCircleIcon className="w-[16px] h-[16px] text-[#fdd261]" />
          </div>
          <h3 className="text-lg text-white">Decreasing Winnability</h3>
        </div>
        <div className="space-y-4">
          {decreasing.map((item, idx) => (
            <div
              key={item.name}
              className="flex flex-col md:flex-row md:items-center gap-3"
            >
              <div className="flex gap-2 md:block">
                {" "}
                <span className="w-7 h-7 rounded-full bg-[#23283A] border-2 border-[#FFD066] flex items-center justify-center text-base font-semibold text-[#FFD066]">
                  {idx + 1}
                </span>
                <span className="flex-1 text-white">{item.name}</span>
              </div>
              <div className="flex flex-1 items-center ml-2 gap-2">
                <PositionBar
                  value={Math.abs(parseInt(item.value))}
                  label={item.value}
                  width="150px"
                  height="16px"
                  background="#1A2235"
                  gradient="linear-gradient(90deg, #30323f 0%, #f9cf60 100%)"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

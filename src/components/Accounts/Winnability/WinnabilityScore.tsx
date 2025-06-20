"use client";
import { PositionBar } from "./PositionBar";

export function WinnabilityScore() {
  return (
    <div>
      <h2 className="text-[28px] font-medium mb-2">Winnability</h2>
      <div className="flex flex-col md:flex-row  gap-2">
        <div className="w-full lg:w-[305px] bg-[#23283A] h-[120px] rounded-2xl p-4 flex flex-col">
          <p className="text-sm text-[#A0A9BD] mb-1">Overall Score</p>
          <div className="flex flex-row items-center gap-3">
            <span className="lg:text-5xl  text-[20px] font-semibold text-white leading-tight">
              82%
            </span>
            <div className="flex flex-row gap-1 border border-[#3b82f6] p-2 items-center rounded-[16px]">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full border border-[#2BA6F6] ${
                      i <= 5 ? "bg-[#2BA6F6]" : ""
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#2BA6F6] text-sm">Very Strong</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[305px] bg-[#23283A] h-[120px] rounded-2xl p-4 flex flex-col">
          <p className="text-sm text-[#A0A9BD] mb-1">Historical trend</p>
          <div className="h-16 flex items-center">
            <svg width="100%" height="48" viewBox="0 0 130 48" fill="none">
              <polyline
                points="0,40 16,30 32,32 48,22 64,28 80,18 96,28 112,12 130,24"
                fill="none"
                stroke="#4298F3"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs text-[#7B8697] mt-2">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>Now</span>
          </div>
        </div>

        <div className="w-full lg:w-[305px] bg-[#23283A] h-[120px] rounded-2xl p-4 flex flex-col h-full">
          <p className="text-sm text-[#A0A9BD] mb-1">Position</p>
          <div className="pt-1">
            <PositionBar
              value={82}
              label="Your score: 82%"
              width="150px"
              height="8px"
              gradient="linear-gradient(90deg, #313b59 0%, #3a7ff1 100%)"
            />
            <PositionBar
              value={68}
              label="Market Avg: 68%"
              width="150px"
              height="8px"
              gradient="linear-gradient(90deg, #313b59 0%, #3a7ff1 100%)"
            />

            <PositionBar
              value={88}
              label="Top competitor: 88%"
              width="150px"
              height="8px"
              gradient="linear-gradient(90deg, #313b59 0%, #3a7ff1 100%)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { cn } from "@/lib/utils";
import { PositionBar } from "../Accounts/Winnability/PositionBar";

type GoalProps = {
  title: string;
  target?: string;
  value?: string;
  targetPercent?: number;
  valuePercent?: number;
  diff?: string;
  diffColor?: string;
  ranges?: { width: string; color: string }[];
  barPercent?: number;
};

function GoalBar(props: GoalProps) {
  if (props.value && props.target && typeof props.barPercent === "number") {
    return (
      <div className="mb-6">
        <div className="text-[10px] text-gray-400">{props.title}</div>
        <div className="flex items-center gap-2">
          <PositionBar
            value={props.barPercent}
            label={props.target}
            width="150px"
            height="16px"
            gradient="linear-gradient(90deg, #313b59 0%, #3a7ff1 100%)"
          />
        </div>
        <div className="ml-2 mt-1 text-xs text-gray-400">
          {Math.round(props.barPercent)}%
        </div>
      </div>
    );
  }

  if (
    typeof props.valuePercent === "number" &&
    typeof props.targetPercent === "number" &&
    props.value &&
    props.target &&
    props.ranges
  ) {
    const greenRange = props.ranges.find((r) => r.color === "bg-[#22B573]");
    const greenIndex = props.ranges.findIndex(
      (r) => r.color === "bg-[#22B573]"
    );

    let leftOffset = 0;
    if (greenIndex !== -1) {
      for (let i = 0; i < greenIndex; i++) {
        leftOffset += parseFloat(props.ranges[i].width);
      }
    }

    const greenArrowPosition = greenRange
      ? leftOffset + parseFloat(greenRange.width) / 2
      : props.valuePercent;

    return (
      <div className="mb-6">
        <div className="text-[10px] text-gray-400">{props.title}</div>

        <div className="text-[10px] text-gray-400 text-center">
          {props.target}
        </div>

        <div className="h-3 flex items-center">
          <div
            className="transition-all"
            style={{ marginLeft: `${props.targetPercent}%` }}
          >
            <svg
              className="w-3 h-3 mx-auto rotate-180"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path d="M5 0L0 6H10L5 0Z" fill="#3FA9F5" />
            </svg>
          </div>
        </div>

        <div className="relative h-5 w-full rounded-full overflow-hidden flex">
          {props.ranges.map((range, i) => (
            <div
              key={i}
              className={cn("h-full", range.color)}
              style={{ width: range.width }}
            />
          ))}

          <div
            className="absolute top-0 left-0 h-full flex items-center justify-center text-xs font-bold text-white"
            style={{ width: `${props.valuePercent}%` }}
          >
            {props.value}
          </div>
        </div>

        <div className="relative h-3">
          <div
            className="absolute top-0 transform -translate-x-1/2"
            style={{ left: `${greenArrowPosition}%` }}
          >
            <svg className="w-3 h-3" viewBox="0 0 10 6" fill="none">
              <path d="M5 0L0 6H10L5 0Z" fill="#22B573" />
            </svg>
          </div>
        </div>

        <div className={cn("text-[10px] text-center", props.diffColor)}>
          {props.diff}
        </div>
      </div>
    );
  }

  return null;
}

export function PortfolioGoals() {
  const goals: GoalProps[] = [
    {
      title: "PORTFOLIO LOSS RATIO TARGET",
      target: "TG:55%",
      targetPercent: 55,
      value: "48.2%",
      valuePercent: 48.2,
      diff: "-6.8% (GOOD)",
      diffColor: "text-[#22B573]",
      ranges: [
        { width: "55%", color: "bg-[#22B573]" },
        { width: "15%", color: "bg-[#FFD066]" },
        { width: "30%", color: "bg-[#E94E4E]" },
      ],
    },
    {
      title: "RENEWAL RETENTION",
      target: "TG:85-90%",
      targetPercent: 87.5,
      value: "88%",
      valuePercent: 88,
      diff: "ON TARGET",
      diffColor: "text-[#22B573]",
      ranges: [
        { width: "15%", color: "bg-[#E94E4E]" },
        { width: "30%", color: "bg-[#22B573]" },
        { width: "55%", color: "bg-[#FFD066]" },
      ],
    },
    {
      title: "NEW BUSINESS TARGET",
      value: "$8.1M",
      target: "$12M",
      barPercent: (8.1 / 12) * 100,
    },
    {
      title: "ANNUAL GWP TARGET",
      value: "$28.4M",
      target: "$42M",
      barPercent: (28.4 / 42) * 100,
    },
  ];

  return (
    <div className="bg-[#1e2233] w-full lg:max-w-[236px] border border-[#43485A] rounded-2xl p-4 text-whit pb-0">
      <h2 className="text-xl mb-4">Portfolio goals</h2>
      {goals.map((goal, idx) => (
        <GoalBar key={idx} {...goal} />
      ))}
    </div>
  );
}

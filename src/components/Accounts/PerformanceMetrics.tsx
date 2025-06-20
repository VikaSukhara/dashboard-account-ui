import { PositionBar } from "./Winnability/PositionBar";

const stats = [
  {
    title: "Winnability",
    mainValue: "Very Strong",
    subText: null,
    linkText: "See all factors →",
    linkHref: "#",
  },
  {
    title: "Loss Ratio",
    mainValue: "25%",
    subText: "vs 42% target",
    linkText: "View history →",
    linkHref: "#",
  },
  {
    title: "Premium Growth",
    mainValue: "12.4%",
    subText: "$123M vs $150M Target",
    linkText: "View trend →",
    linkHref: "#",
  },
];

const exposures = [
  {
    label: "Marine Cargo",
    percent: 71.4,
    barWidth: "71%",
    barColor: "bg-blue-600",
  },
  {
    label: "General Liability",
    percent: 20,
    barWidth: "20%",
    barColor: "bg-blue-400",
  },
  {
    label: "Workers Comp",
    percent: 8.6,
    barWidth: "8%",
    barColor: "bg-blue-300",
  },
];

export function PerformanceMetrics() {
  return (
    <div className="text-white overflow-x-auto">
      <h2 className="text-[24px] lg:text-[28px] font-medium mb-2">
        Performance Metrics
      </h2>
      <div className="flex gap-4 ld:justify-between flex-col md:flex-row">
        {stats.map(
          ({ title, mainValue, subText, linkText, linkHref }, index) => (
            <div
              key={index}
              className="bg-[#1e2233] p-4 rounded-xl lg:w-[280px] w-full flex flex-col justify-between"
              style={{ height: "200px" }}
            >
              <div>
                {title === "Winnability" ? (
                  <>
                    <div className="flex items-baseline gap-4">
                      {" "}
                      <p className="text-[20px] text-gray-300 mb-1">{title}</p>
                      <div className="flex gap-1 mb-3">
                        <span className="w-2 h-2 rounded-full bg-[#1e40af]" />
                        <span className="w-2 h-2 rounded-full bg-[#1e40af]" />
                        <span className="w-2 h-2 rounded-full bg-[#1e40af]" />
                        <span className="w-2 h-2 rounded-full bg-[#1e40af]" />
                      </div>
                    </div>
                    <p className="text-3xl font-light">{mainValue}</p>
                  </>
                ) : (
                  <>
                    <p className="text-[20px] text-gray-300 mb-1">{title}</p>
                    <div className="flex items-center">
                      <p className="text-3xl font-light">{mainValue}</p>
                      {subText && (
                        <p className="text-sm text-gray-400 ml-2">{subText}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
              <a
                href={linkHref}
                className="text-blue-400 text-sm mt-2 inline-block"
              >
                {linkText}
              </a>
            </div>
          )
        )}

        <div
          className="bg-[#1e2233] p-4 rounded-xl lg:w-[380px] flex flex-col justify-between"
          style={{ height: "160px" }}
        >
          <p className="text-[20px] text-gray-300 mb-2 max-h-[150px]">
            Exposure Distribution
          </p>
          <div className="space-y-1">
            {exposures.map(({ label, percent }, i) => (
              <PositionBar
                key={i}
                value={percent}
                label={`${label}: ${percent}%`}
                width="150px"
                height="16px"
                gradient="linear-gradient(90deg, #313a57 0%, #3a7ff0 100%)"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

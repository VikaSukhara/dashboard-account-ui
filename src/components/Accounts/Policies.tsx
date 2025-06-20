export function Policies() {
  const policies = [
    {
      name: "Marine Cargo",
      premium: "$625,000",
      date: "6/30/2026",
      icon: "🚢",
    },
    {
      name: "General Liability",
      premium: "$175,000",
      date: "6/30/2026",
      icon: "🛡️",
    },
    { name: "Workers Comp", premium: "$75,000", date: "---", icon: "⚙️" },
    { name: "Property", premium: "$64,829.83", date: "---", icon: "🏢" },
    { name: "Umbrella", premium: "$275,000", date: "13/03/2026", icon: "🌂" },
    { name: "Property", premium: "$64,829.83", date: "---", icon: "🏢" },
    { name: "Umbrella", premium: "$275,000", date: "13/03/2026", icon: "🌂" },
    { name: "Property", premium: "$64,829.83", date: "---", icon: "🏢" },
    { name: "Umbrella", premium: "$275,000", date: "13/03/2026", icon: "🌂" },
  ];

  return (
    <div className="py-6 text-white">
      <h2 className="text-[24px] lg:text-[28px] font-medium mb-2">Policies</h2>
      <div className="overflow-x-auto">
        <div className="gap-4 border border-[#43485A] py-6 bg-[#1e2233] md:flex-row md:flex  px-3 lg:flex-nowrap  ld:gap-4 md:flex-wrap md:gap-1 rounded-[16px] flex flex-col justify-between lg:flex-row">
          {policies.map((p, index) => (
            <div
              key={index}
              className="bg-[#252a3d] p-4 rounded-xl lg:max-w-[330px] md:max-w-[150px]  w-full shrink-0"
            >
              <p className="text-lg font-medium mb-1">
                {p.icon} {p.name}
              </p>
              <p className="text-sm text-gray-400">Premium: {p.premium}</p>
              <p className="text-sm text-gray-400">Eff.Date: {p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

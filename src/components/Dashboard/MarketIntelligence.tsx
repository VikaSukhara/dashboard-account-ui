export function MarketIntelligence() {
  const items = [
    {
      text: "Rate hardening in Cyber market - +15% YoY",
      color: "bg-[#E94E4E]",
    },
    {
      text: "New capacity entering Marine market",
      color: "bg-[#FFD066]",
    },
    {
      text: "Environmental regulatory changes in CA",
      color: "bg-[#3763F4]",
    },
  ];

  return (
    <div className="bg-[#1e2233] border border-[#43485A] rounded-2xl p-3 lg:max-w-[236px]  lg:w-[236px] h-[205px]">
      <h2 className="text-white text-xl font-medium mb-2">
        Market intelligence
      </h2>
      <ul className="flex flex-col gap-0">
        {items.map((item, idx) => (
          <li key={idx}>
            <div className="flex items-start gap-3 p-1">
              <span
                className={`mt-1 rounded-full w-4 h-4 ${item.color} flex-shrink-0`}
              />
              <span className="text-[12px] text-white leading-snug">
                {item.text}
              </span>
            </div>
            {idx < items.length - 1 && (
              <div className="border-b border-[#43485A] mb-[2px]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

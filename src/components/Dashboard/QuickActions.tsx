export function QuickActions() {
  const actions = [
    "New Submission",
    "Quote Builder",
    "Risks Models",
    "Documents Upload",
  ];

  return (
    <div className="bg-[#1e2233] border border-[#43485A] rounded-2xl p-3 lg:max-w-[236px] lg:w-[236px] h-[205px]">
      <h2 className="text-white text-xl font-medium mb-2">Quick actions</h2>
      <div className="flex flex-col gap-1">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className=" bg-[#4298F3] hover:bg-[#3181DB] text-white rounded-full text-[12px] p-[6px] transition"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
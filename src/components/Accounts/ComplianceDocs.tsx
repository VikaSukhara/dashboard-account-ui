import { CheckIcon } from "@heroicons/react/24/solid";

export function ComplianceDocs() {
  const items = [
    "KYC verification",
    "Regulatory approval",
    "Required Documentation",
    "Financial Verification",
  ];

  return (
    <div className="sm:overflow-x-visible overflow-x-auto rounded-2xl w-full overflow-x-auto flex flex-col justify-center">
      <div className="flex items-center justify-between lg:flex-col lg:items-start gap-2  mb-2">
        <h2 className="text-[24px] lg:text-[28px] font-medium">
          Compliance & Documentation
        </h2>
        <a href="#" className="text-blue-400 text-sm">
          See history →
        </a>
      </div>
      <div className="bg-[#1e2233] border border-[#43485A] p-4 md:p-6  ld:py-10 rounded-2xl h-[150px]">
        <ul className="grid grid-cols-2 gap-y-6 text-white text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border border-green-400 flex items-center justify-center">
                <CheckIcon className="w-3 h-3 text-green-400" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

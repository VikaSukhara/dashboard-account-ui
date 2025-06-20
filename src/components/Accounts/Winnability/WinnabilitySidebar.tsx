"use client";

export default function WinnabilitySidebar() {
  return (
    <aside className="md:min-w-[310px] md:max-w-[340px] pl-6 pr-4">
      <div className="bg-[#23283A] rounded-2xl px-6 py-6 mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[16px] text-white">DESICION SUPPORT</span>
          <span className="w-8 h-8 border border-[#C9D3E2] rounded-lg flex items-center justify-center text-white font-medium text-base">4</span>
        </div>
        <ul className="space-y-2 pl-4">
          <li>
            <a href="#" className="text-[#4298F3] text-[12px]">Winnability</a>
          </li>
          <li>
            <span className="block text-[#ECEFFC] text-[12px]">Exposure Review &amp; Suggested Coverage</span>
          </li>
          <li>
            <span className="block text-[#ECEFFC] text-[12px]">Portfolio Strategy Alignment</span>
          </li>
          <li>
            <span className="block text-[#ECEFFC] text-[12px]">Broker Analytics</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-[16px] text-white px-6">RISK ASSESSMENT</span>
        <span className="w-8 h-8 bg-[#23283A] rounded-lg flex items-center justify-center text-white font-medium text-base">6</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[16px] text-white px-6">DOCUMENTS AND COMPLIANCE</span>
        <span className="w-8 h-8 bg-[#23283A] rounded-lg flex items-center justify-center text-white font-medium text-base">2</span>
      </div>
    </aside>
  );
}
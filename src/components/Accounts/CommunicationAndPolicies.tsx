"use client";

import { useState } from "react";
import { Paperclip } from "lucide-react";

export function CommunicationAndPolicies() {
  const communicationItems = [
    {
      status: "NEW",
      title: "Policy Renewal - Auto Insurance 5/15/25",
      author: "Michael Roberts",
      date: "Apr 5",
      text: "Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage options before proceeding with the renewal? I’ve attached the current policy details and premium breakdown for your reference.",
      attachments: 3,
      showReply: true,
    },
    {
      status: "NEW",
      title: "New Quote Request - Workers Comp Insurance",
      author: "Sarah Chen",
      date: "Apr 5",
      text: "Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I’ve completed the initial risk assessment based...",
      attachments: 3,
      showReply: true,
    },
    {
      status: "Responded",
      title: "Fwd: New Submission - BPM Real Estate - EFF 4/1/24",
      author: "Joshua Dunmire",
      date: "Mar 25",
      text: "Arthur, attached please find our submission for the above mentioned applicant. We have...",
      attachments: 4,
      showReply: false,
    },
    {
      status: null,
      title: "New Business: BPM Real Estate Group, LLC",
      author: "Isabel Kreller",
      date: "Feb 28",
      text: "Hello Arthur, I am pleased to present you with a submission on this client’s upcoming...",
      attachments: 5,
      showReply: true,
    },
  ];

  const [openReply, setOpenReply] = useState<number | null>(null);
  const [replyText, setReplyText] = useState<Record<number, string>>({});

  const [activePanel, setActivePanel] = useState<null | "Filter" | "Group">(
    null
  );

  const handleReplyChange = (index: number, value: string) => {
    setReplyText((prev) => ({ ...prev, [index]: value }));
  };

  const handleSend = (index: number) => {
    alert(`Sent reply: ${replyText[index] || ""}`);
    setReplyText((prev) => ({ ...prev, [index]: "" }));
    setOpenReply(null);
  };

  const renderCard = (item: (typeof communicationItems)[0], index: number) => (
    <div
      key={index}
      className={`rounded-2xl p-7 ${
        index < 2 ? "border border-[#346bc8] bg-[#23283A]" : "bg-[#252a3d]"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
        {item.status && (
          <span
            className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${
              item.status === "NEW"
                ? "bg-[#346bc8]"
                : item.status === "Responded"
                ? "bg-[#2972f3]"
                : ""
            }`}
          >
            {item.status}
          </span>
        )}
        <span className="text-[16px] font-semibold text-white">
          {item.title}
        </span>
      </div>

      <div className="text-[#787a87] text-[15px] mb-2">
        {item.author} {item.date}
      </div>

      <div className="text-base text-[#dde6fb] mb-6">{item.text}</div>

      <div className="flex flex-col gap-3 items-start">
        <span className="bg-[#2b936e] text-[#dafbe7] text-xs px-3 py-1 rounded-full flex items-center gap-1 font-medium">
          <Paperclip className="w-4 h-4" strokeWidth={2} />
          {item.attachments} attachments
        </span>

        {item.showReply && (
          <>
            <button
              onClick={() => setOpenReply(openReply === index ? null : index)}
              className="bg-[#2972f3] text-white text-base px-6 py-1 rounded-full font-semibold hover:bg-[#205bb7] transition"
            >
              Reply
            </button>

            {openReply === index && (
              <>
                <textarea
                  placeholder="Write your reply..."
                  className="mt-3 w-full p-2 rounded bg-[#1a1f2e] border border-[#2e3d66] text-white"
                  rows={3}
                  value={replyText[index] || ""}
                  onChange={(e) => handleReplyChange(index, e.target.value)}
                />
                <button
                  onClick={() => handleSend(index)}
                  className="mt-2 bg-[#2b936e] text-white px-5 py-1 rounded-full hover:bg-[#237156]"
                >
                  Send
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );

  const togglePanel = (panelName: "Filter" | "Group") => {
    setActivePanel((prev) => (prev === panelName ? null : panelName));
  };

  return (
    <div className="w-full mx-auto text-[#e3eaf7]">
      <h2 className="text-[28px] font-medium mb-6 text-white">Communication</h2>
      <div className="border rounded-3xl p-8 bg-[#1e2233] border-[#43485A]">
    
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border border-[#2e3d66] rounded-full px-4 py-1 text-sm placeholder-[#65729A] focus:outline-none"
          />
          <button
            onClick={() => togglePanel("Filter")}
            className={`px-5 py-1.5 rounded-full border text-sm hover:bg-[#25305a] ${
              activePanel === "Filter"
                ? "border-[#6bb5ff] text-[#6bb5ff]"
                : "border-[#346bc8] text-[#346bc8]"
            }`}
          >
            Filter
          </button>
          <button
            onClick={() => togglePanel("Group")}
            className={`px-5 py-1.5 rounded-full border text-sm hover:bg-[#25305a] ${
              activePanel === "Group"
                ? "border-[#6bb5ff] text-[#6bb5ff]"
                : "border-[#346bc8] text-[#346bc8]"
            }`}
          >
            Group
          </button>
        </div>

        
        {activePanel === "Filter" && (
          <div className="bg-[#2a2f45] p-4 rounded-xl text-white mb-6">
            Filtering options will appear here.
          </div>
        )}
        {activePanel === "Group" && (
          <div className="bg-[#2a2f45] p-4 rounded-xl text-white mb-6">
            Grouping options will appear here.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-7">
            {communicationItems
              .slice(0, 2)
              .map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="flex flex-col gap-7">
            {communicationItems
              .slice(2)
              .map((item, idx) => renderCard(item, idx + 2))}
          </div>
        </div>
      </div>
    </div>
  );
}

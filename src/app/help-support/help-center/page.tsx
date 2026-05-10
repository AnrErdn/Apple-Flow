export default function HelpCenterPage() {
  const topics = [
    { title: "Getting Started",        desc: "Learn the basics of Apple Flow — set up your account and make your first sale." },
    { title: "Managing Your Products", desc: "Add, edit, and organize your product listings with photos and descriptions." },
    { title: "Orders & Shipping",      desc: "Track orders, manage fulfillment, and set up shipping options." },
    { title: "Payments & Payouts",     desc: "Understand how payments are processed and when you receive your earnings." },
    { title: "Returns & Refunds",      desc: "Handle return requests and issue refunds quickly and fairly." },
    { title: "Account & Security",     desc: "Keep your account secure with two-factor authentication and privacy controls." },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Help Center</h1>
      <p className="text-[14px] text-[#6E6E73] mt-[8px]">Find answers to your questions and learn how to get the most out of Apple Flow.</p>

      <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
        {topics.map((topic) => (
          <div key={topic.title} className="bg-white rounded-[12px] p-[24px] border border-[#D2D2D7] cursor-pointer hover:border-[#007AFF] transition-colors">
            <h2 className="text-[16px] font-semibold text-[#1D1D1F]">{topic.title}</h2>
            <p className="text-[13px] text-[#6E6E73] mt-[8px] leading-relaxed">{topic.desc}</p>
            <span className="text-[12px] text-[#007AFF] font-medium mt-[12px] inline-block">Learn more →</span>
          </div>
        ))}
      </div>

      <div className="mt-[24px] bg-white rounded-[12px] p-[24px] border border-[#D2D2D7] flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-[#1D1D1F]">Still need help?</h2>
          <p className="text-[13px] text-[#6E6E73] mt-[4px]">Our support team is available Mon–Fri, 9am–6pm.</p>
        </div>
        <button className="h-[36px] px-[16px] bg-[#007AFF] text-white text-[14px] font-medium rounded-full">
          Contact Support
        </button>
      </div>
    </div>
  );
}

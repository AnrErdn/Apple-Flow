export default function TermsPoliciesPage() {
  const sections = [
    { title: "Terms of Service",       updated: "March 1, 2026",    desc: "The rules and guidelines governing your use of the Apple Flow platform." },
    { title: "Privacy Policy",         updated: "March 1, 2026",    desc: "How we collect, use, and protect your personal information." },
    { title: "Seller Agreement",       updated: "January 15, 2026", desc: "Specific terms for sellers listing products on Apple Flow." },
    { title: "Buyer Protection",       updated: "January 15, 2026", desc: "What we cover and how we protect buyers in disputes." },
    { title: "Cookie Policy",          updated: "December 1, 2025", desc: "How we use cookies and similar technologies on our platform." },
    { title: "Community Guidelines",   updated: "November 1, 2025", desc: "Standards for respectful and safe interactions on Apple Flow." },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Terms & Policies</h1>
      <p className="text-[14px] text-[#6E6E73] mt-[8px]">Read our terms and policies to understand your rights and responsibilities.</p>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        {sections.map((s, i) => (
          <div key={s.title} className={`flex items-center justify-between px-[24px] py-[20px] cursor-pointer hover:bg-[#F2F2F7] transition-colors ${i < sections.length - 1 ? 'border-b border-[#D2D2D7]' : ''}`}>
            <div>
              <h2 className="text-[15px] font-semibold text-[#1D1D1F]">{s.title}</h2>
              <p className="text-[12px] text-[#6E6E73] mt-[2px]">{s.desc}</p>
            </div>
            <div className="flex items-center gap-[16px] flex-shrink-0 ml-[24px]">
              <span className="text-[11px] text-[#6E6E73]">Updated {s.updated}</span>
              <span className="text-[14px] text-[#007AFF]">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

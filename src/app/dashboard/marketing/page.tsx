export default function MarketingPage() {
  const campaigns = [
    { name: "Summer Sale",    channel: "Email",  reach: "12,400", clicks: "3,200",  budget: "$500",   status: "Active" },
    { name: "New Arrivals",   channel: "Push",   reach: "8,900",  clicks: "1,800",  budget: "$200",   status: "Active" },
    { name: "Black Friday",   channel: "Email",  reach: "45,000", clicks: "12,500", budget: "$1,200", status: "Planned" },
    { name: "Back to School", channel: "In-App", reach: "6,300",  clicks: "980",    budget: "$350",   status: "Ended" },
    { name: "Holiday Bundle", channel: "Email",  reach: "22,000", clicks: "5,600",  budget: "$800",   status: "Planned" },
  ];

  const statusColor: Record<string, string> = {
    "Active":  "#34C759",
    "Planned": "#007AFF",
    "Ended":   "#6E6E73",
  };

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Marketing</h1>

      <div className="mt-[24px] grid grid-cols-3 gap-[16px]">
        {[
          { label: "Active Campaigns", value: "2" },
          { label: "Total Reach",      value: "94,600" },
          { label: "Avg. Click Rate",  value: "24.3%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-[12px] p-[24px] border border-[#D2D2D7]">
            <p className="text-[12px] text-[#6E6E73] font-medium">{stat.label}</p>
            <p className="text-[28px] font-semibold text-[#1D1D1F] mt-[8px]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        <div className="flex items-center h-[48px] border-b border-[#D2D2D7] px-[24px]">
          {[{ label: "Campaign", w: 200 }, { label: "Channel", w: 120 }, { label: "Reach", w: 120 }, { label: "Clicks", w: 120 }, { label: "Budget", w: 100 }, { label: "Status", w: 110 }].map((col) => (
            <div key={col.label} className="text-[14px] text-[#6E6E73] font-medium" style={{ width: col.w }}>{col.label}</div>
          ))}
        </div>
        {campaigns.map((c) => (
          <div key={c.name} className="flex items-center h-[64px] border-b border-[#D2D2D7] last:border-b-0 px-[24px]">
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 200 }}>{c.name}</div>
            <div className="text-[14px] text-[#6E6E73]" style={{ width: 120 }}>{c.channel}</div>
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 120 }}>{c.reach}</div>
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 120 }}>{c.clicks}</div>
            <div className="text-[14px] text-[#1D1D1F] font-semibold" style={{ width: 100 }}>{c.budget}</div>
            <div className="flex items-center gap-[6px]" style={{ width: 110 }}>
              <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: statusColor[c.status] }} />
              <span className="text-[14px] text-[#1D1D1F] font-medium">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

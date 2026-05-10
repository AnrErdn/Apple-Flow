export default function AnalyticsPage() {
  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Analytics</h1>

      <div className="mt-[24px] grid grid-cols-3 gap-[16px]">
        {[
          { label: "Total Revenue",     value: "$124,580", change: "+12.4%", positive: true },
          { label: "Total Orders",      value: "3,842",    change: "+8.1%",  positive: true },
          { label: "Avg. Order Value",  value: "$32.40",   change: "-2.3%",  positive: false },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-[12px] p-[24px] border border-[#D2D2D7]">
            <p className="text-[12px] text-[#6E6E73] font-medium">{stat.label}</p>
            <p className="text-[28px] font-semibold text-[#1D1D1F] mt-[8px]">{stat.value}</p>
            <p className={`text-[12px] font-medium mt-[4px] ${stat.positive ? 'text-[#34C759]' : 'text-[#FF3B30]'}`}>
              {stat.change} vs last month
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] p-[24px]">
        <h2 className="text-[18px] font-semibold text-[#1D1D1F]">Sales Overview</h2>
        <div className="mt-[48px] flex items-end gap-[12px] h-[160px]">
          {[65, 80, 55, 90, 70, 85, 60, 95, 75, 88, 50, 78].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t-[4px] bg-[#007AFF] opacity-80"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-[12px] mt-[8px]">
          {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map((m) => (
            <span key={m} className="flex-1 text-center text-[10px] text-[#6E6E73]">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

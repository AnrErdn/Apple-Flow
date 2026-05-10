export default function PrivacyCenterPage() {
  const controls = [
    { label: "Profile Visibility",        desc: "Control who can see your profile and listings.", value: "Everyone" },
    { label: "Search Indexing",           desc: "Allow search engines to index your public profile.", value: "Enabled" },
    { label: "Activity Status",           desc: "Show when you were last active on Apple Flow.", value: "Enabled" },
    { label: "Data Personalization",      desc: "Use your activity to improve recommendations.", value: "Enabled" },
    { label: "Marketing Emails",          desc: "Receive promotional emails and offers from Apple Flow.", value: "Disabled" },
    { label: "Third-Party Data Sharing",  desc: "Share anonymized data with trusted partners.", value: "Disabled" },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Privacy Center</h1>
      <p className="text-[14px] text-[#6E6E73] mt-[8px]">Manage how your data is used and control your privacy preferences.</p>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        {controls.map((c, i) => (
          <div key={c.label} className={`flex items-center justify-between px-[24px] py-[18px] ${i < controls.length - 1 ? 'border-b border-[#D2D2D7]' : ''}`}>
            <div className="flex-1 pr-[24px]">
              <p className="text-[14px] font-medium text-[#1D1D1F]">{c.label}</p>
              <p className="text-[12px] text-[#6E6E73] mt-[2px]">{c.desc}</p>
            </div>
            <div className="flex items-center gap-[12px] flex-shrink-0">
              <span className={`text-[12px] font-medium ${c.value === 'Disabled' ? 'text-[#6E6E73]' : 'text-[#34C759]'}`}>{c.value}</span>
              <button className="text-[13px] text-[#007AFF] font-medium">Manage</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[16px] bg-white rounded-[12px] border border-[#D2D2D7] p-[24px] flex items-center justify-between">
        <div>
          <h2 className="text-[15px] font-semibold text-[#1D1D1F]">Download Your Data</h2>
          <p className="text-[13px] text-[#6E6E73] mt-[4px]">Request a copy of all data Apple Flow holds about you.</p>
        </div>
        <button className="h-[36px] px-[16px] border border-[#D2D2D7] text-[#1D1D1F] text-[14px] font-medium rounded-full bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.08)]">
          Request Export
        </button>
      </div>
    </div>
  );
}

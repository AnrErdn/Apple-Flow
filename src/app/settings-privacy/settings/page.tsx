export default function SettingsPage() {
  const groups = [
    {
      title: "Account",
      items: [
        { label: "Display Name",   value: "Andrei" },
        { label: "Email Address",  value: "andrei@example.com" },
        { label: "Phone Number",   value: "+1 (555) 000-0000" },
        { label: "Language",       value: "English (US)" },
      ],
    },
    {
      title: "Notifications",
      items: [
        { label: "Order Updates",   value: "Email & Push" },
        { label: "New Messages",    value: "Push Only" },
        { label: "Promotions",      value: "Email Only" },
        { label: "Security Alerts", value: "Email & Push" },
      ],
    },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Settings</h1>

      <div className="mt-[24px] space-y-[16px]">
        {groups.map((group) => (
          <div key={group.title} className="bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
            <div className="px-[24px] py-[14px] border-b border-[#D2D2D7]">
              <h2 className="text-[15px] font-semibold text-[#1D1D1F]">{group.title}</h2>
            </div>
            {group.items.map((item, i) => (
              <div key={item.label} className={`flex items-center justify-between px-[24px] h-[56px] ${i < group.items.length - 1 ? 'border-b border-[#D2D2D7]' : ''}`}>
                <span className="text-[14px] text-[#1D1D1F]">{item.label}</span>
                <div className="flex items-center gap-[12px]">
                  <span className="text-[14px] text-[#6E6E73]">{item.value}</span>
                  <span className="text-[14px] text-[#007AFF] cursor-pointer">Edit</span>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
          <div className="px-[24px] py-[14px] border-b border-[#D2D2D7]">
            <h2 className="text-[15px] font-semibold text-[#1D1D1F]">Danger Zone</h2>
          </div>
          <div className="flex items-center justify-between px-[24px] h-[56px]">
            <div>
              <span className="text-[14px] text-[#1D1D1F]">Delete Account</span>
              <p className="text-[11px] text-[#6E6E73]">Permanently remove your account and all data.</p>
            </div>
            <button className="h-[32px] px-[14px] border border-[#FF3B30] text-[#FF3B30] text-[13px] font-medium rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccountStatusPage() {
  const checks = [
    { label: "Identity Verified",     status: "Verified",  ok: true },
    { label: "Email Confirmed",       status: "Confirmed", ok: true },
    { label: "Phone Number",          status: "Confirmed", ok: true },
    { label: "Payment Method",        status: "Active",    ok: true },
    { label: "Seller Rating",         status: "4.8 / 5",   ok: true },
    { label: "Policy Compliance",     status: "Compliant", ok: true },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Account Status</h1>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] p-[24px]">
        <div className="flex items-center gap-[12px]">
          <div className="w-[10px] h-[10px] rounded-full bg-[#34C759]" />
          <h2 className="text-[18px] font-semibold text-[#1D1D1F]">Account in Good Standing</h2>
        </div>
        <p className="text-[13px] text-[#6E6E73] mt-[8px]">Your account meets all requirements. You can buy and sell without restrictions.</p>
      </div>

      <div className="mt-[16px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        <div className="flex items-center h-[48px] border-b border-[#D2D2D7] px-[24px]">
          <div className="text-[14px] text-[#6E6E73] font-medium flex-1">Check</div>
          <div className="text-[14px] text-[#6E6E73] font-medium w-[140px]">Status</div>
        </div>
        {checks.map((check) => (
          <div key={check.label} className="flex items-center h-[56px] border-b border-[#D2D2D7] last:border-b-0 px-[24px]">
            <div className="text-[14px] text-[#1D1D1F] font-medium flex-1">{check.label}</div>
            <div className="flex items-center gap-[6px] w-[140px]">
              <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: check.ok ? "#34C759" : "#FF3B30" }} />
              <span className="text-[14px] text-[#1D1D1F]">{check.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

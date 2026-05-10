export default function SafetyPage() {
  const tips = [
    { title: "Use Secure Payments",     desc: "Always complete transactions through Apple Flow's secure payment system. Never pay outside the platform." },
    { title: "Verify Buyers & Sellers", desc: "Check profiles, reviews, and verification badges before completing a transaction." },
    { title: "Protect Your Password",   desc: "Use a strong, unique password and enable two-factor authentication on your account." },
    { title: "Watch for Scams",         desc: "Be cautious of deals that seem too good to be true. Report suspicious activity immediately." },
    { title: "Meet Safely",             desc: "For local pickup, choose well-lit public locations and bring someone you trust." },
    { title: "Secure Your Listings",    desc: "Don't include personal contact details in public listings. Use our messaging system instead." },
  ];

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Safety</h1>
      <p className="text-[14px] text-[#6E6E73] mt-[8px]">Your safety is our top priority. Follow these guidelines to stay protected.</p>

      <div className="mt-[24px] grid grid-cols-2 gap-[16px]">
        {tips.map((tip) => (
          <div key={tip.title} className="bg-white rounded-[12px] p-[24px] border border-[#D2D2D7]">
            <h2 className="text-[15px] font-semibold text-[#1D1D1F]">{tip.title}</h2>
            <p className="text-[13px] text-[#6E6E73] mt-[8px] leading-relaxed">{tip.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] bg-white rounded-[12px] p-[24px] border border-[#D2D2D7] flex items-center justify-between">
        <div>
          <h2 className="text-[16px] font-semibold text-[#1D1D1F]">Report a Safety Issue</h2>
          <p className="text-[13px] text-[#6E6E73] mt-[4px]">If you encounter suspicious behavior, let us know right away.</p>
        </div>
        <button className="h-[36px] px-[16px] bg-[#FF3B30] text-white text-[14px] font-medium rounded-full">
          Report Now
        </button>
      </div>
    </div>
  );
}

export default function CustomersPage() {
  const customers = [
    { name: "James Miller",  email: "james@example.com",  orders: 12, spent: "$4,230", joined: "Jan 2025",  status: "Active" },
    { name: "Sarah Johnson", email: "sarah@example.com",  orders: 8,  spent: "$2,100", joined: "Mar 2025",  status: "Active" },
    { name: "Tom Williams",  email: "tom@example.com",    orders: 3,  spent: "$890",   joined: "Nov 2025",  status: "Inactive" },
    { name: "Emma Davis",    email: "emma@example.com",   orders: 21, spent: "$8,750", joined: "Feb 2024",  status: "Active" },
    { name: "Chris Brown",   email: "chris@example.com",  orders: 5,  spent: "$1,450", joined: "Aug 2025",  status: "Active" },
    { name: "Lisa Anderson", email: "lisa@example.com",   orders: 1,  spent: "$99",    joined: "Apr 2026",  status: "New" },
  ];

  const statusColor: Record<string, string> = {
    "Active":   "#34C759",
    "Inactive": "#FF9500",
    "New":      "#007AFF",
  };

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Customers</h1>

      <div className="mt-[24px] grid grid-cols-3 gap-[16px]">
        {[
          { label: "Total Customers",    value: "1,284" },
          { label: "Active This Month",  value: "847" },
          { label: "New This Week",      value: "32" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-[12px] p-[24px] border border-[#D2D2D7]">
            <p className="text-[12px] text-[#6E6E73] font-medium">{stat.label}</p>
            <p className="text-[28px] font-semibold text-[#1D1D1F] mt-[8px]">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        <div className="flex items-center h-[48px] border-b border-[#D2D2D7] px-[24px]">
          {[{ label: "Name", w: 180 }, { label: "Email", w: 220 }, { label: "Orders", w: 100 }, { label: "Total Spent", w: 130 }, { label: "Joined", w: 120 }, { label: "Status", w: 100 }].map((col) => (
            <div key={col.label} className="text-[14px] text-[#6E6E73] font-medium" style={{ width: col.w }}>{col.label}</div>
          ))}
        </div>
        {customers.map((c) => (
          <div key={c.email} className="flex items-center h-[64px] border-b border-[#D2D2D7] last:border-b-0 px-[24px]">
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 180 }}>{c.name}</div>
            <div className="text-[14px] text-[#6E6E73]" style={{ width: 220 }}>{c.email}</div>
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 100 }}>{c.orders}</div>
            <div className="text-[14px] text-[#1D1D1F] font-semibold" style={{ width: 130 }}>{c.spent}</div>
            <div className="text-[14px] text-[#6E6E73]" style={{ width: 120 }}>{c.joined}</div>
            <div className="flex items-center gap-[6px]" style={{ width: 100 }}>
              <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: statusColor[c.status] }} />
              <span className="text-[14px] text-[#1D1D1F] font-medium">{c.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

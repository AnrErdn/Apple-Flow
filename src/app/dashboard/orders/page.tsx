export default function OrdersPage() {
  const orders = [
    { id: "#ORD-001", customer: "James Miller",   product: "iPhone 14 Pro",  date: "May 9, 2026",  status: "Delivered",  total: "$999" },
    { id: "#ORD-002", customer: "Sarah Johnson",  product: "AirPods Pro",    date: "May 8, 2026",  status: "In Transit", total: "$249" },
    { id: "#ORD-003", customer: "Tom Williams",   product: "MacBook Air",    date: "May 7, 2026",  status: "Processing", total: "$1,299" },
    { id: "#ORD-004", customer: "Emma Davis",     product: "Apple Watch",    date: "May 6, 2026",  status: "Delivered",  total: "$399" },
    { id: "#ORD-005", customer: "Chris Brown",    product: "AirPods Max",    date: "May 5, 2026",  status: "Cancelled",  total: "$549" },
    { id: "#ORD-006", customer: "Lisa Anderson",  product: "HomePod Mini",   date: "May 4, 2026",  status: "In Transit", total: "$99" },
  ];

  const statusColor: Record<string, string> = {
    "Delivered":  "#34C759",
    "In Transit": "#007AFF",
    "Processing": "#FF9500",
    "Cancelled":  "#FF3B30",
  };

  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px] pb-[48px]">
      <h1 className="text-[24px] font-semibold">Orders</h1>

      <div className="mt-[24px] bg-white rounded-[12px] border border-[#D2D2D7] overflow-hidden">
        {/* Header */}
        <div className="flex items-center h-[48px] border-b border-[#D2D2D7] px-[24px]">
          {[{ label: "Order ID", w: 120 }, { label: "Customer", w: 180 }, { label: "Product", w: 180 }, { label: "Date", w: 140 }, { label: "Status", w: 130 }, { label: "Total", w: 100 }].map((col) => (
            <div key={col.label} className="text-[14px] text-[#6E6E73] font-medium" style={{ width: col.w }}>{col.label}</div>
          ))}
        </div>

        {orders.map((order) => (
          <div key={order.id} className="flex items-center h-[64px] border-b border-[#D2D2D7] last:border-b-0 px-[24px]">
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 120 }}>{order.id}</div>
            <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: 180 }}>{order.customer}</div>
            <div className="text-[14px] text-[#6E6E73]" style={{ width: 180 }}>{order.product}</div>
            <div className="text-[14px] text-[#6E6E73]" style={{ width: 140 }}>{order.date}</div>
            <div className="flex items-center gap-[6px]" style={{ width: 130 }}>
              <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: statusColor[order.status] }} />
              <span className="text-[14px] text-[#1D1D1F] font-medium">{order.status}</span>
            </div>
            <div className="text-[14px] text-[#1D1D1F] font-semibold" style={{ width: 100 }}>{order.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

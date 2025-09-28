import React from "react";
import ProductCard from "@/app/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen w-full overflow-hidden">
      <h1 className="text-[24px] font-semibold">Products</h1>
      <div className="flex gap-[16px] overflow-x-auto mt-[24px] pb-4 pr-[48px]">
        <div className="flex gap-[16px] flex-shrink-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
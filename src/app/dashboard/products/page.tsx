import React from "react";
import ProductCard from "@/app/components/ProductCard";
import SearchList from "@/app/components/SearchList";
import Add from "@/app/components/Add";
import Remained from "@/app/components/Remained";
import Ordered from "@/app/components/Ordered";
import Filter from "@/app/components/Filter";

export default function ProductsPage() {
  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen w-full overflow-hidden">
      <div>
          <h1 className="text-[24px] font-semibold">Products</h1>
          <div className="flex gap-[16px] overflow-x-auto mt-[24px] pb-4 pr-[48px]">
            <div className="flex gap-[16px] flex-shrink-0 w-full">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
      </div>
      
      <div className="mt-[55px] flex items-center justify-between pr-[24px]">
        <h1 className="text-[24px] font-semibold">List</h1>
        <div className="flex gap-[12px]">
          <SearchList/>
          <Add/>
          <Ordered/>
          <Remained/>
          <Filter/>
        </div>
      </div>
    </div>
  );
}
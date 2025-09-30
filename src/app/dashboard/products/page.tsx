"use client";

import React from "react";
import ProductCard from "@/app/components/ProductCard";
import SearchList from "@/app/components/SearchList";
import Add from "@/app/components/Add";
import Remained from "@/app/components/Remained";
import Ordered from "@/app/components/Ordered";
import Filter from "@/app/components/Filter";
import List from "@/app/components/List";

export default function ProductsPage() {
  return (
    <div className="pl-[48px] pt-[24px] bg-[#F2F2F7] min-h-screen pr-[48px]">
      <div>
          <h1 className="text-[24px] font-semibold">Products</h1>
          <div className="mt-[24px]">
            <div 
              className="flex gap-[16px] overflow-x-auto pb-4"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <ProductCard />
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
            <div className="flex justify-end mt-[16px]">
              <a 
                href="#" 
                className="text-[12px] font-medium text-[#007AFF] underline"
              >
                Show more
              </a>
            </div>
          </div>
      </div>
      
      <div className="mt-[55px] flex items-center justify-between flex-col space-y-[16px] pb-[48px]">
        <div className="w-full flex items-center justify-between">
            <h1 className="text-[24px] font-semibold">List</h1>
            <div className="flex gap-[12px]">
              <SearchList/>
              <Add/>
              <Ordered/>
              <Remained/>
              <Filter/>
            </div>
        </div>
        <div className="w-full">
          <List/>
        </div>
      </div>
    </div>
  );
}
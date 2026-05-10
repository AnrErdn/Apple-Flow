"use client";

import React, { useState } from "react";
import Image from "next/image";
import AddMore from "@/app/components/AddMore";
import Change from "@/app/components/Change";
import DeleteButton from "@/app/components/Delete";
import Warning from "./icons/warning";

type Product = {
  id: string;
  name: string;
  status: "Available" | "Unavailable" | "Sold out";
  sold: number;
  stock: number | string;
  description: string;
  image: string;
};

const initialProducts: Product[] = [
  {
    id: "#021",
    name: "iPhone 14 Pro",
    status: "Available",
    sold: 4,
    stock: 34,
    description: "Latest flagship model...",
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=100&h=100&fit=crop"
  },
  {
    id: "#062",
    name: "Apple Watch",
    status: "Unavailable",
    sold: 15,
    stock: 23,
    description: "Built for adventure with rugged design...",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop"
  },
  {
    id: "#002",
    name: "AirPods Pro",
    status: "Available",
    sold: 21,
    stock: 16,
    description: "Immersive sound with Adaptive Audio...",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=100&h=100&fit=crop"
  },
  {
    id: "#036",
    name: "HomePod Mini",
    status: "Unavailable",
    sold: 3,
    stock: 7,
    description: "Rich, room-filling audio with smart home...",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=100&h=100&fit=crop"
  },
  {
    id: "#011",
    name: "MacBook Air",
    status: "Sold out",
    sold: 27,
    stock: "--",
    description: "Super-light, blazing fast with M2 chip...",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop"
  },
  {
    id: "#009",
    name: "AirPods Max",
    status: "Available",
    sold: 1,
    stock: 5,
    description: "High-fidelity audio with noise cancellation...",
    image: "https://images.unsplash.com/photo-1625831186271-41a46d78d864?w=100&h=100&fit=crop"
  }
];

const STATUS_COLORS: Record<Product["status"], string> = {
  "Available":   "#34C759",
  "Unavailable": "#FF9500",
  "Sold out":    "#FFCC00",
};

const ProductTable = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const handleDelete = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="bg-white rounded-[12px] overflow-hidden" style={{ minWidth: "1080px" }}>
        {/* Header Row */}
        <div className="flex items-center bg-white border-b border-[#d2d2d7]" style={{ height: "48px" }}>
          <div style={{ width: "24px" }}></div>
          <div style={{ width: "50px" }}></div>
          <div style={{ width: "30px" }}></div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "80px" }}>ID</div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "150px" }}>Name</div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "130px" }}>Status</div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "80px" }}>Sold</div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "80px" }}>Stock</div>
          <div className="text-[14px] text-[#6E6E73] font-medium" style={{ width: "320px" }}>Description</div>
        </div>

        {products.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-[#6E6E73] text-[14px]">No items</p>
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="flex items-center border-b border-[#d2d2d7] last:border-b-0"
              style={{ height: "82px" }}
            >
              <div style={{ width: "24px" }}></div>

              {/* Product Image */}
              <div className="relative rounded-lg overflow-hidden" style={{ width: "50px", height: "50px" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="50px"
                />
              </div>

              <div style={{ width: "30px" }}></div>

              {/* ID */}
              <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: "80px" }}>
                {product.id}
              </div>

              {/* Name */}
              <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: "150px" }}>
                {product.name}
              </div>

              {/* Status */}
              <div className="flex items-center" style={{ width: "130px" }}>
                <div
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: STATUS_COLORS[product.status],
                    marginRight: "6px"
                  }}
                />
                <span className="text-[14px] text-[#1D1D1F] font-medium">
                  {product.status}
                </span>
              </div>

              {/* Sold */}
              <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: "80px" }}>
                {String(product.sold).padStart(2, '0')}
              </div>

              {/* Stock */}
              <div className="text-[14px] text-[#1D1D1F] font-medium" style={{ width: "80px" }}>
                {product.stock}
              </div>

              {/* Description */}
              <div className="flex items-center" style={{ width: "320px" }}>
                <span className="truncate text-[14px] text-[#1D1D1F] font-medium" style={{ maxWidth: "260px" }}>
                  {product.description}
                </span>
                {product.status === "Sold out" && (
                  <div className="ml-4 flex-shrink-0">
                    <Warning />
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 ml-auto pr-6">
                <AddMore />
                <Change />
                <DeleteButton onClick={() => handleDelete(product.id)} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductTable;

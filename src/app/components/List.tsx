"use client"

import React, { useState } from "react";
import AddMore from "@/app/components/AddMore";
import Change from "@/app/components/Change";
import DeleteButton from "@/app/components/Delete";
import Warning from "./icons/warning";

const ProductTable = () => {
  // Sample data - set to empty array to see empty state
  const [products, setProducts] = useState([
    {
      id: "#021",
      name: "iPhone 14 Pro",
      status: "Available",
      sold: 4,
      stock: 34,
      description: "Latest flagship model dadss...",
      image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=100&h=100&fit=crop"
    },
    {
      id: "#062",
      name: "Apple watch...",
      status: "Unavailable",
      sold: 15,
      stock: 23,
      description: "Built for adventure with rug...",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=100&h=100&fit=crop"
    },
    {
      id: "#002",
      name: "Airpods Pro",
      status: "Available",
      sold: 21,
      stock: 16,
      description: "Immersive sound with Ada...",
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=100&h=100&fit=crop"
    },
    {
      id: "#036",
      name: "HomePod -...",
      status: "Unavailable",
      sold: 3,
      stock: 7,
      description: "Rich, room-filling audio w...",
      image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=100&h=100&fit=crop"
    },
    {
      id: "#011",
      name: "Macbook Air",
      status: "Sold out",
      sold: 27,
      stock: "--",
      description: "Super-light, blazing fast wit...",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop"
    },
    {
      id: "#009",
      name: "Airpods Max",
      status: "Available",
      sold: 1,
      stock: 5,
      description: "High-fidelity audio with noi...",
      image: "https://images.unsplash.com/photo-1625831186271-41a46d78d864?w=100&h=100&fit=crop"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "#34C759";
      case "Unavailable":
        return "#FF9500";
      case "Sold out":
        return "#FFCC00";
      default:
        return "#34C759";
    }
  };

  return (
          <div className="bg-white rounded-[12px] overflow-hidden w-full">
        {products.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-500 text-lg">No items</p>
          </div>
        ) : (
          <>
            {/* Header Row */}
            <div className="flex items-center bg-white border-b border-gray-200" style={{ height: "48px" }}>
              <div style={{ width: "24px" }}></div>
              <div style={{ width: "50px" }}></div>
              <div style={{ width: "30px" }}></div>
              <div style={{ width: "80px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>ID</div>
              <div style={{ width: "150px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>Name</div>
              <div style={{ width: "130px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>Status</div>
              <div style={{ width: "80px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>Sold</div>
              <div style={{ width: "80px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>Stock</div>
              <div style={{ width: "320px", fontSize: "14px", color: "#8E8E93", fontWeight: "500" }}>Description</div>
            </div>

            {/* Product Rows */}
            {products.map((product, index) => (
              <div
                key={product.id}
                className="flex items-center border-b border-gray-200 last:border-b-0"
                style={{ height: "82px" }}
              >
                {/* Left padding */}
                <div style={{ width: "24px" }}></div>
                
                {/* Product Image */}
                <div style={{ width: "50px", height: "50px" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Gap after image */}
                <div style={{ width: "30px" }}></div>

                {/* ID */}
                <div style={{ width: "80px", color: "#1D1D1F", fontSize: "14px", fontWeight: "500" }}>
                  {product.id}
                </div>

                {/* Name */}
                <div style={{ width: "150px", color: "#1D1D1F", fontSize: "14px", fontWeight: "500" }}>
                  {product.name}
                </div>

                {/* Status */}
                <div className="flex items-center" style={{ width: "130px" }}>
                  <div
                    style={{
                      width: "3px",
                      height: "3px",
                      borderRadius: "50%",
                      backgroundColor: getStatusColor(product.status),
                      marginRight: "4px"
                    }}
                  />
                  <span style={{ color: "#1D1D1F", fontSize: "14px", fontWeight: "500" }}>
                    {product.status}
                  </span>
                </div>

                {/* Sold */}
                <div style={{ width: "80px", color: "#1D1D1F", fontSize: "14px", fontWeight: "500" }}>
                  {String(product.sold).padStart(2, '0')}
                </div>

                {/* Stock */}
                <div style={{ width: "80px", color: "#1D1D1F", fontSize: "14px", fontWeight: "500"  }}>
                  {product.stock}
                </div>

                {/* Description */}
                <div className="flex items-center" style={{ width: "320px" }}>
                  <span className="truncate" style={{ color: "#1D1D1F", fontSize: "14px", fontWeight: "500"  }}>
                    {product.description}
                  </span>
                  {product.status === "Sold out" && (
                    <div style={{ marginLeft: "16px", flexShrink: 0 }}>
                      <Warning />
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 ml-auto" style={{ paddingRight: "24px", fontWeight: "500"  }}>
                  <AddMore />
                  <Change />
                  <DeleteButton />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
  );
};

export default ProductTable;
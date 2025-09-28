"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heart from "./icons/heart";
import ArrowRight from "./icons/arrowRight";

interface ProductCardProps {
    productName?: string;
    imageSrc?: string;
    availability?: 'available' | 'unavailable' | 'sold-out';
    soldCount?: number;
    isLiked?: boolean;
    onLikeToggle?: () => void;
}

export default function ProductCard({ 
    productName = "iPhone 14",
    imageSrc = "/images/iphone14.png",
    availability = "available",
    soldCount = 245,
    isLiked = false,
    onLikeToggle
}: ProductCardProps) {
    
    const [liked, setLiked] = useState(isLiked);
    
    const handleHeartClick = () => {
        setLiked(!liked);
        onLikeToggle?.();
    };
    
    const getAvailabilityStyle = (status: string) => {
        switch (status) {
            case 'available':
                return 'bg-[#34C759]';
            case 'unavailable':
                return 'bg-[#FF9500]';
            case 'sold-out':
                return 'bg-[#FFCC00]';
            default:
                return 'bg-[#34C759]';
        }
    };
    
    const getAvailabilityText = (status: string) => {
        switch (status) {
            case 'available':
                return 'Available';
            case 'unavailable':
                return 'Unavailable';
            case 'sold-out':
                return 'Sold Out';
            default:
                return 'Available';
        }
    };
    
    return (
        <div className="w-[144px] h-[149px] rounded-[10px] bg-white shadow-[0_2px_4px_0_rgba(0,0,0,0.08)] relative">
            {/* Heart Icon */}
            <button 
                onClick={handleHeartClick}
                className="absolute top-2 right-2 z-10"
            >
                <Heart className={`${liked ? 'text-red-500 fill-red-500' : 'text-[#6E6E73] fill-none'} transition-colors duration-200`} />
            </button>
            
            {/* Image Frame */}
            <div className="w-[144px] h-[89px] border-b border-[#D2D2D7] overflow-hidden rounded-t-[10px] flex items-center justify-center">
                <Image 
                    src={imageSrc} 
                    width={72} 
                    height={89} 
                    alt={productName}
                    className="object-cover"
                />
            </div>
            
            {/* Content Section */}
            <div className="px-3 pt-2.5">
                {/* Product Name */}
                <h3 className="text-[14px] font-medium text-[#1D1D1F] mb-[11px]">
                    {productName}
                </h3>
                
                {/* Badges and Arrow Row */}
                <div className="flex items-center justify-between">
                    {/* Badges Container */}
                    <div className="flex items-center gap-1">
                        {/* Availability Badge */}
                        <span className={`${getAvailabilityStyle(availability)} text-white text-[8px] px-1 py-0.5 h-[12px] rounded flex items-center justify-center`}>
                            {getAvailabilityText(availability)}
                        </span>
                        
                        {/* Sold Count Badge */}
                        <span className="bg-[#F2F2F7] text-[#6E6E73] text-[8px] px-1 py-0.5 h-[12px] rounded flex items-center justify-center">
                            {soldCount} sold
                        </span>
                    </div>
                    
                    {/* Arrow Right */}
                    <ArrowRight className="text-black" />
                </div>
            </div>
        </div>
    );
}
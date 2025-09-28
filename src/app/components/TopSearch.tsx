import React from 'react';
import Search from './icons/search';

export default function TopSearch() {
    return (
        <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:w-[320px]">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6E6E73]">
                <Search />
            </div>
            <input 
                type="text" 
                placeholder="Try search something..." 
                className="w-full h-[36px] 
                          text-[14px] text-[#1d1d1f] placeholder:text-[#6E6E73] 
                          pl-[40px] pr-[12px] py-[8px]
                          border border-[#D2D2D7] rounded-full 
                          shadow-[0_1px_4px_0_rgba(0,0,0,0.08)]
                          focus:outline-none focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]
                          transition-all duration-200
                          bg-white"
            />
        </div>
    );
}
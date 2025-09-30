import React from "react";
import ChangeIcon from "./icons/changeIcon";

export default function Change() {
    return (
        <button
            className="
            inline-flex items-center justify-center
            px-2.5 py-[3px] h-[22px]
            gap-1
            bg-[#AF52DE]
            text-white text-[12px] font-medium
            leading-none
            rounded-full
            whitespace-nowrap"
        >
      <ChangeIcon className="w-[12px] h-[12px] text-white" />
      <span className="relative top-[0.5px]">Change</span>
    </button>
    );
}
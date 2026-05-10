import React from 'react';
import AddIcon from './icons/addIcon';

interface AddMoreProps {
    onClick?: () => void;
}

export default function AddMore({ onClick }: AddMoreProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-center px-2.5 py-[3px] h-[22px] gap-1 bg-[#007AFF] text-white text-[12px] font-medium leading-none rounded-full whitespace-nowrap"
        >
            <AddIcon className="w-[12px] h-[12px] text-white" />
            <span className="relative top-[0.5px]">Add more</span>
        </button>
    );
}

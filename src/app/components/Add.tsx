import AddIcon from "./icons/addIcon";


export default function Add() {
    return(
        <div className="flex w-full h-[36px] gap-[10px] cursor-pointer text-center items-center border-[1px] border-[#D2D2D7] rounded-full px-[12px] py-[8px] font-semibold bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.08)]">
            <AddIcon/>
            <span className="text-[#6e6e73] text-[14px]">Add</span>
        </div>
    );
}
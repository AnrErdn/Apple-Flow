import FilterIcon from "./icons/FilterIcon";

export default function Filter() {
    return(
        <div className="w-[36px] h-[36px] border-[2px] cursor-pointer flex items-center border-[#D2D2D7] rounded-full px-[9.5px] py-[9px] bg-white shadow-[0_1px_4px_0_rgba(0,0,0,0.08)]">
            <FilterIcon/>
        </div>
    );
}
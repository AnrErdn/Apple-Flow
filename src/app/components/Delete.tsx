import Delete from "./icons/delete";

export default function DeleteButton() {
    return (
        <button
            className="
            inline-flex items-center justify-center
            px-2.5 py-[3px] h-[22px]
            gap-1
            bg-[#FF3B30]
            text-white text-[12px] font-medium
            leading-none
            rounded-full
            whitespace-nowrap"
        >
      <Delete className="w-[12px] h-[12px] text-white" />
    </button>
    );
}

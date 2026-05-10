import Delete from "./icons/delete";

interface DeleteButtonProps {
    onClick?: () => void;
}

export default function DeleteButton({ onClick }: DeleteButtonProps) {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-center px-2.5 py-[3px] h-[22px] gap-1 bg-[#FF3B30] text-white text-[12px] font-medium leading-none rounded-full whitespace-nowrap"
            aria-label="Delete"
        >
            <Delete className="w-[12px] h-[12px] text-white" />
        </button>
    );
}

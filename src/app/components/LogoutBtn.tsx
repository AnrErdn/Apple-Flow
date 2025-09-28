import React from 'react';
import Logout from './icons/logout';

export default function LogoutBtn() {
    return (
        <button className='flex items-center gap-[6px] text-[#FF3B30] font-semibold text-[14px] font-sans'>
            <Logout />
            Log out
        </button>
    )
}
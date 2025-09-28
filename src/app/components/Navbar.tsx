import React from 'react';
import TopSearch from './TopSearch';
import HeaderLogo from './icons/headerLogo';

const Navbar: React.FC = () => {
    return (
        <div className="w-full h-[84px] bg-white border-[#D2D2D7] border-b-2 
                        flex justify-between items-center 
                        px-6 sm:px-12 lg:px-12 xl:pl-[48px] xl:pr-[24px]
                        min-w-0">
            <div className="flex-shrink-0">
                <TopSearch />
            </div>
            <div className="flex-shrink-0 ml-4">
                <HeaderLogo />
            </div>
        </div>
    );
};

export default Navbar;
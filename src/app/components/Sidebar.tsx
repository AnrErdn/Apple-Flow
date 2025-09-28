import React from 'react';
import Image from 'next/image';
import Account from './icons/account';
import Bag from './icons/bag';
import NotificationBell from './icons/bell';
import Book from './icons/book';
import Cart from './icons/cart'
import Chartbar from './icons/chartBar'
import Dropdown from './icons/dropdownBtn';
import Info from './icons/info';
import Lock from './icons/lock';
import Megaphone from './icons/megaphone';
import Users  from './icons/person2';
import Settings from './icons/settings';
import Shield from './icons/shield';
import Star from './icons/star';
import Question from './icons/question';
import LogoutBtn from './LogoutBtn';

interface SidebarProps {
    userStatus?: 'online' | 'offline' | 'away' | 'busy';
    userName?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userStatus = 'online', userName = 'Andrei' }) => {
    // Status indicator colors and styles
    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'online':
                return 'bg-green-500';
            case 'offline':
                return 'bg-gray-400';
            case 'away':
                return 'bg-yellow-500';
            case 'busy':
                return 'bg-red-500';
            default:
                return 'bg-green-500';
        }
    };
        return (
            <aside className="bg-white text-[#1d1d1f] 
                            w-full sm:w-64 md:w-72 lg:w-80 xl:w-[288px] 
                            min-h-screen h-full 
                            border-r-2 border-[#D2D2D7] 
                            flex justify-between flex-col
                            overflow-y-auto">
                <div>
                    {/* Profile Section */}
                    <div className="w-full h-[84px] bg-white px-4 sm:px-6 py-[26px]">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Image src="/images/profile.png" width={32} height={32} alt="profile picture" className="rounded-full"/>
                                    {/* Dynamic Active Status Indicator */}
                                    <div className={`absolute -bottom-0.5 -right-0.5 w-[10px] h-[10px] ${getStatusStyle(userStatus)} rounded-full border-2 border-white`}></div>
                                </div>
                                <span className="text-sm sm:text-base font-semibold hidden sm:inline">{userName}</span>
                                <div className="hidden sm:block">
                                    <Dropdown />
                                </div>
                            </div>
                            <button className="">
                                <NotificationBell />
                            </button>
                        </div>
                    </div>
                    
                    {/* Side Navigation Section */}
                    <div className='mt-5 px-4 sm:px-6'>
                        <nav className='space-y-6'>
                            {/* Dashboard */}
                            <div className='space-y-[18px]'>
                                <h2 className='text-sm sm:text-base font-semibold' >Dashboard</h2>
                                <ul className='ml-0 sm:ml-6 space-y-[18px] text-xs sm:text-sm text-[#6e6e73]'>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Bag />
                                        <span className="hidden sm:inline">Products</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Chartbar />
                                        <span className="hidden sm:inline">Analytics</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Cart />
                                        <span className="hidden sm:inline">Orders</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Users />
                                        <span className="hidden sm:inline">Customers</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Megaphone />
                                        <span className="hidden sm:inline">Marketing</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Help & Support */}
                            <div className='space-y-[18px]'>
                                <h2 className='text-sm sm:text-base font-semibold' >Help & Support</h2>
                                <ul className='ml-0 sm:ml-6 space-y-[18px] text-xs sm:text-sm text-[#6e6e73]'>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Info />
                                        <span className="hidden sm:inline">Help Center</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Account />
                                        <span className="hidden sm:inline">Account Status</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Shield />
                                        <span className="hidden sm:inline">Safety</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Book />
                                        <span className="hidden sm:inline">Terms & Policies</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Settings & Privacy */}
                            <div className='space-y-[18px]'>
                                <h2 className='text-sm sm:text-base font-semibold' >Settings & Privacy</h2>
                                <ul className='ml-0 sm:ml-6 space-y-[18px] text-xs sm:text-sm text-[#6e6e73]'>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Settings />
                                        <span className="hidden sm:inline">Settings</span>
                                    </li>
                                    <li className="flex items-center gap-3 hover:text-[#1d1d1f] cursor-pointer transition-colors">
                                        <Lock />
                                        <span className="hidden sm:inline">Privacy Center</span>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className='pb-[36px]'>
                    <div className='space-y-[24px] sm:space-y-[36px]'>
                        {/* Apple-Flow Advertisement */}
                        <div className='mx-4 sm:mx-6 border-2 border-[#D2D2D7] rounded-[6px] 
                                      w-auto max-w-[240px] min-h-[141px] hidden sm:block'>
                            <div className='space-y-[21px] flex flex-col p-4 sm:p-6'>
                                <div className='flex items-center space-x-[10px]'>
                                    <Image src="/icons/Logo.svg" width={60} height={60} alt="apple flow logo"/>
                                    <div className='space-y-[3px]'>
                                        <h3 className='text-sm font-semibold'>Apple Flow</h3>
                                        <p className='text-[11px] text-[#6e6e73] w-[130px]'>Buy & Sell Anything Easily</p>
                                        <span className='flex items-center gap-[3px]'>
                                            <Star className='text-[#FFD60A]'/>
                                            <Star className='text-[#FFD60A]'/>
                                            <Star className='text-[#FFD60A]'/>
                                            <Star className='text-[#FFD60A]'/>
                                            <Star className='text-[#D2D2D7]'/>
                                            <span className='text-[9px] text-[#6e6e73] ml-[2px]'>4</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <button className='border-2 border-[#D2D2D7] text-[#007AFF] rounded-full px-[10px] py-[2px] font-bold w-[41px] h-[22px] text-center text-[10px]'>GET</button>
                                    <Question />
                                </div>
                            </div>
                        </div>
                        
                        {/* Log out button */}
                        <div className='mx-[16px] sm:mx-[24px]'>
                            <LogoutBtn />
                        </div>
                    </div>
                </div>
                
            </aside>
        );
};

export default Sidebar;
import React from 'react';
import Dropdown from './icons/dropdownBtn';
import NotificationBell from './icons/bell';


const Sidebar: React.FC = () => {
        return (
            <aside className="bg-white text-[#1d1d1f] w-[288px] md:w-[20%] h-screen overflow-y-auto">
                {/* Profile Section */}
                <div className="w-[288px] h-[84px] bg-white px-[24px] py-[26px]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="public/images/profile.png" alt="profile picture" className="h-[32px] w-[32px] rounded-full" />
                            <span className="">Andrei</span>
                            <Dropdown />
                        </div>
                        <button className="">
                            <NotificationBell />
                        </button>
                    </div>
                </div>
                {/* Side Navigation Section */}
                <div>
                    <nav>
                        {/* Dashboard */}
                        <div>
                            <h2>Dashboard</h2>
                            <ul>
                                <li>Products</li>
                                <li>Analytics</li>
                                <li>Orders</li>
                                <li>Customers</li>
                                <li>Marketing</li>
                            </ul>
                        </div>

                        {/* Help & Support */}
                        <div>
                            <h2>Help & Support</h2>
                            <ul>
                                <li>Help Center</li>
                                <li>Account Status</li>
                                <li>Safety</li>
                                <li>Terms & Policies</li>
                            </ul>
                        </div>

                        {/* Settings & Privacy */}
                        <div>
                            <h2>Settings & Privacy</h2>
                            <ul>
                                <li>Settings</li>
                                <li>Privacy Center</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </aside>
        );
};


export default Sidebar;
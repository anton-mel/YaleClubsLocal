"use client"

import React, { ChangeEvent } from 'react';

interface SidebarProps {
    updateGroups: (netid: string) => void;
    reset: () => void;
    children: React.ReactNode;
}

const Sidebar = ({ updateGroups, reset, children }: SidebarProps) => {
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (inputValue == "") {
        reset();
        return;
    }

    updateGroups(inputValue);
  };

  return (
    <div className="
        flex
        h-full
        glex-cols-2
        gap-5
    ">
      <div className="
        border-r-2
        border-sky-500
        flex
        flex-col
        w-80
        h-hull
        bg-gray-100
        px-8
        py-5
      ">
        <h3 className="text-1xl font-bold">Search Club</h3>
        <p className="text-sm mt-1">Exact NetID is required</p>
        <form>
          <input type="text" placeholder='Y/CS' onChange={handleChange} className="mt-2 outline-none rounded-md py-2 px-5 w-full text-sm" />
        </form>
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;

"use client";
import useBoardStore from "@/store/BoardStore";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";

function Header() {
  const {searchString, setSearchString } = useBoardStore();

  return (
    <header>
      <div className='flex flex-col md:flex-row items-center bg-gray-500/10 rounded-b-2xl px-5 py-2'>
        <Image
          src={"https://links.papareact.com/c2cdd5"}
          alt='Smart Kanban Board Logo'
          width={300}
          height={100}
          className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
        />
        <div className='flex items-center space-x-5 flex-1 justify-end w-full'>
          <form className='flex flex-1 md:flex-initial items-center justify-end  space-x-5 shadow-md p-4 rounded-md bg-white'>
            <MagnifyingGlassIcon className='h-6 w-6 text-gray-500' />
            <input
              type='input'
              placeholder='Search'
              className='flex-1 outline-none'
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button hidden></button>
          </form>
          <Avatar name='Naveed Abdullah' round size='50' color='#0051D1' />
        </div>
      </div>
    </header>
  );
}

export default Header;

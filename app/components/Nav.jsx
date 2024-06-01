'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { RiMenuFold4Line } from "react-icons/ri";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { MdOutlineAccountCircle } from "react-icons/md";

import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {

  const [open, setOpen] = useState(false);

    const handleSideMenu = () => {
        if (!open) {
            setOpen(true);
            return;
        }
        setOpen(false);
    }
  
  return (
    <Box className='text-white bg-white/20 md:bg-transparent md:px-10 px-3 md:py-5 py-3 flex items-center justify-between'>
        <Box className="logo">
            <Heading className='text-3xl'>Faiz-Jewellry</Heading>
        </Box>
        <nav className='bg-white/20 p-2 rounded-md hidden md:block'>
            <Link href='/' className='active'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Jewellry</Link>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>Login</Link>
        </nav>
        <Box className="sidemenu-cont block md:hidden">
          <Box className="menuBtn border-2 border-white p-1 rounded-md cursor-pointer" onClick={handleSideMenu}>
              <RiMenuFold4Line className='text-2xl text-white'/>
          </Box>
          <Box className={`sidemenu ${!open ? 'w-[30%]' : 'w-[60%]'} duration-300 fixed right-0 top-14 h-full z-10 bg-slate-50`}>
              <Box className="sidenav">
                  <Link href={'/'}>Home</Link>
                  <Link href={'/'}>How It Works</Link>
                  <Link href={'/'}>Explore</Link>
                  <Link href={'/'}>Reviews</Link>
                  <Link href={'/'}>Blog</Link>
                  <Link href={'/'}>Contact</Link>
              </Box>
          </Box>
        </Box>
        <Box className="hidden md:block">
          <Flex gap={10} alignItems={'center'} >
            <Link href='/'>
              <PiShoppingCartDuotone className='text-2xl text-white'/>
            </Link>
            <Link href='/'>
              <MdOutlineAccountCircle className='text-2xl text-white'/>
            </Link>
          </Flex>
        </Box>
    </Box>
  )
}

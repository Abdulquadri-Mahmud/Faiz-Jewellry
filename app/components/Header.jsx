''
import React from 'react'

import heroImage from '../../public/hero1.png';
import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    const heroImages = {
        img: '',
        img: '',
        img: '',
        img: '',
    }
  return (
    <header>
        <div className="h-[100vh] hero" style={{backgroundImage: `url(${heroImage.src})`}}>
            <Nav/>
            <div className="flex justify-start items-center h-full md:pl-20 pl-7">
                <div className="md:max-w-[50%] max-w-[100%] text-white">
                    <h2 className='text-2xl md:text-4xl'>NEW COLLECTION</h2>
                    <h1 className='text-2xl md:text-7xl font-semibold py-4'>JEWELLERY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis quibusdam cupiditate tempore minus repudiandae laboriosam commodi ex, nesciunt nobis, consequuntur corrupti dolorum. Doloribus obcaecati quae ad voluptatem tempore eveniet.</p>
                    <div className="pt-6">
                        <button className='px-12 py-3 bg-white/30 rounded-md hover:bg-white duration-200 hover:text-black'><Link href='/'>Shop Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

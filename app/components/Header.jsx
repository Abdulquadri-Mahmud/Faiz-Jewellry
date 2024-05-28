'use client';
import React from 'react'

import heroImage from '../../public/hero1.png';
import Link from 'next/link';
import Nav from './Nav';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function Header() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    };

    const heroImages = [
        {
            img: 'https://st2.depositphotos.com/1003713/6369/i/450/depositphotos_63691339-stock-photo-jewelry-in-store-window.jpg',
            h2: 'NEW COLLECTION',
            h1: 'JEWELLERY',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis quibusdam cupiditate tempore minus repudiandae laboriosam commodi ex, nesciunt nobis, consequuntur corrupti dolorum. Doloribus obcaecati quae ad voluptatem tempore eveniet.'
        },
        {
            img: 'https://st2.depositphotos.com/1003713/6369/i/450/depositphotos_63691339-stock-photo-jewelry-in-store-window.jpg',
            h2: 'NEW COLLECTION',
            h1: 'JEWELLERY',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis quibusdam cupiditate tempore minus repudiandae laboriosam commodi ex, nesciunt nobis, consequuntur corrupti dolorum. Doloribus obcaecati quae ad voluptatem tempore eveniet.'
        }
    ]
  return (
    <header className='overflow-hidden'>
        <Slider {...settings}>
            {
                heroImages.map((hero, index,) => (
                    <div className="h-[100vh] hero" key={index} style={{backgroundImage: `url(${hero.img.src})`}}>
                        <Nav/>
                        <div className="flex justify-start items-center h-full md:pl-20 pl-7">
                            <div className="md:max-w-[50%] max-w-[100%] text-white header-text">
                                <h2 className='text-2xl md:text-4xl relative'>{hero.h2},{index}</h2>
                                <h1 className='text-2xl md:text-7xl font-semibold py-4'>{hero.h1}</h1>
                                <p>{hero.p}</p>
                                <div className="pt-6">
                                    <button className='px-12 py-3 bg-white/30 rounded-md hover:bg-white duration-200 hover:text-black'><Link href='/'>Shop Now</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </header>
  )
}

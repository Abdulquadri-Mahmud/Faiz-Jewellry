'use client';
import React from 'react'

import Link from 'next/link';
import Nav from './Nav';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import img from '../../public/jewelries/bg-img.jpg';

import { Box, Image } from '@chakra-ui/react';

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
            img: 'https://t3.ftcdn.net/jpg/01/70/98/72/360_F_170987204_SFUjDgpOWjnjgRsEXKHn8q4JIbca1AnK.jpg',
            h2: 'DISCOVER THE EXCEPTIONAL JEWELLERY WITH US',
            h1: 'FAIZ-JEWELLERY',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis quibusdam cupiditate tempore minus repudiandae laboriosam commodi ex, nesciunt nobis.'
        },
        {
            img: 'https://st.depositphotos.com/1001469/4778/i/450/depositphotos_47788711-stock-photo-the-beautiful-woman-in-expensive.jpg',
            h2: 'DISCOVER THE EXCEPTIONAL JEWELLERY WITH US',
            h1: 'FAIZ-JEWELLERY',
            p: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis quibusdam cupiditate tempore minus repudiandae laboriosam commodi ex, nesciunt nobis.'
        }
    ]
  return (
    <header className='overflow-hidden'>
        <Slider {...settings}>
            {
                heroImages.map((hero, index,) => (
                    <Box className="h-[100vh] hero" key={index} backgroundImage={`${hero.img}`}>
                        <Nav/>
                        <div className="flex justify-start items-center h-full md:pl-20 pl-7">
                            <div className="md:w-[60%] w-[100%] text-white header-text">
                                <h2 className='text-3xl pb-6 md:text-6xl font-semibold'>{hero.h1}</h2>
                                <h2 className='text-3xl md:text-4xl font-semibold'>{hero.h2}</h2>
                                <p className='pt-4 text-xl font-medium'>{hero.p}</p>
                                <div className="pt-6">
                                    <button className='px-12 py-3 bg-white/30 rounded-md hover:bg-white duration-200 hover:text-black'><Link href='/'>Shop Now</Link></button>
                                </div>
                            </div>
                            <div className="">
                                <Image src=''/>
                            </div>
                        </div>
                    </Box>
                ))
            }
        </Slider>
    </header>
  )
}

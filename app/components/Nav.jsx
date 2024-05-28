import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className='text-white px-10 py-5 flex items-center justify-between'>
        <div className="logo">
            <h1 className='text-3xl'>Faiz-Jewellry</h1>
        </div>
        <nav className='bg-white/20 p-2 rounded-md'>
            <Link href='/' className='active'>Home</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Jewellry</Link>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>Login</Link>
        </nav>
    </div>
  )
}

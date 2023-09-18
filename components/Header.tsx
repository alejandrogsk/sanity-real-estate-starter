"use client"
import React from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    const pathname = usePathname()
    console.log("usePathname", pathname)

  return (
    <header className={`absolute pt-[1rem] top-0 left-0 right-0 z-20 ${pathname.startsWith("/properties/") && "bg-black"}`}>
    <nav className='flex justify-between mx-2 md:mx-8 text-base xl:text-xl font-medium'>
      <Link href='/' className={`cursor-pointer`}>
      <Image src='/icons/real-estate-logo.png' alt='Your real estate company logo' width={150} height={150} className='h-[100px] w-auto' />
      </Link>


      <ul className='flex items-center gap-2 text-white'>
        <li className='cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='cursor-pointer'><Link href='/properties'>Properties</Link></li>
        <li className='cursor-pointer'>About</li>
        <button className='py-2 px-4 bg-primary-main text-black rounded-tr-[1rem]'>Contact Us</button>
      </ul>
    </nav>
  </header>
  )
}

export default Header
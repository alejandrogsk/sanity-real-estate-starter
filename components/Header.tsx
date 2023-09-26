"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation"
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
const Header = () => {
    const pathname = usePathname()
  const [ isOpen, setIsOpen ] = useState(false);
  useEffect(()=>{
    setIsOpen(false)
  },[pathname])




  return (
    <>
    <header className={`absolute pt-[1rem] top-0 left-0 right-0  ${pathname.startsWith("/properties/") && "bg-black"}`}>
    <nav className='flex justify-between mx-2 md:mx-8 text-base xl:text-xl font-medium'>
      <Link href='/' className={`cursor-pointer`}>
      <Image src='/icons/real-estate-logo.png' alt='Your real estate company logo' width={150} height={150} className='h-[4rem] lg:h-[5rem] xl:h-[6.25rem] w-auto' />
      </Link>


      <ul className='hidden md:flex items-center gap-6 text-white text-base uppercase'>
        <li className='cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='cursor-pointer'><Link href='/properties'>Properties</Link></li>
        <li className='cursor-pointer'>About</li>
        <button className='py-2 px-4 bg-primary-main text-black text-base uppercase'>Contact Us</button>
      </ul>

      <span aria-label='Open mobile menu' className='cursor-pointer flex md:hidden' onClick={()=>setIsOpen(!isOpen)}>
        <Image src='/icons/Menu.svg' alt='Your real estate company logo' width={30} height={30} />
      </span>
    </nav>
  </header>
  
  <aside className={clsx({
    'w-full h-screen absolute z-[1] bg-white ease-in-out duration-300	':true,
    'translate-x-[-100%]': !isOpen,
    'translate-x-0': isOpen,
  })}>
     <span aria-label='Close mobile menu' className='cursor-pointer absolute top-[2rem] right-[.5rem] flex md:hidden ' onClick={()=>setIsOpen(!isOpen)}>
        <Image src='/icons/Close.svg' alt='Your real estate company logo' width={30} height={30} />
      </span>
  <ul className='h-full flex flex-col justify-center items-center gap-6 text-black text-xl uppercase'>
        <li className='cursor-pointer'><Link href='/'>Home</Link></li>
        <li className='cursor-pointer'><Link href='/properties'>Properties</Link></li>
        <li className='cursor-pointer'>About</li>
        <button className='py-2 px-4 bg-primary-main text-black'>Contact Us</button>
  </ul>
  </aside>  
  </>
  )
}

export default Header
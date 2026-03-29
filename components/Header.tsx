import { links } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <div className='w-full  flex items-center   p-2 justify-center z-[100] w-full  h-[3rem] fixed top-0 left-0'>

    <div className='py-5 px-8 flex h-[2.5rem] items-center justify-between  rounded-full   w-[90%] bg-neutral-100 backdrop-filter backdrop-blur-3xl   bg-opacity-20   '>
   <Link href="/">
        <span className='font-semibold text-xl lg:text-2xl text-green-700  '>
            Mason
        </span>
   </Link>

   <Sheet>
  <SheetTrigger asChild>
 <Button variant="ghost" className=' text-black  '>
    <Menu />
   </Button>
  </SheetTrigger>
  <SheetContent className='z-100'>
    <SheetHeader>
      <SheetTitle>

          <Link href="/">
        <SheetClose className='cursor-pointer'>
        <span className='font-semibold text-xl lg:text-2xl text-green-700    '>
            Mason
        </span>
        </SheetClose>
   </Link>
      </SheetTitle>
      <SheetDescription >
            <div className='flex gap-4 flex-col h-[80vh]  justify-center'>
    {
      links.map(({id,link,href}) => (
        <Link key={id} href={href} className='text-3xl text-neutral-600 hover:text-neutral-950 font-semibold '> 
        <SheetClose className='cursor-pointer'>

{link}
        </SheetClose>
</Link>
        ))
        
      }
   </div> 
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  
    </div>
      </div>
  )
}

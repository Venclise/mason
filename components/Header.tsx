import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='p-5'>
   <Link href="/">
        <span className='font-semibold text-xl lg:text-2xl '>
            Mason
        </span>
   </Link>
    </div>
  )
}

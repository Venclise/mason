import { links } from '@/lib/constants'
import { Mail, MapPin, Phone, Pin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col  w-full'>
    <div className='w-full flex items-center lg:flex-row flex-wrap justify-around bg-gray-50 border-t border-neutral-200 lg:p-20
     p-10'>
        <div className='flex flex-col gap-3'>

        <Link href="/">
        <span className='font-semibold text-xl lg:text-2xl text-green-800    '>
            Mason
        </span>
   </Link>
   <p className='text-xs lg:text-sm max-w-md text-neutral-700'>
    Mason Builders, with a 25 Years track record of success, remarkably fast developing infrastructure and construction enterprises. It has been working on high-end projects in your neighbourhood and delivering them the homes of their dreams.
   </p>
   <div className='flex items-center gap-2 p-2'>
      <Link href="https://www.instagram.com/weblifyorg/">
       <Image 
       src="/insta.svg"
       height={25}
       width={25}
       
       alt="Instagram icon"
       />
      </Link>
            <Link  href="https://wa.me/923165575485?text=Hi%20I%20want%20to%20discuss%20a%20project"
  target="_blank"
  rel="noopener noreferrer" >
       <Image 
       src="/whatsapp.svg"
       height={25}
       width={25}
       
       alt="Instagram icon"
       />
      </Link>
          <Link href="https://www.instagram.com/weblifyorg/">
       <Image 
       src="/face.svg"
       height={25}
       width={25}
       
       alt="Instagram icon"
       />
      </Link>
          <Link href="https://www.instagram.com/weblifyorg/">
       <Image 
       src="/yt.svg"
       height={25}
       width={25}
       
       alt="Instagram icon"
       />
      </Link>
   </div>
        </div>

        <div className='flex flex-col gap-3'>
            <h3>Quick links.</h3>
            {
                links.map(({href,id,link}) => (
                    <Link href={href} key={id} className='text-sm underline font-semibold'>
                        {link}
                     </Link>
                ))
            }
        </div>
           <div className='flex flex-col gap-3'>
            <h3>Get in touch.</h3>
          <a  href="https://wa.me/923165575485?text=Hi%20I%20want%20to%20discuss%20a%20project" className='flex items-center text-sm gap-4'>
          <Phone />
 +923165575485
          </a>
             <a  href='mailto:weblifyorg@gmail.com' className='flex items-center text-sm gap-4'>
          <Mail />
weblifyorg@gmail.com
          </a>
          <a href="#" className='flex items-center text-sm gap-4'>
            <MapPin />
            Street no 1 house no 1 Lahore
          </a>
        </div>
    </div>
    <p className='p-5 text-center'>Website Build by <Link target="_blank" className='text-blue-500 underline' href="https://weblify-nu.vercel.app/">Weblify</Link></p>
            </div>
  )


}

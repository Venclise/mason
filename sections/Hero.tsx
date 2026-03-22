import SplitText from '@/components/SplitText'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen lg:p-10 p-5 bg-green-900 flex flex-col lg:flex-row gap-12 lg:justify-between overflow-hidden'>
      <div className='flex flex-col'>

      <SplitText
  text="Building"
  className="text-white text-[5rem] lg:text-[8rem]  "
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>
<i>

     <SplitText
  text="Beyond"
  className="text-white text-[5rem]   lg:text-[8rem] font-libre"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="left"
/>
  </i>
  <div className='flex items-center gap-4'>
      <Link href="#projects">
    <Button variant="link" className='text-neutral-200 hover:gap-4 flex items-center cursor-pointer'>
Our Projects <ChevronRight />
    </Button>
      </Link>
      <Link href="#contact" >
<Button variant="secondary" className='text-neutral-800 py-5 underline px-4 rounded-full hover:gap-4 flex items-center cursor-pointer'>
Contact us <ChevronRight />
    </Button>
    </Link>
  </div>
  </div>
  <div className='w-full lg:w-[50%] h-[100%] relative'>
    <Image src="/bg.jpg"
    fill
    className='w-full h-full object-cover rounded-full '
    alt="Bg"
    />
  </div>

    </div>
  )
}

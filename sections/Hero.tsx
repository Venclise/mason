import SplitText from '@/components/SplitText'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen md:p-10 lg:p-20 p-5 bg-green-900 flex flex-col justify-center items-center gap-12 relative overflow-hidden'>
      <div className='flex flex-col z-[100] w-full h-full  items-center justify-center '>
      <SplitText
  text="Where thoughtful design shapes "
  className="text-white text-[3rem] "
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-200px"
  textAlign="left"
/>
<i>

     <SplitText
  text="outdoor living across Dubai."
  className="text-white text-[5rem] font-semibold   font-libre"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-200px"
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
<Button variant="secondary" className='text-neutral-800 py-5   px-4 rounded-full hover:gap-4 flex items-center cursor-pointer'>
Contact us <ChevronRight />
    </Button>
    </Link>
  </div>
</div>
  <div className='w-full h-[70%] '>
    <Image src="/bg2.jpg"
    fill
    className='w-full h-full object-cover  brightness-60'
    alt="Bg"
    />
  </div>

    </div>
  )
}

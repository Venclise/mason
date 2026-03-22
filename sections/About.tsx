
import CountUp from '@/components/CountUp'
import SplitText from '@/components/SplitText'
import React from 'react'

export default function () {
  return (
    <div id="about" className='h-max  p-8 lg:p-10 mt-4   bg-gray-50 w-full flex  items-center justify-center gap-8 '>
   
<div className='flex flex-wrap-reverse  w-full justify-center items-start lg:items-center gap-15 lg:gap-30'>

<div className='flex flex-col   ' >
<p className='font-semibold  text-orange-500'>Over</p>
<div className='flex items-end justify-end'>

<CountUp
  from={0}
  to={70}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text font-bold text-6xl lg:text-8xl"
/>
<span className='text-sm lg:text-2xl  font-semibold text-orange-500'>+ completed projects</span>
  </div>

  

  </div>

  <div className='flex flex-col   ' >
<p className='font-semibold  text-orange-500'>Over</p>
<div className='flex items-end justify-end'>

<CountUp
  from={0}
  to={26}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text font-bold text-6xl lg:text-8xl"
/>
<span className='text-sm lg:text-2xl  font-semibold  text-orange-500'>+ years of experience</span>
  </div>

  

  </div>

  <div className='flex flex-col'>
<p className='font-semibold text-orange-500'>Founded in</p>
<div className='flex items-end justify-end'>

        <SplitText
  text="2001"
  className=" font-bold text-6xl lg:text-8xl"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  
/>

  </div>
  </div>

  

  </div>



       
    </div>
  )
}

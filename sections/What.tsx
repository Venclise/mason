import SplitText from '@/components/SplitText'
import { process } from '@/lib/constants'
import AnimatedText from '@/lib/gsap'
import { Component, HardHat, Pyramid, Snowflake } from 'lucide-react'
import { div } from 'motion/react-client'
import Image from 'next/image'
import React from 'react'

export default function What() {
  return (
    <div id="services" className='h-max lg:h-screen w-full lg:p-10 p-5 flex-col flex justify-between '>
        <div className='flex flex-col w-full items-center justify-center'>

      
                <SplitText  
  text="Serivces"
  className="text-orange-500 font-semibold    text-md text-center"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  
/>


                <SplitText
  text="Bringing new life to old process"
  className="text-green-800 font-semibold text-4xl lg:text-6xl max-w-sm lg:max-w-xl"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='center'
  
/>
  </div>

  <div className='flex  flex-wrap lg:flex-nowrap justify-center lg:flex-row items-center lg:h-[50vh] w-full gap-2 p-10 '>

    <AnimatedText animate='bottomToTop'>
    <div className=' lg:flex-1 w-full   h-full bg-gray-50 p-5 flex flex-col gap-4 rounded-2xl' >
        <div className='flex items-center gap-2 lg:flex-col lg:items-start'>
        <Component  className=' size-8 lg:size-10  '/>
         <h2 className='capitalize font-semibold  text-2xl '>interior design</h2>
        </div>
         <p className='text-sm'>Interior design is the art and science of enchancing</p>
    </div>
    </AnimatedText> 

    <AnimatedText animate='bottomToTop' delay={.3}>

     <div className='flex-1 w-full h-full bg-gray-50 p-5 flex flex-col gap-4 rounded-2xl' >
               <div className='flex items-center gap-2 lg:flex-col lg:items-start'>

        <HardHat className=' size-8 lg:size-10  '/>
         <h2 className='capitalize font-semibold  text-2xl '>contruction</h2>
               </div>
         <p className='text-sm'>The techniques,procedures and material used during</p>
    </div>
    </AnimatedText> 
    <AnimatedText animate='bottomToTop' delay={.4}>

     <div className='lg:flex-1 w-full h-full bg-gray-50 p-5 flex flex-col gap-4 rounded-2xl' >



                   <div className='flex items-center gap-2 lg:flex-col lg:items-start'>

        <Pyramid className='size-8 lg:size-10 '/>
         <h2 className='capitalize font-semibold  text-xl '>architectural</h2>
                   </div>
         <p className='text-sm'>The process of planning,designing and constructing buildings</p>
    </div>
    </AnimatedText> 

    <AnimatedText animate='bottomToTop' delay={.5}>



        <div className='lg:flex-1 h-full bg-gray-50 p-5 flex flex-col gap-4 rounded-2xl' >
                   <div className='flex items-center gap-2 lg:flex-col lg:items-start'>

        <Snowflake  className=' size-8 lg:size-10  '/>
         <h2 className='capitalize font-semibold  text-xl '>decoration</h2>
                   </div>
         <p className='text-sm'>The gymnasium was adorned with poster crap papers</p>
    </div>
    </AnimatedText> 

  </div>
    </div>
  )
}

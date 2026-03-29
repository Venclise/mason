import Slider from '@/components/Slider'
import SplitText from '@/components/SplitText'
import { projects } from '@/lib/constants'
import React from 'react'


export default function Projects() {
  return (
    <div id="projects" className='h-max w-full   '>
              <div className='flex flex-col lg:p-10 p-5'>
                <SplitText  
  text="Projects "
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
  text="Our Glorious Portfolio "
  className="text-green-800 font-semibold text-5xl lg:text-6xl max-w-sm lg:max-w-xl"
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
  </div>
  <div className='lg:p-10 md:p-5 p-2'>
      <Slider data={projects}/>
  </div>

    </div>
  )
}

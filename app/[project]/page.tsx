"use client"
import Goback from '@/components/Goback'
import SplitText from '@/components/SplitText'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/constants'
import AnimatedText from '@/lib/gsap'
import { ArrowLeft } from 'lucide-react'





import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default async function page( {
    params, 
}: {
  params: Promise<{ project: string }>
}
) {
  
  const { project } =await params
  const projectId = parseInt(project, 10)

  const data = projects.find((i) => i.id === projectId )
  





  return (
  

        <div className=''>
        {
          data && (
            <div className='w-full flex flex-col gap-8 h-max mt-24 lg:p-10 p-5'>
              <div className='flex items-center gap-4'>
<Goback />
              <div className='gap-4 flex'>

                              <SplitText  
  text="Explore"
  className=" font-semibold text-5xl  lg:text-6xl "
  delay={30}
  duration={.5}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  
/>
                <SplitText  
  text={data.title}
  className="text-green-800 font-semibold text-5xl  lg:text-6xl "
  delay={30}
  duration={.5}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  
/>
  </div>
  </div>

<div className='w-full grid grid-cols-2 gap-4 items-center  flex-wrap   '>
    {data.images?.map(({img},i) => {

    const randomNumber = Math.floor(Math.random() * data.images.length) + 1 
    return (
      <AnimatedText animate='bottomToTop' delay={i/10}>

      <div className='aspect-square relative'>
      <Image src={`/h-${randomNumber}.jpg`} alt={data.title} fill className='object-cover rounded-md w-full h-full '/>
  </div>
    </AnimatedText>
)
    })}
</div>
            </div>
          )
        }
        </div>
      
    )
}

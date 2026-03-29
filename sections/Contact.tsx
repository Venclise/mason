import ContactForm from '@/components/Form'
import SplitText from '@/components/SplitText'


export default function Contact() {
  return (
    <div id="contact" className='lg:p-30 p-10  mt-12 lg:mt-0 gap-8  h-max   w-full  '>

   
<div className='flex  items-center justify-between gap-8 lg:flex-row flex-col w-full'>

<div className='flex flex-col gap-8 flex-1'>
                   <SplitText  
  text="Contact"
  className="text-orange-500 font-semibold    text-md "
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='center'
  
/>

                <SplitText  
  text="Let's Talk!"
 className="text-green-800 font-semibold text-[8rem] lg:text-[12rem] max-w-sm lg:max-w-md text-center lg:text-left"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  
/>


                <SplitText  
  text="Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours."
 className="text-xs lg:text-xs text-neutral-700 max-w-sm"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='center'
  
/>
  </div>

<div className='flex-.5'>
  <ContactForm />
</div>
  </div>
    </div>
  )
}

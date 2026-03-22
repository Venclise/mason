import ContactForm from '@/components/Form'
import SplitText from '@/components/SplitText'


export default function Contact() {
  return (
    <div id="contact" className='lg:p-30 p-10  mt-12 lg:mt-0 gap-8  h-max   w-full  '>

   
<div className='flex  items-center justify-between gap-8 lg:flex-row flex-col w-full'>

<div className='flex flex-col gap-8 flex-1'>
            <span className=' text-orange-500 font-semibold' > 
Contact
</span> 

                <SplitText  
  text="Let's Start a Project"
 className="text-green-800 font-semibold text-5xl lg:text-6xl max-w-sm lg:max-w-xl"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="words"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  
/>


                <SplitText  
  text="Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions."
 className="text-xs lg:text-sm text-neutral-700 max-w-md"
  delay={30}
  duration={1}
  ease="power3.out"
  splitType="lines"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign='left'
  
/>
  </div>

<div className='flex-.5'>
  <ContactForm />
</div>
  </div>
    </div>
  )
}

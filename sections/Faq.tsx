import SplitText from "@/components/SplitText"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/constants"
import AnimatedText from "@/lib/gsap"



export default function FAQ() {
  return (
    <div id="faq" className='lg:p-10 p-5 mt-12 lg:mt-0 gap-8  h-max   w-full flex flex-col items-center '>

            <span className=' text-orange-500 font-semibold' > 
FAQ's
</span>
<div className="flex items-center justify-between  gap-8 w-full lg:flex-row flex-col   ">
    <div className="flex-1 flex flex-col justify-center items-center   ">
     
        <SplitText
        text="Got Questions?"
 className="text-green-800 font-semibold text-5xl lg:text-6xl max-w-sm lg:max-w-xl"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        tag="h4"
        
/>
  
     
        <SplitText
        text="We've got answers"
        className="text-md lg:text-xl text-neutral-700 max-w-xl leading-10 lg:leading-20"
        delay={35}
        duration={1}
        ease="power3.out"
        splitType="words"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        tag="p"
        
/>  
    </div>

<Accordion type="single" collapsible defaultValue={`items-1`} className="flex-1 flex flex-col gap-4">
{faqs.map(({id,question,answer}) => (
    <AnimatedText animate="bottomToTop" delay={id / 10}>

  <AccordionItem value={`item-${id}  `}  key={id} className="w-full md:w-lg bg-neutral-100 border border-neutral-300 py-2 px-5 rounded-3xl " >
    <AccordionTrigger className="text-neutrl-800 text-md">{question}</AccordionTrigger>
    <AccordionContent className="text-gray-800">
        {answer}
    </AccordionContent>
  </AccordionItem>
</AnimatedText>
        ))
}
        </Accordion>
        </div>
    </div>
  )
}

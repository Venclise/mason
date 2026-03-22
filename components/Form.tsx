'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";

import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { CheckCircle2Icon } from "lucide-react";

import Link from "next/link";
import AnimatedText from "@/lib/gsap";

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
  const [loading,setLoading] = useState(false)
  const [submit,setSubmit] = useState(false)



const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
   setLoading(true)
    toast.success("Succesfully submitted")
    setLoading(false)
    setSubmit(true)
    
}
    

  return (
    
<>
{submit === true ? (

    <AnimatedText animate="rightToLeft">
<div className="flex items-center">
    <CheckCircle2Icon  height={100} width={100} fill="#3B834B"/>
    <p className="text-green-600  max-w-xs ">
    Submitted Successfully! We will repond you shortly <Link href="/" className="text-blue-500 underline">
    Continue Browsing
    </Link>
    </p>

</div> 
</AnimatedText>
 
):(

    <form
    
    onSubmit={sendEmail}
    className="w-full  py-7 px-5 h-max lg:h-max  flex flex-col  justify-center gap-8  bg-neutral-50 border  border-neutral-300 rounded-4xl"
    >
        <div className="flex gap-4">
          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-black font-semibold">Name</span>
            <Input
              name="first_name"
              placeholder="Enter your name"
              type="text"
              required
              className="border border-neutral-300"
              />
          </label>

          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="text-black font-semibold">Last name</span>
            <Input
              name="last_name"
              placeholder="Enter your last name"
              type="text"
              className="border border-neutral-300"
              
              />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-black font-semibold">Email</span>
          <Input
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            className="border border-neutral-300"
            />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="text-black font-semibold">Your message</span>
          <textarea
            name="message"
            className="w-full h-40 p-3 text-sm rounded-md border border-gray-200 bg-neutral-100 text-black outline-none "
            placeholder="Enter your message..."
            required
            />
        </label>
{
    loading ? 
    <Button  disabled className="rounded-sm bg-black">
    <Spinner />
    Loading
      </Button> : 
  <Button   className="rounded-xl cursor-pointer py-5 bg-black hover:bg-neutral-700">
        Submit
      </Button>
      }
        
  
      </form>
    )
  }
</>
 
  )
}

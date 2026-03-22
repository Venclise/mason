"use client";

import { useRef } from "react";
import { Navigation, A11y } from "swiper/modules";
import {  type Swiper as SwiperType } from "swiper";

import "swiper/css";


import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "@/lib/gsap";
import { Button } from "./ui/button";


export default function Slider({data}:{data:any}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative w-full flex    h-max lg:p-10 p-6 ">
    
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={14}
        slidesPerView={3}
        onSwiper={(swiper:any) => (swiperRef.current = swiper)}
        className="w-full h-screen  "
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.5 },
          1024: { slidesPerView: 2.7 },
        }}
      >
        {data.map(({ id, title, img }:{id: number,title:string,img:string}) => (
            <SwiperSlide key={id} className="flex justify-center h-[80vh]">

        <Link href={`/${id}`}  className="h-full  relative" key={id}>
          
              <div
                className="
                  h-full
                  rounded-3xl
                  overflow-hidden
                  bg-neutral-200
                  border  border-neutral-200
                  transition-all duration-300
                  hover:scale-[1.01]
                  group

                  
                "
              >
               
                <div className="relative h-full w-full  overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover brightness-60"
                    priority
                  />
                </div>

                
                <div className="h-max  bg-transparent absolute bottom-10 right-10 flex flex-col gap-3">
                  <div>
                    <h2 className="text-4xl text-white tracking-tight">
                      {title}
                    </h2>

                    <Button variant="link" className="text-white underline  group-hover:gap-4  ">
                    <span className="text-gray-200  inline-block   ">

                    Explore {title}
                    </span>
                     <ChevronRight size={20}/>
                     </Button>
                   
                  </div>
                </div>
              </div>

            </Link>

</SwiperSlide>
))}
      </Swiper>

      <div className=" w-max absolute   bottom-[0%] right-0 flex items-center gap-4 z-10 ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            h-13 w-13 rounded-full
            border border-neutral-100
            bg-neutral-200
            flex items-center justify-center
           hover:bg-neutral-100
            transition-all
            text-black   
         
          "
        >
          <ChevronLeft size={35} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-13 w-13 rounded-full
            border border-neutral-100
            bg-neutral-200
            flex items-center justify-center
           hover:bg-neutral-100
            transition-all
            text-black   
         
         
                    "
        >
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}





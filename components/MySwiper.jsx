import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, Navigation} from 'swiper/modules'
import { register } from "swiper/element/bundle";
register();

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';

const projects = [
    {
      num: "01",
      category: "Web",
      title: "project 1",
      description: "E-commerce website with payment method, to customers taste",
      stack: "html 5, css 3, javascript",
      image: "/assets/shopping.png",
      live: "",
      github: "",
    },
    {
      num: "02",
      category: "Logo creation",
      title: "project 2",
      description: "Different logo samples",
      stack: "canva, photoshop, coreldraw",
      image: "/assets/wakanda.png",
      live: "",
      github: "",
    },
    {
        num: "02",
        category: "Logo creation",
        title: "project 2",
        description: "Different logo samples",
        stack: "canva, photoshop, coreldraw",
        image: "/assets/wakanda.png",
        live: "",
        github: "",
      },
    {
      num: "03",
      category: "Frontend",
      title: "project 3",
      description: "Cloning of a crypto based project Wakanda Inu ",
      stack: "Nextjs, tailwindcss",
      image: "/assets/thisisalexi.png",
      live: "",
      github: "",
    },
    {
        num: "03",
        category: "Frontend",
        title: "project 3",
        description: "Cloning of a crypto based project Wakanda Inu ",
        stack: "Nextjs, tailwindcss",
        image: "/assets/thisisalexi.png",
        live: "",
        github: "",
      },
    {
      num: "04",
      category: "Game development",
      title: "project 3",
      description: "Simple tic-tac-toe game ",
      stack: "java",
      image: "/assets/slide9.png",
      live: "",
      github: "",
    },
  
  ];

const MySwiper = () => {

  return (
    <div>
    <Swiper
    navigation
    modules={[Navigation]}
    spaceBetween={50} 
    slidesPerView={1} 
    >
        {projects.map((object, index) => {
            return (

                <div key={index}>

                    <SwiperSlide>
                    <div className=" h-full group xl:flex block justify-center
                        items-center ">
                            <div className=" xl:hidden block w-3/4 mx-auto my-0">
                            <img src={object.image} alt="" />
                        </div>

                        <div className="min-h-[80vh] xl:w-[55%] w-full flex flex-col justify-center py-12 xl:px-0">
                            <div className="container mx-auto">
                                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                                    <div className="w-full xl:w-[70%] xl:h-[460px] flex flex-col
                                        xl:justify-between order-2 xl:order-none">
                                        <div className="flex flex-col gap-[30px] h-[50%]">

            
                                            <h3 className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                               {object.num} 
                                            </h3>
                                            <h2 className="text-[42px] font-bold leading-none text-white
                                            group-hover:text-accent transition-all duration-500 capitalize">
                                            {object.category}
                                            </h2>

                                            <p className="text-white/60">{object.description}</p>
                                            <p className="text-xl text-accent"> {object.stack}</p>
                                            <hr className=' bg-gray w-full ' />
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            
                            <div className="flex mt-10 ml-6 xl:-mt-24 items-center gap-4">
                                <Link href={object.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live projects</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                <Link href={object.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>


                        <div className=" xl:w-1/2 hidden xl:block h-full">
                            <img src={object.image} alt="" />
                        </div>
                    </div>  
                    </SwiperSlide>

                
                </div>
            )
        })}

    </Swiper>    
    </div>
  )
}

export default MySwiper
"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from '@emailjs/browser';

import {
   Select, 
   SelectContent, 
   SelectGroup, 
   SelectItem, 
   SelectLabel, 
   SelectValue } 
from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { Icon } from "lucide-react";

const info = [

  {
    Icon: <FaEnvelope />,
    title: "Email",
    description: "craftcodedjobs@gmail.com",
  },
  {
    Icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Canada",
  },
]

import { motion } from "framer-motion";
import { Item, SelectTrigger } from "@radix-ui/react-select";

const Contact = () => {

  const [notification, setNotification] = useState(false)

  useEffect(()=>{
    if (notification) {
      setTimeout(()=>{
        setNotification(false)
      },[10000])
    }
  },[notification])

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_btla03f', 'template_gyc5v1o', form.current, {
        publicKey: 'BXHA2pQZocTS7PuJQ',
      })
      .then(
        () => {
          setNotification(true);
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );

  };



  return (
    <motion.section id="contact"
    initial={{ opacity: 0 }}
    animate={{ 
      opacity:1, 
      transition: { delay: 2.4, duration:0.4, ease: "easeIn" },
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
              At <span className="text-accent" > Craftcoded </span> we are here to create something extraordinary, bringing your vision to life with unmatched precision
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Firstname"/>
                <Input type="lastname" name="lastname" placeholder="Lastname"/>
                <Input type="email" name="email" placeholder="Email address"/>
                <Input type="phone" name="phone" placeholder="Phone number"/>
              </div>

             <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>

                <SelectContent >
                  <SelectGroup name="service">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem  value="mst">Logo Design</SelectItem>
                    
                  </SelectGroup>
                </SelectContent>
             </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              <Button type="submit" value="Send" size="md" className="max-w-40">
                Send message
              </Button>
              {notification && <p className='text-gray-400 italic mx-auto my-0'>Email successfully sent!</p>}
            </form>

            
          </div>

          

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 ">
              {info.map((item, index) => {
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.Icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>

        </div>

        <p className="mt-20 text-accent text-center ">© copyright 2024</p>
      </div>
    </motion.section>
  )
}

export default Contact
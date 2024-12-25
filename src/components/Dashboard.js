"use client"

import Image from 'next/image'
import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'




function Dashboard() {
const [text, count ] = useTypewriter({
  words:[
    "Security Risk Assesment and Management",
    "Security Technology Intergration and Cybersecurity Solution",
    "Physical Security Consulting",
    "Executive Protection and Threat Assesments",
    "Training and Awareness program",
    "Compliance and Regulatory Support",
    "Brand Security Management",
    "Investigations",
    "Litigation Support"
  ], 
  loop: true,
  delaySpeed: 200,
})
  
  return (
    <div>
        <main className='bg-gradient-to-b from-teal-100' >
        <h1 className=' flex text-5xl lg:text-6xl font-semibold text-center h-80 overflow-hidden items-center justify-center  bg-gradient-to-b from-teal-500 rounded-3xl m-2'>
        <span className='w-2/3'>{text}
        <Cursor cursorColor='#f7ab0a'/>
        </span>
        
        </h1>
        <div className='flex items-center justify-center'>
        <Image className='' src="/assets/images/landing.PNG" alt="" height={200} width={1280}/>
        </div>
        <h1 className='text-center font-extrabold text-5xl mt-5 text-red-500 '>About Us</h1>
          <p className='text-wrap text-3xl font-serif  text-center   tracking-["15px"] p-5'>
          SecureFront Consultants and Advisors is dedicated to delivering top-tier security solutions tailored to
          the unique needs of each client. With our extensive expertise and unwavering commitment to excellence, we help our clients navigate the complexities of today&apos;s security landscape with confidence..             
          </p>
          
          <div className='flex items-center justify-center'>
        <Image className='' src="/assets/images/managed.PNG" alt="" height={200} width={1280}/>
        </div>
        </main>
    </div>
  )
}

export default Dashboard
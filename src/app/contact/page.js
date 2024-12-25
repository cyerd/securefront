import Header from '@/components/Header'
import { ClockIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, PhoneXMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <div className='w-full '>
            <div>
                <Image src="/assets/images/investigation.PNG" width={1920} height={480} alt='ivestigation' />
            </div>
            <div className=''>
                <h2 className='text-3xl text-red-500 text-center font-semibold font-serif m-5'>Get In Touch With Us:</h2>
                <div className=' xs:my-10 items-center text-center flex justify-evenly md:flex-row xs:flex-col '>
                   
                    <div className=' flex flex-col justify-center items-center text-center'>
                        <EnvelopeIcon className="h-8 mb-1 text-teal-400 group-hover:animate-bounce"  />
                        <span>
                        <p className='font-semibold text-gray-600'>SECUREFRONT</p>
                                <p>info@securefront.com</p>
                                <p>P.O Box 10780-00100 </p>
                                <p>Nairobi, Kenya</p>
                        </span>
                        
                    </div>
                    <div className='flex flex-col justify-center items-center text-center'>
                        <PhoneIcon className="h-8 mb-1  text-teal-400 group-hover:animate-bounce"  />
                        <span>
                        <p className='font-semibold text-gray-600'>Office</p>
                                <p>0727337380 </p>
                                <p>Nairobi, Kenya</p>
                        </span>
                        
                    </div>

                    <div className='flex flex-col justify-center items-center text-center'>
                        <ClockIcon className="h-8 mb-1  text-teal-400 group-hover:animate-bounce"  />
                        <span>
                        <p className='font-semibold text-gray-600'>Working Hours</p>
                                <p>Mon - Sat </p>
                                <p>9am - 6pm</p>
                        </span>
                        
                    </div>

                    <div className='flex flex-col justify-center items-center text-center'>
                        <MapPinIcon className="h-8 mb-1  text-teal-400 group-hover:animate-bounce"  />
                        <span>
                        <p className='font-semibold text-gray-600'>View Park Towers, Mezanine Suite</p>
                                <p>Utalii St, Nairobi </p>
                                
                        </span>
                        
                    </div>
                                       
              
                
                </div>
            </div>
            <span className='flex items-center text-center justify-center m-10 '>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818378364475!2d36.8134941750007!3d-1.2827958356223745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d23912632b%3A0xa3e642f1ab7822a8!2sView%20Park%20Towers%2C%20Utalii%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735115354516!5m2!1sen!2ske"  className=' mx-5 rounded-3xl ' width={1200}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </span>
        </div>
    </div>
  )
}

export default page
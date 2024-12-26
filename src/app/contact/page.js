import Header from "@/components/Header";
import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Header />
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/bg.PNG')", // Suggestive background image
        }}
      >
        {/* Hero Section */}
        <div className="relative">
          <Image
            src="/assets/images/investigation.PNG"
            width={1920}
            height={480}
            alt="Investigation"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-5xl font-bold">Contact Us</h1>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="py-16 bg-white bg-opacity-90">
          <h2 className="text-3xl text-teal-700 text-center font-semibold font-serif mb-10">
            Get In Touch With Us
          </h2>

          <div className="flex flex-wrap justify-center gap-10 px-10">
            {/* Email Section */}
            <div className="flex flex-col items-center text-center bg-teal-50 text-teal-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <EnvelopeIcon className="h-12 mb-3 text-teal-400" />
              <h3 className="font-semibold text-teal-800">SECUREFRONT</h3>
              <p>info@securefront.com</p>
              <p>P.O Box 10780-00100</p>
              <p>Nairobi, Kenya</p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center text-center bg-teal-50 p-5 rounded-lg text-teal-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <PhoneIcon className="h-12 mb-3 text-teal-400" />
              <h3 className="font-semibold text-teal-800">Office</h3>
              <p>0727337380</p>
              <p>Nairobi, Kenya</p>
            </div>

            {/* Working Hours Section */}
            <div className="flex flex-col items-center text-center bg-teal-50 text-teal-800 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <ClockIcon className="h-12 mb-3 text-teal-400" />
              <h3 className="font-semibold text-teal-800">Working Hours</h3>
              <p>Mon - Sat</p>
              <p>9am - 6pm</p>
            </div>

            {/* Address Section */}
            <div className="flex flex-col items-center text-center bg-teal-50 p-5 text-teal-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <MapPinIcon className="h-12 mb-3 text-teal-400" />
              <h3 className="font-semibold text-teal-800">
                View Park Towers, Mezanine Suite
              </h3>
              <p>Utalii St, Nairobi</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="flex items-center justify-center my-10 px-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818378364475!2d36.8134941750007!3d-1.2827958356223745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d23912632b%3A0xa3e642f1ab7822a8!2sView%20Park%20Towers%2C%20Utalii%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735115354516!5m2!1sen!2ske"
            className="w-full max-w-4xl h-96 rounded-3xl border-4 border-teal-500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default page;

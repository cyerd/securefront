import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <Header />

      {/* About Section */}
      <div className="flex flex-col items-center bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-300 text-center py-10">
        {/* Hero Section */}
        <div className="relative w-full h-72 md:h-96">
          <Image
            src="/assets/images/investigation.jpg"
            alt="About Us"
            layout="fill"
            objectFit="cover"
            objectPosition="10px 1%"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold">About Us</h1>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white shadow-md rounded-lg p-8 mx-5 mt-10 max-w-5xl">
          <h2 className="text-red-600 text-4xl font-bold mb-5">About the Company</h2>
          <p className="text-gray-700 text-lg leading-relaxed font-light">
            SecureFront Consultants and Advisors is a premier security consulting firm dedicated to
            providing comprehensive security solutions to businesses and individuals. With a wealth of
            experience in the field, our team of experts delivers tailored services to address the diverse needs of our clients, ensuring their safety and security in an increasingly complex threat landscape.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed font-light mt-4">
            Our diverse team comprises skilled analysts, ethical hackers, compliance specialists, and strategic advisors, each bringing unique perspectives to deliver comprehensive solutions.
          </p>
        </div>

        {/* Vision, Mission, and Policy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10 max-w-6xl">
          {/* Vision */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-red-600 text-3xl font-semibold">Vision</h3>
            <p className="text-gray-700 mt-4">
              To be the leading global provider of innovative and comprehensive security solutions,
              ensuring a safer world for businesses and individuals alike.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-red-600 text-3xl font-semibold">Mission</h3>
            <p className="text-gray-700 mt-4">
              Our mission is to deliver unparalleled security consulting services that empower our clients
              to mitigate risks, protect their assets, and maintain a secure environment.
            </p>
          </div>

          {/* Policy Statement */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-red-600 text-3xl font-semibold">Policy Statement</h3>
            <p className="text-gray-700 mt-4">
              SecureFront Consultants and Advisors is committed to maintaining the highest level of
              integrity, confidentiality, and professionalism in all our engagements.
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 bg-gradient-to-t from-indigo-200 via-indigo-300 to-indigo-400 w-full py-10 text-center">
          <p className="text-gray-800 font-medium">
            SecureFront Consultants & Advisors © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

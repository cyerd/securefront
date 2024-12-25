"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function Dashboard() {
  const [text] = useTypewriter({
    words: [
      "Security Risk Assessment and Management",
      "Security Technology Integration and Cybersecurity Solutions",
      "Physical Security Consulting",
      "Executive Protection and Threat Assessments",
      "Training and Awareness Programs",
      "Compliance and Regulatory Support",
      "Brand Security Management",
      "Investigations",
      "Litigation Support",
    ],
    loop: true,
    delaySpeed: 200,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-teal-100">
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-teal-600 text-white flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl lg:text-5xl font-bold px-5">
            <span>{text}</span>
            <Cursor cursorColor="#f7ab0a" />
          </h1>
          <p className="mt-4 text-lg lg:text-xl px-5">
            Empowering businesses with cutting-edge security solutions tailored to meet evolving challenges.
          </p>
          <div className="absolute bottom-0 w-full">
            <Image
              src="/assets/images/hero-background.jpg"
              alt="SecureFront Hero"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
            />
          </div>
        </section>

        {/* About Us Section */}
        <section className="mt-16 px-5 text-center">
          <h2 className="text-4xl font-extrabold text-teal-700">About Us</h2>
          <p className="text-lg lg:text-xl mt-5 leading-8 text-gray-700 max-w-3xl mx-auto">
            SecureFront Consultants and Advisors is dedicated to delivering top-tier security solutions tailored to the unique needs of each client. With extensive expertise and unwavering commitment to excellence, we empower our clients to navigate the complexities of today’s security landscape with confidence.
          </p>
        </section>

        {/* Services Section */}
        <section className="mt-16 px-5">
          <h2 className="text-4xl font-extrabold text-center text-teal-700">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <Image
                src="/assets/images/security-risk.jpeg"
                alt="Security Risk Assessment"
                height={150}
                width={150}
                className="mx-auto rounded-full"
              />
              <h3 className="text-2xl font-semibold mt-5">Risk Assessment</h3>
              <p className="mt-3 text-gray-600">
                Comprehensive analysis and strategies for mitigating security risks.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <Image
                src="/assets/images/technology-integration.jpeg"
                alt="Technology Integration"
                height={150}
                width={150}
                className="mx-auto rounded-full"
              />
              <h3 className="text-2xl font-semibold mt-5">Technology Integration</h3>
              <p className="mt-3 text-gray-600">
                Seamless integration of cutting-edge security technologies.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg transition-transform transform hover:scale-105">
              <Image
                src="/assets/images/executive-protection.jpeg"
                alt="Executive Protection"
                height={150}
                width={150}
                className="mx-auto rounded-full"
              />
              <h3 className="text-2xl font-semibold mt-5">Executive Protection</h3>
              <p className="mt-3 text-gray-600">
                Tailored services for safeguarding key individuals and assets.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16 px-5 bg-gray-100 py-10">
          <h2 className="text-4xl font-extrabold text-center text-teal-700">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Expert Team</h3>
              <p className="mt-3 text-gray-600">
                A diverse group of professionals with extensive experience in security and risk management.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Customized Solutions</h3>
              <p className="mt-3 text-gray-600">
                Tailored strategies to address your unique security challenges effectively.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg">
              <h3 className="text-2xl font-semibold">Commitment to Excellence</h3>
              <p className="mt-3 text-gray-600">
                Dedicated to delivering superior services with integrity and professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="mt-16 py-10 bg-teal-700 text-white text-center">
          <p className="text-lg">
            © {new Date().getFullYear()} SecureFront Consultants and Advisors. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;

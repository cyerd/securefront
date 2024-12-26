"use client";

import Head from "next/head";
import Image from "next/image";
import React from "react";

function Dashboard() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-teal-100">
      <Head>
        <title>SecureFront Consultants and Advisors</title>
        <meta
          name="description"
          content="SecureFront is a premier security consulting firm specializing in tailored solutions to safeguard businesses and individuals. Trust us for investigations, cybersecurity, compliance support, and more."
        />
        <meta name="keywords" content="Security, Risk Management, Cybersecurity, Investigations, Compliance" />
        <meta name="author" content="SecureFront Consultants and Advisors" />
        <meta property="og:title" content="SecureFront Consultants and Advisors" />
        <meta
          property="og:description"
          content="Empowering businesses with cutting-edge security solutions tailored to meet evolving challenges. Discover our services today."
        />
        <meta property="og:image" content="/assets/images/social-preview.jpg" />
        <meta property="og:url" content="https://securefront.example.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SecureFront Consultants and Advisors" />
        <meta
          name="twitter:description"
          content="Empowering businesses with cutting-edge security solutions tailored to meet evolving challenges. Discover our services today."
        />
        <meta name="twitter:image" content="/assets/images/social-preview.jpg" />
      </Head>

      <main>
        {/* Hero Section with Text Overlay */}
        <div className="relative">
          <Image
            src="/assets/images/team.jpg"
            width={1920}
            height={280}
            objectFit="cover"
            alt="Team working on a security assessment"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
            <div className="text-center max-w-4xl bg-black bg-opacity-10 text-white  rounded-lg">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
                Welcome to SecureFront Consultants and Advisors
              </h1>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-relaxed">
                SecureFront is a premier security consulting firm specializing in tailored solutions to safeguard businesses
                and individuals. Our expertise includes investigations, fraud detection, background checks, and compliance
                support to address diverse security needs in today’s evolving threat landscape.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section className="mt-16 px-5">
          <h2 className="text-4xl font-extrabold text-center text-teal-700">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {[
              {
                img: "/assets/images/security-risk.jpeg",
                title: "Risk Assessment",
                description: "Comprehensive analysis and strategies for mitigating security risks.",
              },
              {
                img: "/assets/images/technology-integration.jpeg",
                title: "Technology Integration",
                description: "Seamless integration of cutting-edge security technologies.",
              },
              {
                img: "/assets/images/executive-protection.jpeg",
                title: "Executive Protection",
                description: "Tailored services for safeguarding key individuals and assets.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 text-center hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  height={150}
                  width={150}
                  className="mx-auto rounded-full"
                />
                <h3 className="text-2xl font-semibold mt-5">{service.title}</h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
              </div>
            ))}
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

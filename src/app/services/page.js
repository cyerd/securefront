import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
    <Header/>
    <div 
        className="flex flex-col items-center bg-cover bg-center py-10 px-4" 
        style={{ backgroundImage: "url('/assets/images/bg.PNG')" }}
      >
        <h1 className="text-3xl font-bold text-teal-600 mb-10">Core Services</h1>

        <div className="w-full max-w-4xl space-y-10">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
            <Image src="/assets/images/investigative solution.PNG" alt="Investigative Solutions" width={300} height={300} className="rounded-lg shadow-md" />
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-teal-700">Investigative Solutions</h2>
              <p className="mt-2 text-gray-700">
                Fraud detection and corporate investigations.<br />
                Asset tracing and recovery for businesses and individuals.<br />
                Corruption, conflict of interest, and compliance investigations.<br />
                Evidence collection and analysis for legal and strategic needs.<br />
                Collaboration with law enforcement and legal entities.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
            <Image src="/assets/images/courtroom.PNG" alt="Litigation Support" width={300} height={300} className="rounded-lg shadow-md" />
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-teal-700">Litigation Support</h2>
              <p className="mt-2 text-gray-700">
                Expert testimony and consultation for complex legal cases.<br />
                Evidence preparation, analysis, and documentation for court.<br />
                Background checks and due diligence tailored for litigation needs.<br />
                Case strategy support for legal teams.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
            <Image src="/assets/images/secure digital.jpeg" alt="AML/CFT Compliance" width={300} height={300} className="rounded-lg shadow-md" />
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-teal-700">AML/CFT Compliance</h2>
              <p className="mt-2 text-gray-700">
                Development and implementation of AML/CFT policies and procedures.<br />
                Compliance audits to meet regulatory standards.<br />
                Risk assessments to identify and mitigate financial crimes.<br />
                Training programs for staff on AML/CFT awareness and compliance.<br />
                Investigations into suspicious financial activities and transactions.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white bg-opacity-90 p-6 shadow-lg rounded-lg">
            <Image src="/assets/images/cctv.jpeg" alt="Security Management and Risk Assessment" width={300} height={300} className="rounded-lg shadow-md" />
            <div className="text-left">
              <h2 className="text-2xl font-semibold text-teal-700">Security Management and Risk Assessment</h2>
              <p className="mt-2 text-gray-700">
                Comprehensive security audits and risk evaluations.<br />
                Mitigation strategies for physical and operational risks.<br />
                Emergency response planning and crisis management.<br />
                Training and awareness programs for enhanced organizational security.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-10 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose SecureFront?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li><strong>AML/CFT Expertise:</strong> Stay ahead of financial crime with our proven compliance solutions.</li>
          <li><strong>Unmatched Investigative Services:</strong> A strong record of uncovering fraud, asset recovery, and resolving disputes.</li>
          <li><strong>Litigation-Ready Support:</strong> Comprehensive solutions tailored for legal teams.</li>
          <li><strong>Trusted Professionals:</strong> We adhere to the highest standards of integrity, ethics, and confidentiality.</li>
        </ul>
      </div>
    </div>
  )
}

export default page
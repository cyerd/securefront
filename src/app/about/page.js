import Header from '@/components/Header'
import React from 'react'

function About() {
  return (
    <div>
      <Header/>
      <div>
      <main className="container mx-auto p-6">
        <div className='flex items-center flex-col bg-gradient-to-b from-indigo-200 text-center mb-8'>

          <h1 className='text-red-500 text-5xl font-bold text-center p-5'>About the Company</h1>
          <p className='bg-teal-600 text-white p-5 font-mono font-light leading-7 shadow-lg rounded-lg'>
            SecureFront Consultants and Advisors is a premier security consulting firm dedicated to providing
            comprehensive security solutions to businesses and individuals. With a wealth of experience in the
            field, our team of experts delivers tailored services to address the diverse needs of our clients,
            ensuring their safety and security in an increasingly complex threat landscape.
            SecureFront Consultants and Advisors is a diverse team of experts in cybersecurity, risk management, and advisory services. Led by seasoned professionals with extensive industry experience, our
            team comprises skilled analysts, ethical hackers, compliance specialists, and strategic advisors.
            Each member brings a unique set of skills and perspectives, allowing us to deliver comprehensive
            solutions tailored to our clients needs.
          </p>

          <div className='m-5 space-y-8'>
            <div className='text-center'>
              <h3 className='text-red-600 text-3xl font-semibold'>Vision</h3>
              <p className='p-5 text-gray-700 leading-7 shadow-md rounded-lg bg-white'>
                To be the leading global provider of innovative and comprehensive security solutions, ensuring a
                safer world for businesses and individuals alike.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-red-600 text-3xl font-semibold'>Mission</h3>
              <p className='p-5 text-gray-700 leading-7 shadow-md rounded-lg bg-white'>
                Our mission is to deliver unparalleled security consulting services that empower our clients to
                mitigate risks, protect their assets, and maintain a secure environment. We are committed to excellence, innovation, and the highest ethical standards in all our operations.
              </p>
            </div>
            <div className='text-center'>
              <h3 className='text-red-600 text-3xl font-semibold'>Policy Statement</h3>
              <p className='p-5 text-gray-700 leading-7 shadow-md rounded-lg bg-white'>
                SecureFront Consultants and Advisors is committed to maintaining the highest level of integrity,
                confidentiality, and professionalism in all our engagements. We adhere to industry best practices
                and continuously update our methodologies to address evolving security challenges. Our policies
                emphasize client satisfaction, quality service delivery, and the protection of our clients interests.
              </p>
            </div>
          </div>
        </div>
      </main>
      </div>
    {/* <div className='flex items-center  flex-col bg-gradient-to-b from-indigo-200 text-center mb-5'>

      <h1 className='text-red-500 text-5xl font-bold text-center p-5'>About the Company</h1>
      <p className='bg-teal-600 p-5 font-mono font-light'>
      SecureFront Consultants and Advisors is a premier security consulting firm dedicated to providing
      comprehensive security solutions to businesses and individuals. With a wealth of experience in the
      field, our team of experts delivers tailored services to address the diverse needs of our clients,
      ensuring their safety and security in an increasingly complex threat landscape.
      SecureFront Consultants and Advisors is a diverse team of experts in cybersecurity, risk management, and advisory services. Led by seasoned professionals with extensive industry experience, our
      team comprises skilled analysts, ethical hackers, compliance specialists, and strategic advisors.
      Each member brings a unique set of skills and perspectives, allowing us to deliver comprehensive
      solutions tailored to our clients needs.
      </p>
      <div className='m-5'>
      <h3 className='text-red-600 text-3xl font-semibold text-center'>
      Vision
      </h3>
      <p className='p-5'>
      To be the leading global provider of innovative and comprehensive security solutions, ensuring a
      safer world for businesses and individuals alike.
      </p>
      <h3 className='text-red-600 text-3xl font-semibold text-center'>
        Mission
      </h3>
      <p className='p-5'>
      Our mission is to deliver unparalleled security consulting services that empower our clients to
      mitigate risks, protect their assets, and maintain a secure environment. We are committed to excellence, innovation, and the highest ethical standards in all our operations.
      </p>
      <h3 className='text-red-600 text-3xl font-semibold text-center'>
        Policy Statement
      </h3>
      <p className='p-5'>
      SecureFront Consultants and Advisors is committed to maintaining the highest level of integrity,
      confidentiality, and professionalism in all our engagements. We adhere to industry best practices
      and continuously update our methodologies to address evolving security challenges. Our policies
      emphasize client satisfaction, quality service delivery, and the protection of our clients interests.
      </p>
    </div>
    </div> */}
    </div>
  )
}

export default About
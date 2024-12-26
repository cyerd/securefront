import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { SocialIcon } from 'react-social-icons'


const navigation = [
  { name: 'SECUREFRONT', href: '/', current: true },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Services', href: 'services', current: false },
  { name: 'Contact Us', href: 'contact', current: false },
  // { name: 'Privacy Policy', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const twitter = <SocialIcon url="https://twitter.com" />
  return (
    <>

      <div className="min-h-full">
        <Disclosure as="nav" className="bg-teal-700 border-b-2 border-gray-600">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <Link href="/">
                  <Image
                  
                    alt="Your Company"
                    src="/assets/images/securefront.jpg"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    
                  </button>

              
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
                    {/* WhatsApp Icon */}
                    <div className="fixed top-5 right-5 z-50">
                      <a
                        href="https://wa.me/+254727337380" // Replace with your WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110"
                        style={{
                          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <FaWhatsapp className="text-2xl lg:text-3xl" />
                      </a>
                    </div>
          </DisclosurePanel>
        </Disclosure>


      </div>
    </>
  )
}

import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="h-screen relative bg-white overflow-x-hidden lg:overflow-hidden">
      <Link href="/">
        <a className="absolute top-4 left-4 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-500 hover:text-gray-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </a>
      </Link>
      <div className="pt-2 sm:pt-10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <div className="w-full flex justify-center lg:justify-start">
              <img
                className="rounded-full w-80 h-80"
                src="/images/on-the-boat.png"
                alt="Hoku in his natural habitat"
              />
            </div>
            <h1 className="mt-8 text-6xl font font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Who we are
            </h1>
            <h2 className="mt-2 text-4xl font font-medium tracking-tight text-gray-500 sm:text-2xl">
              A group of people specialized in outdoor home detailing and
              pressure washing.
            </h2>
            <h2 className="mt-2 text-xl font font-normal text-gray-500">
              Email or call for all your home or commercial detailing needs!
            </h2>
            <div className="mt-2 w-4 h-4">
              <a
                href="https://www.instagram.com/steadypressurehd/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                  alt="Instagram Logo"
                />
              </a>
            </div>
          </div>
          <div className="mt-10">
            {/* Decorative image grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
            >
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                      {/* Left */}
                      <img
                        src="/images/after1.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="/images/before1.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      {/* Middle */}
                      <img
                        src="/images/after2.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="/images/before2.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1609385153535-ab8dc212132c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                    {/* Right */}
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="/images/before3.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="w-44 h-64 rounded-lg overflow-hidden">
                      <img
                        src="/images/after3.png"
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-1/3">
              <Link href="/about">
                <a className="flex items-center text-center justify-center bg-white border border-gray-700 border-transparent rounded-md py-3 px-8 font-medium text-gray-700 hover:bg-gray-700 hover:text-white">
                  Email
                </a>
              </Link>

              <a
                href="tel:808-217-6036"
                className="mt-2 sm:mt-0 sm:ml-4 flex items-center text-center justify-center bg-gray-700 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-white hover:text-gray-700 hover:border-gray-700"
              >
                Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const HomeHero = () => (
  <div className="mx-auto overflow-hidden max-w-7xl w-full pt-16 pb-0 text-center lg:py-48 lg:text-left">
            <div className="px-4 pt-6 pb-4 md:pt-0 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-5xl md:text-4xl tracking-tight font-extrabold flex flex-col text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Perth's Best</span>{' '}
                <span className="block text-red-600 xl:inline">Pest Control</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-red-700 font-bold font-sans sm:text-xl md:mt-5 md:max-w-3xl">
                Keeping Perth free from pests, with a professional and prompt service.
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to="tel:0499904014"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://wapestconsultants.com.au/images/car.PNG"
              alt=""
            />
          </div>
          </div>
)


export default HomeHero

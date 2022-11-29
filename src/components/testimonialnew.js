import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const TestimonialsNew = () => (
  <section className="bg-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
      <svg
        className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
        width={784}
        height={404}
        fill="none"
        viewBox="0 0 784 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
      </svg>

      <svg
        className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
      </svg>

      <div className="relative lg:flex lg:items-center">
        <div className="hidden lg:block lg:flex-shrink-0">
          <img
            className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
            src="https://media-cdn.tripadvisor.com/media/photo-s/19/f2/ca/ed/logo.jpg"
            alt=""
          />
        </div>

        <div className="relative lg:ml-10">
          <svg
            className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              strokeWidth={2}
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <blockquote className="relative">
            <div className="text-2xl leading-9 font-medium text-gray-900">
              <p>
                    "Michael was super professional and did a very thorough job. He went into a lot of detail, more than I have seen other companies do that we have used in the past. Very affordable for the work he carried out. I'll happily continue to use this company moving forward for our business!"
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex">
                <div className="flex-shrink-0 lg:hidden">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/19/f2/ca/ed/logo.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-4 lg:ml-0">
                  <div className="text-base font-bold text-black-900">Basilico Pizzeria</div>
                  <div className="text-base font-bold text-red-600">Perth, WA</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
)


export default TestimonialsNew

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Services = () => (
  <section className="services py-8">
    <div className="container mx-auto">
    <div className="columns-1 lg:columns-4">
    <div className="service flex pb-6 items-center flex-col justify-center">
      <div className="img-wrap">
        <StaticImage
          src="../images/ant.png"
          width={100}
          alt="ant"
        />
      </div>
      <div className="label">
        <h6 className="text-4xl pb-6 font-sans font-bold text-red-600">Ants</h6>
      </div>
    </div>
    <div className="service flex pb-6 items-center flex-col justify-center">
      <div className="img-wrap">
        <StaticImage
          src="../images/roach.png"
          width={120}
          alt="roach"
        />
      </div>
      <div className="label">
        <h6 className="text-4xl font-sans font-bold text-red-600">Roaches</h6>
      </div>
    </div>
    <div className="service flex pb-6 items-center flex-col justify-center">
      <div className="img-wrap">
        <StaticImage
          src="../images/rat.png"
          width={120}
          alt="rat"
        />
      </div>
      <div className="label">
        <h6 className="text-4xl font-sans font-bold text-red-600">Rats & Mice</h6>
      </div>
    </div>
    <div className="service flex pb-6 items-center flex-col justify-center">
      <div className="img-wrap">
        <StaticImage
          src="../images/Termite.png"
          width={100}
          alt="termite"
        />
      </div>
      <div className="label">
        <h6 className="text-4xl font-sans font-bold text-red-600">Termites</h6>
      </div>
    </div>
    </div>
    </div>
  </section>
)


export default Services

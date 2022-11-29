import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Testimonials = () => (
  <section className="testimonials">
  <div className="testim-wrap">
      <div className="block-quote">
        <blockquote>
         "Michael was super professional and did a very thorough job. He went into a lot of detail, more than I have seen other companies do that we have used in the past. Very affordable for the work he carried out. I'll happily continue to use this company moving forward for our business!"
        </blockquote>
      </div>
      <div className="credit">
        <span className="avatar-wrap">
          <StaticImage
            src="../images/test-Basilico.png"
            alt="avatar"
            className="avatar"
            transformOptions={'inside'}
            width={60}
          />
        </span>
        <span className="name-wrap">
         Basilico Pizzeria
        </span>

      </div>
    </div>
    <div className="testim-wrap">
      <div className="block-quote">
        <blockquote>
        "Michael is great to work with and gave a great service. Highly recommend."
        </blockquote>
      </div>
      <div className="credit">
        <span className="avatar-wrap">
          <StaticImage
            src="../images/test-KaneHoward.png"
            alt="avatar"
            className="avatar"
            transformOptions={'inside'}
            width={60}
          />
        </span>
        <span className="name-wrap">
          Kane Howard
        </span>

      </div>
    </div>
    <div className="testim-wrap">
      <div className="block-quote">
        <blockquote>
        "Professional, friendly and thorough service highly recommended"
        </blockquote>
      </div>
      <div className="credit">
        <span className="avatar-wrap">
          <StaticImage
            src="../images/test-dt.png"
            alt="avatar"
            className="avatar"
            transformOptions={'inside'}
            width={60}
          />
        </span>
        <span className="name-wrap">
          D T
        </span>

      </div>
    </div>
  </section>
)


export default Testimonials

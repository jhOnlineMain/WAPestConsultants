import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeHero from "../components/HomeHero"
import TestimonialsNew from "../components/testimonialnew"
import Services from "../components/services"
import SellingPoints from "../components/SellingPoints"
import * as styles from "../components/index.module.css"
import RedHeading from "../components/RedHeading"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
  <HomeHero />
  <TestimonialsNew />
  <Services />
    <section className="specials">
    <div className="columns-1 lg:columns-1">
      <div className="offer flex flex-col justift-center items-center">
        <div className="label">
          <RedHeading text="Pensioner Discounts" />
        </div>
        <div className="details">
          <ul className="flex flex-col md:flex-row ml-0 gap-5 pr-12 pl-12 items-center justify-center">
            <li><StaticImage
              src="../images/credit1.png"
              height={225}
              alt="product"
              /></li>
            <li><StaticImage
              src="../images/credit2.png"
              height={225}
              alt="product"
              /></li>
            <li><StaticImage
              src="../images/credit3.png"
              height={225}
              alt="product"
              /></li>
          </ul>
        </div>
      </div>
      </div>
    </section>
    <section className="pesticides">
    <div className="container mx-auto">
      <div className="title flex justify-center">
        <h6 className="text-4xl w-auto shadow-md text-white my-12 rounded-2xl text-center pill font-bold p-2 bg-red-600 border-r-4 shadow-md">
        Our Products</h6>
      </div>
      <div className="columns-1 flex-col items-center justify-center lg:columns-4  md:columns-4 gap-14">
        <div className="product flex m-8 justify-center">
          <StaticImage
          src="../images/products/p1.png"
          height={85}
          alt="product"
          />
        </div>
        <div className="product flex m-8 md:m-0 justify-center">
          <StaticImage
          src="../images/products/p2.png"
          height={85}
          alt="product"
          />
        </div>
        <div className="product flex m-8 md:m-0 justify-center">
          <StaticImage
          src="../images/products/p3.png"
          height={85}
          alt="product"
          />
        </div>
        <div className="product flex m-8 md:m-0 justify-center">
          <StaticImage
          src="../images/products/p4.png"
          height={85}
          alt="product"
          />
        </div>
      </div>
      </div>
    </section>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />


export default IndexPage

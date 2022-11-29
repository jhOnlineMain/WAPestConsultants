import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ctaButton } from "../components/header"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeHero from "../components/HomeHero"
import TestimonialsNew from "../components/testimonialnew"
import Services from "../components/services"
import * as styles from "../components/index.module.css"


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
  <HomeHero />
  <TestimonialsNew />
  <Services />
    <section className="specials">
      <div className="offer">
        <div className="label">
          <h6>Pensioner Discount</h6>
        </div>
        <div className="details">
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
          </ul>
        </div>
        <div className="cta">
          {ctaButton('Call Now')}
        </div>
      </div>
      <div className="offer">
        <div className="label">
          <h6>Payment Plans</h6>
        </div>
        <div className="details">
          <ul>
            <li>Detail 1</li>
            <li>Detail 2</li>
            <li>Detail 3</li>
          </ul>
        </div>
        <div className="cta">
          {ctaButton('Call Now')}
        </div>
      </div>
    </section>
    <section className="pesticides">
      <div className="title">
        <h6>Our Products</h6>
      </div>
      <div className="products">
        <div className="product">
          <StaticImage
          src="../images/products/p1.png"
          height={60}
          alt="product"
          />
        </div>
        <div className="product">
          <StaticImage
          src="../images/products/p2.png"
          height={60}
          alt="product"
          />
        </div>
        <div className="product">
          <StaticImage
          src="../images/products/p3.png"
          height={60}
          alt="product"
          />
        </div>
        <div className="product">
          <StaticImage
          src="../images/products/p4.png"
          height={60}
          alt="product"
          />
        </div>
      </div>
    </section>
    <section className="cta-fw">
      <div className="key-selling-points">
        <div className="ksp-title">
          <h6>Our Promise</h6>
        </div>
        <ul>
          <li className="flex">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              style={{
                height:'2rem',
                width:'2rem',
              }}>
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Selling point</span>
        </li>
        <li className="flex">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              style={{
                height:'2rem',
                width:'2rem',
              }}>
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Selling point</span>
        </li>
        <li className="flex">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              style={{
                height:'2rem',
                width:'2rem',
              }}>
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Selling point</span>
        </li>
        <li className="flex">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              style={{
                height:'2rem',
                width:'2rem',
              }}>
                <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Selling point</span>
        </li>
        </ul>
      </div>
      <div className="form-wrap">
        <div className="form-title">
          <h6>Take action today!</h6>
        </div>
        <form>
          <div className="details">
            <input type="text" id="name" placeholder="Name"/>
            <input type="text" id="phone" placeholder="Phone"/>
            <input type="text" placeholder='E-mail' id="email" />
          </div>
          <div className="services-chk">
            <h6>Enquire about:</h6>
            <ul>
              <li>
                <input type="checkbox" id="service1" />
                <label htmlFor="service1"> Cockroaches</label>
              </li>
              <li>
                <input type="checkbox" id="service2" />
                <label htmlFor="service2"> Rats & Mice</label>
              </li>
              <li>
                <input type="checkbox" id="service3" />
                <label htmlFor="service3"> Ants</label>
              </li>
              <li>
                <input type="checkbox" id="service4" />
                <label htmlFor="service4"> Termites</label>
              </li>
              <li>
                <input type="checkbox" id="service5" />
                <label htmlFor="service5"> Other</label>
              </li>
            </ul>
          </div>
          <div className="submit-wrap">
            <div>
              <input type="submit" id="cta_submit" value="Submit"/>
            </div>
            <div>
              <p>or</p>
            </div>
            <div>
              {ctaButton('Call Now')}
            </div>
          </div>
        </form>
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

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet";
import Header from "./header"
import "./layout.scss"
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}> */}
        <main>{children}</main>
        {/* </div> */}
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            borderTop: '3px solid #ee1b35',
            padding: '2rem 1rem',
            backgroundColor:'black'
          }}>
          <div className="credit-wrap">
          © {new Date().getFullYear()} &middot; Built by{` `}<a href="https://ordinaryagency.com.au">Ordinary</a>
          </div>
          <div className="logo-wrap">
            <StaticImage
            src="../images/WAPest-logo-simple-light.png"
            width={120}
            alt="WA Pest Consultants logo"
            />
          </div>
        </footer>
      
    </>
  )
}

export default Layout

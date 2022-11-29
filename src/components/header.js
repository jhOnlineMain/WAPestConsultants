import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"



const Header = ({ siteTitle }) => (
  <header
  className="flex p-2 w-100 shadow-md flex-col items-center justify-center md:flex-row"
    style={{
      margin: `0 auto`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      borderBottom: '3px solid #ee1b35',
      backgroundColor:'black'
    }}
  >
    <Link to="/">

    <StaticImage
      alt="WA-Pest logo"
      height={88}
      style={{ margin: 0 }}
      src="../images/WAPest-logo-horiz-light.png"
    />
    </Link>
    <button href="tel:0499904014" className="bg-red-600 w-auto px-5 py-2 text-white font-bold font-sans text-3xl flex items-center justify-center" style={{
      borderRadius:'10px'
    }}>
      <div className="button-text" style={{
      display:'flex',
      flexFlow:'row nowrap',
      justifyContent:'center',
      width:'120px'
      }}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{
            width:'16px',
            height:'16px',
            marginRight:'5px'
          }}>
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </span>
        <span style={{
          fontWeight:'bold',
          fontSize:'18px'
        }}>
          0499904014
        </span>
      </div>
    </button>
  </header>
)

export function ctaButton(label) {
  return  (
  <button href="tel:0499904014" style={{
    borderRadius:'10px',
    padding: '0.5rem 1.5rem'
  }}>
    <div className="button-text" style={{
    display:'flex',
    flexFlow:'row nowrap',
    justifyContent:'center',
    width:'120px'
    }}>
      <span style={{marginTop:0}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{
          width:'16px',
          height:'16px',
          marginRight:'5px'
        }}>
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      </span>

      <span style={{
        fontWeight:'bold',
        fontSize:'18px',
        marginLeft: '4px',
      }}>
       {label || '0499904014'}
      </span>

    </div>
  </button>
  )
}

export default Header

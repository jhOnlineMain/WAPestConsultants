import * as React from "react"
import { Link } from "gatsby"

const RedHeading = ({ text }) => (
  <div className="container mx-auto flex justify-center text-center">
  <h6 className="text-5xl w-auto max-w-fit shadow-md text-white my-12 rounded-2xl text-center pill font-bold p-2 bg-red-600 border-r-4 shadow-md">{text}</h6>
  </div>
)

export default RedHeading

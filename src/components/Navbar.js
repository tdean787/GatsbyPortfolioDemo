import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

//useStaticQuery can only be used once in a component
export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

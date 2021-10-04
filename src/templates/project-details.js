import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage, getImageData } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featured } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <GatsbyImage image={getImage(featured)} alt="Banner" />{" "}
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />{" "}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop and Deploy</h3>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={getImage(data.file)} alt="banner"></GatsbyImage>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH

          placeholder: BLURRED

          formats: [AUTO, WEBP]
        )
      }
    }
  }
`

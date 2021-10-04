import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  const contact = data.site.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Projects Portfolio</h1>
        <h3> list of example projects</h3>
        <section className={styles.projects}>
          {data.allMarkdownRemark.nodes.map(project => {
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
              >
                <GatsbyImage image={getImage(project.frontmatter.thumb)} />
                <h3> {project.frontmatter.title}</h3>
                <p> {project.frontmatter.stack}</p>
              </Link>
            )
          })}
          <p>{contact}</p>
        </section>
      </div>
    </Layout>
  )
}

//get files

export const query = graphql`
  query Projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          title
          stack
          date
        }
        id
      }
    }
    site {
      siteMetadata {
        contact
      }
    }
  }
`

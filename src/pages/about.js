import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

export default function about() {
  return (
    <Layout>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            reiciendis ea facere dolorum quisquam sequi iure neque eius cum
            nesciunt optio aliquid facilis doloribus voluptatum non obcaecati
            commodi, rem, assumenda placeat odio ducimus omnis at! Pariatur,
            autem commodi? Fugit, dolor rerum necessitatibus sit nisi officia.
            Laborum officiis sequi dolores neque.
          </p>
        </div>
      </div>
    </Layout>
  )
}

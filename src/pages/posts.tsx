import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/post-item"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Posts" />
      <h1 className="text-lg text-gray-600 dark:text-gray-100 mb-3 border-b">All Posts</h1>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post, index) => {
          return (
            <li key={post.fields.slug} className={index > 0 ? "border-t" : ""}>
              <PostItem post={post} />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          time
          title
          path
          author {
            name
            alias
            profilePictureUri
          }
          description
          category
        }
      }
    }
  }
`

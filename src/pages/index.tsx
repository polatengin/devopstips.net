import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/post-item"
import { ExternalLinkIcon } from "../components/icons"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="All posts" />
      <blockquote className="bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-white border-l-8 border-blue-500 p-4 rounded">
        <h1 className="text-2xl">Welcome</h1>
        <p className="mt-3">Welcome to <em>DevOps Tips and Tricks</em>, this site is a collection of tips and tricks that <em>"try to"</em> cover the most loved DevOps platforms, <em>a.k.a.</em> <a className="text-blue-500 inline-flex items-baseline" href="https://dev.azure.com" target="_blank">Azure DevOps <ExternalLinkIcon className="ml-1 inline w-3 h-3" /></a> and <a className="text-blue-500  inline-flex items-baseline" href="https://github.com" target="_blank">GitHub <ExternalLinkIcon className="ml-1 inline w-3 h-3" /></a> 😊.</p>
        <p className="mt-3">The tips, comparisons, benchmarks and posts you'll find here are based on real-world scenarios that I've encountered (<em>along with the community</em>) while using <a className="text-blue-500 inline-flex items-baseline" href="https://dev.azure.com" target="_blank">Azure DevOps <ExternalLinkIcon className="ml-1 inline w-3 h-3" /></a> and <a className="text-blue-500  inline-flex items-baseline" href="https://github.com" target="_blank">GitHub <ExternalLinkIcon className="ml-1 inline w-3 h-3" /></a>.</p>
        <p className="mt-3"><em>- Engin Polat</em></p>
      </blockquote>
      <h1 className="text-lg text-gray-600 dark:text-gray-100 mt-6 mb-3 border-b">Recent Posts</h1>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post, index) => {
          return (
            <li key={post.frontmatter.path} className={index > 0 ? "border-t" : ""}>
              <PostItem post={post} />
            </li>
          )
        })}
      </ol>
    </Layout>
  );
};

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

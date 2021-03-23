import React from "react"

import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="About Me" />
      <article className="my-6 text-gray-800 dark:text-gray-100" itemScope itemType="http://schema.org/Article">
        <h2 className="text-3xl">👋 Hi there</h2>
        <div className="my-6 h-1 w-full border-b"></div>
        <img className="rounded-full border w-44 h-44 mb-6" src="https://avatars.githubusercontent.com/u/118744" />

        <p className="my-4">My name is Engin Polat, I'm based in Turkey, beautiful city Istanbul.</p>
        <p className="my-4">I'm a versatile Software Engineer with over 20 years of comprehensive experience, focused on working with challenging projects and learning while working.</p>
        <p className="my-4">I have worked as a Software Developer, Software Architect and Technical Lead in many projects. I have been actively involved in all parts of software development phases such as, design, development, testing, deployment, and troubleshooting.</p>
        <p className="my-4">I am passionate about to build well-defined, clean, scalable, concurrent, and sustainable structures, learn new technologies.</p>
        <p className="my-4">Also, I feel super lucky about my career 😀</p>
        <p className="my-4">I worked for one of the biggest Home Goods companies in Turkey (Arcelik)</p>
        <p className="my-4">After Arcelik, I worked for one of the biggest Media companies in Turkey (Dogus Media)</p>
        <p className="my-4">After Dogus Media, I worked for one of the biggest software companies in Turkey (BilgeAdam)</p>
        <p className="my-4">After BilgeAdam, I joined in _THE_ biggest Software Company in the world (Microsoft) 🥳</p>
        <p className="my-4">Recently, I focused on DevOps and GitOps practices. Over the past 3 years, I've been part of a lot of projects all around the world.</p>
        <p className="my-4">I have huge hands on experience with Azure, Azure DevOps, GitHub, Docker, Terrafom, Helm and Kubernetes.</p>
        <p className="my-4">In my spare time, I'm practicing Golang and new programming paradigms.</p>
      </article>
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

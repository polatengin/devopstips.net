import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, location }) => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1 className="dark:text-gray-50">404: Not Found</h1>
      <p className="dark:text-gray-50">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

import React from "react"
import Header from "../components/header"
import Landing from "../components/Landing"
import Work from '../components/Work'
import SEO from "../components/seo"
import About from "../components/About"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <Landing />
    <Work />
    <About />
  </div>
)

export default IndexPage

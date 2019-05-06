import React from "react"
import Header from "../components/header"
import Landing from "../components/Landing"
import Work from '../components/Work'
import SEO from "../components/seo"
import About from "../components/About"
import Projects from "../components/Projects"
import {graphql} from 'gatsby'
// import './materialize.min.css'

const IndexPage = ({data}) => {
    const hannahPic = data.allFile.edges.filter(edge => edge.node.childImageSharp.fluid.originalName === "hannahround.png");
    console.log(hannahPic)
    return (
        <div>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Header />
            <Landing />
            <Work />
            <About fluid={hannahPic[0].node.childImageSharp.fluid}/>
            <Projects />
        </div>
    )
}

export default IndexPage

export const query = graphql`
query {
    allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2600) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
          publicURL
        }
      }
    }
  }
  
`
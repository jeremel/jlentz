import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexWrapper = styled.div`
  margin: 0;
  padding: 0 8rem 1rem;
  height: 73.5vh;
  display: flex;
  flex-direction: column;
`
const ServicesWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: .55rem;
`

const ServicesItem = styled.div`
  margin: 0;
  border: 1px solid grey;
  border-radius: 0.625rem;
  justify-content: space-around;
  
  h1 {
    padding: .75rem;
    margin: 0;
    font-size: 2.25rem;
    color: black;
    text-align: center;
  } 
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Web Development`, `Consulting`, `Photography`, `Jereme Lentz`]} />
    <IndexWrapper>
      <ServicesWrapper>
        <ServicesItem>
          <h1>Web Development</h1>
        </ServicesItem> 
        <ServicesItem>
          <h1>Consulting</h1>
        </ServicesItem>
        <ServicesItem>
          <h1>Photographry</h1>
        </ServicesItem>
      </ServicesWrapper>
      <p>I'm still working on this!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/about/">Read more about me</Link>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
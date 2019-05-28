import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const IndexWrapper = styled.div`
  margin: 0;
  padding: 0 8rem 1rem;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: tomato;
    font-size: 2rem;
    text-align: center;
  }

  h1 {
    font-size: 1.35rem;
    text-align: center;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Jereme Lentz Web Development and Small Business Consulting" keywords={[ `Jereme Lentz `, `Web Development`, `Consulting`, `Photography`, `New Jersey`, `South Jersey`]} />
    <IndexWrapper>
      <Image />
      <h1>Web Developer and Small Business Consultant based in Southern New Jersey</h1>
      <Link to="/about/">Click here to learn more about me and the services I offer</Link>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
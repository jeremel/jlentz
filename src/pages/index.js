import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"

const ImageWrapper = styled.div`
  img {
    padding: 0 5rem;
  }

  @media (max-width: 1200px) {
    padding: 0;
  }
`

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

  a:hover {
    color: rgba(34, 167, 240, 1);;
  }

  h1 {
    font-size: 1.35rem;
    text-align: center;
    padding-top: .5rem;
  }

  h2 {
    font-size: 1.15rem;
    text-align: center;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Jereme Lentz Web Development and Small Business Consulting" keywords={[ `Jereme Lentz `, `Web Development`, `Consulting`, `Photography`, `New Jersey`, `South Jersey`]} />
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <IndexWrapper>
      <h1>Web Developer and Small Business Consultant based in Southern New Jersey</h1>
      <h2>Providing custom tailored solutions that help small businesses and entrepreneurs grow their businesses</h2>
      <Link to="/about/">Click here to learn more about me and the services that I offer</Link>
    </IndexWrapper>
  </Layout>
)

export default IndexPage
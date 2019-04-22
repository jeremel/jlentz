import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/image-20.jpg"

const PhotographyWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.25rem;
  }
`

const PhotographyPage = () => (
  <Layout>
    <SEO title="Jereme Lentz Photography" />
    <PhotographyWrapper>
      <h1>Jereme Lentz Photography</h1>
      <p>Contact me for more information</p>
      <img src={image} alt="birds"></img>
      <p>Please contact me if you would like to inquire about my services or if you just want to learn more about me.</p>
      <Link to="/">Go back to the homepage</Link>
    </PhotographyWrapper>
  </Layout>
)

export default PhotographyPage
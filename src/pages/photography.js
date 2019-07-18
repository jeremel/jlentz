import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import image from "../images/image-20.jpg"

const PhotographyWrapper = styled.div`
  margin: auto;
  padding: 0 8rem;

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.25rem;

    a {
      text-decoration: underline;
      text-decoration-color: gold;
      color: blue;
    }

    a:hover {
      color: rgba(34, 167, 240, 1);
    }
  }
`

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography" description="Jereme Lentz Photography" keywords={[`Photography`, `Landscape Photography`, `Street Photography`, `Skateboarding Photography`, `New Jersey Photography`, `South Jersey Photography`]} />
    <PhotographyWrapper>
      <h1>Photography</h1>
      <p>See more of my photos at <a href="https://www.jeremelentzphotography.com/" target="_blank">www.jeremelentzphotography.com</a></p>
      <img src={image} alt="Birds at Forsythe"></img>
      <p>Please contact me at jerlentz@gmail.com or fill out the form below if you would like to inquire about my services or if you just want to learn more about me.</p>
    </PhotographyWrapper>
  </Layout>
)

export default PhotographyPage
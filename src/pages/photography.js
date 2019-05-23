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
      text-decoration: none;
      color: slategrey;
    }
  }
`

const PhotographyPage = () => (
  <Layout>
    <SEO title="Photography" />
    <PhotographyWrapper>
      <h1>Photography</h1>
      <p>See more of my photos at <a href="https://www.jeremelentzphotography.com/" target="_blank">www.jeremelentzphotography.com</a></p>
      <img src={image} alt="birds"></img>
      <p>Please contact me at jerlentz@gmail.com if you would like to inquire about my services or if you just want to learn more about me.</p>
    </PhotographyWrapper>
  </Layout>
)

export default PhotographyPage
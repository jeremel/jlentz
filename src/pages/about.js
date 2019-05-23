import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMeImage from "../images/jereme-about-me.jpg"

const AboutWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;

  a {
    color: blue;
    text-decoration: none;
  }

  h1 {
    font-size: 2.65rem;
  }

  img {
    height: 300px;
    border-radius: 10px;
  }

  p {
    font-size: 1.65rem;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <h1>About Me</h1>
      <img src={AboutMeImage} alt="Jereme Lentz himself" />
      <p>Hi! My name is Jereme (normally spelled Jeremy) and I am a web developer, small business consultant, and photographer from the Atlantic City area of southern New Jersey. I have over a decade's worth of small business experience in various roles. I got my start working for my family's small business in the telecommunications engineering and installation industry and for the past couple of years have been working in the financial services industry.</p>
      <p>Please send me a message at jerlentz@gmail.com if you would like to inquire about my services and learn more about me.</p>
    </AboutWrapper>
  </Layout>
)

export default AboutPage

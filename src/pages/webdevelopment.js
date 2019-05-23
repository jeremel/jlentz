import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundImage from "../images/image-20.jpg";

const WebDevWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;

  a {
    color: blue;
    text-decoration: none;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.65rem;
  }
`

const WebDevelopment = () => (
  <Layout>
    <SEO title="Web Development" />
    <WebDevWrapper>
      <h1>Web Development</h1>
      <p>Building fast, performant, custom websites and web applications using modern technologies</p>
      <p>Bring your own design or consult directly with me to create an application that suits all of your business needs</p>
      <p>Contact me at jerlentz@gmail.com to see how we can work together</p>
    </WebDevWrapper>
  </Layout>
)

export default WebDevelopment
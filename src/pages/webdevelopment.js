import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WebDevImage from "../images/BlueRidgeMountains-1.jpg"


const WebDevWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;
  max-width: 75rem;
  min-height: 80vh;

  a {
    color: blue;
    text-decoration: none;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 2.5rem;
  }

  img {
      height: 300px;
      border-radius: 4px;
    }

  p {
    font-size: 1.3rem;
  }
`

const WebDevelopment = () => (
  <Layout>
    <SEO title="Web Development" description="Jereme Lentz Web Development" keywords={[`Web Development`, `Web Apps`, `Websites`, `Custom`, `South Jersey`, `New Jersey`, `Philadelphia`, `Philly`]} />
    <WebDevWrapper>
      <h1>Web Development</h1>
      <img src={WebDevImage} alt="Blue Ridge Mountains" />
      <p>Building fast, performant, custom websites and web applications that will drive customer engagement using modern technologies</p>
      <p>Bring your own design or consult directly with me to create an application that suits all of your business needs</p>
      <p>Send me a message at jerlentz@gmail.com to see how we can work together</p>
    </WebDevWrapper>
  </Layout>
)

export default WebDevelopment
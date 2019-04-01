import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;

  a {
    color: blue;
    text-decoration: none;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <AboutWrapper>
      <h1>About Me</h1>
      <p>Hi! My name is Jereme (normally spelled Jeremy) and I am a web developer, small business consultant, and occasional photographer from the Atlantic City area of southern New Jersey. I have over a decade's worth of small business experience in various roles. I got my start working for my family's small business in the telecommunications engineering and installation industry and for the past couple of years have been working in the financial services industry.</p>
      <p>In my free time I enjoy learning new things, playing guitar, hiking, skateboarding, taking photos of random things, going to shows, and hanging out with my dog, Rocky. I have been married to my lovely wife <a href="https://www.theknot.com/real-weddings/a-rustic-craft-beer-inpsired-wedding-at-valenzano-winery-in-shamong-new-jersey-album" target="_blank">Kylene</a> for the past 5 years, and she is the best 5th grade teacher ever.</p>
      <p>Please contact me if you would like to inquire about my services or if you just want to learn more about me.</p>
      <Link to="/">Go back to the homepage</Link>
    </AboutWrapper>
  </Layout>
)

export default AboutPage

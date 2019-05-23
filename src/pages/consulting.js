import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ConsultingImage from "../images/image-19.jpg"

const ConsultingWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;

  a {
    color: blue;
    text-decoration: none;
  }

  img {
    height: 300px;
    border-radius: 10px;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.65rem;
  }

  ul {
    list-style: none;

    li {
      font-size: 1.25rem;
      padding-bottom: 0.5rem;
    }
  }
`

const Consulting = () => (
  <Layout>
    <SEO title="Consulting" />
    <ConsultingWrapper>
      <h1>Consulting Services</h1>
      <img src={ConsultingImage} alt="Jereme Lentz Consulting" />
      <p>Providing consulting services for your small business including:</p>
      <ul>
        <li>Accounting systems review</li>
        <li>Business Strategy</li>
        <li>Full-Scale Business Analysis</li>
        <li>Data Analytics</li>
        <li>Financing Opportunities</li>
        <li>Market Analysis</li>
        <li>Administrative Controls Analysis</li>
      </ul>
      <p>Contact me at jerlentz@gmail.com to see how I can help</p>
    </ConsultingWrapper>
  </Layout>
)

export default Consulting
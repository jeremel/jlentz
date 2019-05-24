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

  @media (max-width: 700px) {
    padding: 0 1rem;
    
    h1 {
      text-align: center;
    }

    p {
      padding-left: 1rem;
    }

    img {
       max-width(50%);
    }
  }
`

const Consulting = () => (
  <Layout>
    <SEO title="Consulting" description="Jereme Lentz Small Business Consulting Services" keywords={[`Consulting`, `Small Business`, `Mid size`, `New Jersey`, `South Jersey`, `Web Development`, `Web Developer`, `Business Analysis`, `Accounting`, `Philadelphia`, `Philly`]} />
    <ConsultingWrapper> 
      <h1>Consulting Services</h1>
      <img src={ConsultingImage} alt="Jereme Lentz Consulting" />
      <p>Providing consulting services for your small to mid-size business including:</p>
      <ul>
        <li>Accounting systems review</li>
        <li>Financial Statements Review and Analysis</li>
        <li>Business Strategy</li>
        <li>Full-scale top to bottom Business Analysis</li>
        <li>Data Analytics</li>
        <li>Financing Opportunities</li>
        <li>Market Analysis</li>
        <li>Administrative Controls Analysis</li>
      </ul>
      <p>Contact me at jerlentz@gmail.com for more information</p>
    </ConsultingWrapper>
  </Layout>
)

export default Consulting
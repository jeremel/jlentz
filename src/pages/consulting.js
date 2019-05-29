import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ConsultingImage from "../images/image-19.jpg"

const ConsultingWrapper = styled.div`
  margin: 0;
  padding: 0 8rem;
  max-width: 75rem;

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
    font-size: 1.3rem;
    margin: 1rem 0;
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
      <p>With over a decade of experience working in small business, I am keenly aware of the necessity for small businesses to make decisions based on sound due research and the importance of executing correctly the first time.</p>
      <p>I provide consulting services for small businesses and entrepreneurs who want to grow their business in a smart, sustainable way. All of the solutions that I provide are custom tailored to provide the most value possible to your business.</p>
      <p>See below for a sampling of some of the services that I can help your business with:</p>
      <ul>
        <li>Accounting Systems Review</li>
        <li>Administrative Controls Analysis</li>
        <li>Bookkeeping review and training</li>
        <li>Business Strategy</li>
        <li>Data Analytics</li>
        <li>Financial Statements Review and Analysis</li>
        <li>Full-scale top to bottom Business Analysis</li>
        <li>Financing Opportunities</li>
        <li>Market Analysis</li>
        <li>Project Management</li>
      </ul>
      <p>Contact me at jerlentz@gmail.com for a consultation</p>
    </ConsultingWrapper>
  </Layout>
)

export default Consulting
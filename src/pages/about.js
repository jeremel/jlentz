import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutMeImage from "../images/jereme-about-me.jpg"

const AboutWrapper = styled.div`
  margin: auto;
  padding: 0.2rem 8rem;
  min-height: 75vh;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "me content";

  .me {
    grid-area: me;
    
    img {
      height: 300px;
      border-radius: 5px;
    }
  }

  .content {
    grid-area: content;

    a {
      color: blue;
      text-decoration: underline;
      text-decoration-color: gold;
    }

    a:hover {
      color: rgba(34, 167, 240, 1);
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .me {
      h1 {
        text-align: center;
      }

      img {
        border-radius: 
      }
    }

    .content {
      p {
        padding: 0 1.5rem;
        font-size: 1.25rem;
      }
    }
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="About Jereme Lentz" keywords={[`Jereme Lentz`, `About`, `Consulting`, `Websites`, `Web Apps`, `Accounting`, `Web Development`, `Small Business`, `New Jersey`, `South Jersey`, `Philadelphia`, `Philly`]} />
    <AboutWrapper>
      <div className="me">
        <h1>About Me</h1>
        <img src={AboutMeImage} alt="Jereme Lentz himself" />
      </div>
      <div className="content">
        <p>Hi, my name is Jereme and I am a <Link to="/webdevelopment">web developer</Link>, small business <Link to="consulting">consultant</Link>, and <Link to="photography">photographer</Link> based in the Atlantic City area of southern New Jersey.</p> 
        <p>I have over a decade's worth of small business experience in various roles. I got my start working for my family's small business in the telecommunications engineering and installation industry and for the past couple of years have been working in the financial services industry.</p>
        <p>Please send me a message at jerlentz@gmail.com if you would like to inquire about my services and learn about how I may be able to assist you and your business.</p>
      </div>
    </AboutWrapper>
  </Layout>
)

export default AboutPage

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Form from "./Form"
import Footer from "./Footer"
import './global.css'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
        <Form />
        <Footer />
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

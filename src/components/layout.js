import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import './global.css'
// import "./layout.css"

const LayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

const FooterWrapper = styled.div`
  margin: 0;
  background: salmon;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  padding-left: 1.5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 9vh;
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
          <FooterWrapper>
            © {new Date().getFullYear()}/Jereme Lentz
          </FooterWrapper>
        </div>
      </LayoutWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

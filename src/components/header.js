import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin: 0;
  padding: .05rem;
  /* height: 13vh; */
  background: salmon;
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;

    a {
      color: white;
      text-decoration: none;
    }
  }
 
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 1.15rem;

    li {
      padding-left: 1.1rem;

      a {
        color: white;
        text-decoration: none;
      }

      a:hover {
        color: lightgrey;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li><Link to='/about/'>About</Link></li>
        <li><Link to='#'>Web Development</Link></li>
        <li><Link to='#'>Consulting</Link></li>
        <li><Link to='#'>Photography</Link></li>
      </ul>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

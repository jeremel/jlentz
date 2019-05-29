import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin: 0;
  padding: .05rem;
  width: 100vw;
  width: 100%;
  background: whitesmoke;
  margin-bottom: 1.45rem;
`
const HeaderContainer = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;

    a {
      color: salmon;
      text-decoration: none;
    }
  }
 
  ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 1.15rem;
    text-transform: uppercase;

    li {
      padding-left: 1.1rem;

      a {
        color: salmon;
        text-decoration: none;
      }

      a:hover {
        color: blue;
      }
    }
  }

  @media(max-width:700px) {
    justify-content: center;

    h1 {
      font-size: 3rem;
    }

    ul {
      font-size: 1.5rem;
      text-align: center;
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
        <li><Link to='/webdevelopment/'>Web Development</Link></li>
        <li><Link to='/consulting/'>Consulting</Link></li>
        <li><Link to='/photography/'>Photography</Link></li>
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

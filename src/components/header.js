import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin: 0;
  padding: .05rem;
  width: 100vw;
  width: 100%;
  margin-bottom: .1rem;
`
const HeaderContainer = styled.div`
  margin: 0;
  padding: 0 8rem;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 0 4rem;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 3rem;
      text-align: center;
    }

    ul {
      font-size: 1.5rem;
      padding: 0.5rem 0;

      li {
        padding: 0 1.5rem 0 0;
        margin: auto;
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

import { Link } from "gatsby"
import React, { Component } from 'react';
import styled from "styled-components"

const FooterWrapper = styled.div`
  margin: 0;
  background: salmon;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  bottom: 0;
  width: 100%;
  height: 11vh;

  a {
    color: white;
    text-decoration: none;
  }
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <Link to="/">© {new Date().getFullYear()}/Jereme Lentz</Link>
      </FooterWrapper>
    );
  }
}

export default Footer;
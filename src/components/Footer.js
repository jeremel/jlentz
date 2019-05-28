import React, { Component } from 'react';
import styled from "styled-components"

const FooterWrapper = styled.div`
  margin: 0;
  background: salmon;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  padding-left: 1.5rem;
  bottom: 0;
  width: 100%;
  height: 10vh;
`

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        © {new Date().getFullYear()}/Jereme Lentz
      </FooterWrapper>
    );
  }
}

export default Footer;
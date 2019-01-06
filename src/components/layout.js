import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from '../config/theme'
import Header from './header'
import Footer from './Footer'
import './base.css'

const Layout = ({ children, textAlign }) => (
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
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container textAlign={textAlign}>
            {children}
          </Container>
          <Footer>Made with Gatsby 💚</Footer>
        </Wrapper>
      </ThemeProvider>
    )}
  />
)

const Wrapper = styled.div`
  ${({ theme: { font, background } }) => css`
      font-family: ${font};
      min-height: 100vh;
      flex-direction: column;
      display: flex;
      background: ${background};
  `};
`;

const Container = styled.div`
  ${({ theme: { textColor }, textAlign }) => css`
    color: ${textColor};
    text-align: ${textAlign || 'center' };
    line-height: 1.8;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  `};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { FaInstagram } from 'react-icons/fa';

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 66px 1.0875rem 1.45rem;
`

const Footer = styled("footer") `
  border-top: 1px solid #ccc;
  color: #ccc;
  margin-top: 50px !important;
  padding-top: 20px;
`;


const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
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
          <>
          <Navigation siteTitle={data.site.siteMetadata.title} />
          <Wrapper>
            {children}
            <Footer>
             Deadworkco © {new Date().getFullYear()}
                {` `}
              <a href="https://www.instagram.com/Deadworkco">
              <FaInstagram
               size="30px"
               style={{ '--fa-primary-color': 'red', 'float': 'right' }} />
              </a>
            </Footer>
          </Wrapper>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

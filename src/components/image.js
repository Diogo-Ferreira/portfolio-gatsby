import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const StyleImage = styled(Image)`
  ${({ theme: { primaryColor, inverseTextColor }}) => css`
    border-radius: 50%;
    width: 176px;
    height: 176px;
    margin: 16px;
    border: 2px solid ${primaryColor};
    background: ${primaryColor};
  `}
`;

export default StyleImage

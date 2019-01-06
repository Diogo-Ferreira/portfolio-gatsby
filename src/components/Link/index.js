import styled, { css } from 'styled-components';
import {Link} from 'gatsby';

export const ExternalLink = styled.a`
  ${({ theme: { primaryColor } }) => css`
    color: ${primaryColor};
    text-decoration: none;
    font-weight: bold;
  `};
`;

const InternalLink = styled(Link)`
  ${({ theme: { primaryColor } }) => css`
    color: ${primaryColor};
    text-decoration: none;
    font-weight: bold;
  `};
`;

export default InternalLink;
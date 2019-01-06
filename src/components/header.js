import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components';

const Header = ({ siteTitle, menus }) => (
  <SiteBanner>
    <MenuItem to={'/'}>{siteTitle}</MenuItem>
    <MenuHolder>
      {menus.map(({ link, title }) => <MenuItem to={link} key={link}>
        {title}
      </MenuItem>)}
    </MenuHolder>
  </SiteBanner>
)

const MenuItem = styled(Link)`
  ${({ theme: { inverseTextColor, primaryColor } }) => css`
    color: ${inverseTextColor};
    margin: 0px 8px;
    text-decoration: none;
  `};
`;

const MenuHolder = styled.div``;

const SiteBanner = styled.div`
  ${({ theme: { primaryColor, inverseTextColor } }) => css`
    border-top: 8px solid ${primaryColor};
    color: ${inverseTextColor};
    padding: 32px;
    display: flex;
    justify-content: space-between;
  `};
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object),
}

Header.defaultProps = {
  siteTitle: '',
  menus: [
    {
      title: 'Projects',
      link: '/projects',
    },
    {
      title: 'About',
      link: '/about',
    },
  ]
}

export default Header

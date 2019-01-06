import styled, { css } from 'styled-components'


const Footer = styled.div`
    ${({theme: { textColor }}) => css`
        color: ${textColor};
        text-align: center;
        margin: 16px;
    `}
`;

export default Footer;
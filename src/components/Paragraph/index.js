import styled, { css } from 'styled-components'


const Paragraph = styled.p`
    ${({theme: { textColor }}) => css`
        color: ${textColor};
    `}
`;

export default Paragraph;
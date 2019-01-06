import styled, { css } from 'styled-components';

const Separator = styled.div`
    ${({ theme: { primaryColor }}) => css`
        width: 8px;
        height: 8px;

        border-radius: 50%;
        margin: 16px auto;
        background: ${primaryColor};
    `}
`;

export default Separator;
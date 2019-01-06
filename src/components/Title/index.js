import styled, { css } from 'styled-components'

const commonStyle = ({theme: { textColor }, title}) => css`
    color: ${textColor};
    font-size: 1.5em;
`;

const BigTitle = styled.h1`
    ${commonStyle};
`;

const MediumTitle = styled.h2`
    ${commonStyle};
`;

const SmallTitle = styled.h3`
    ${commonStyle};
    font-size: 1.0em;
`;

export {
    BigTitle,
    MediumTitle,
    SmallTitle,
}
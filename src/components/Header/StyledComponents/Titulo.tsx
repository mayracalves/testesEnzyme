import styled, { css } from 'styled-components';

const Color = cor => css`
  color: ${cor}
`;

export default styled.h1.attrs({
  'data-testid': 'unicred_header_titulo',
})`
    text-transform: uppercase;
    vertical-align: middle;
    display: inline-block;
    line-height: 28px;
    color: #008777;
    font-size: 24px;
    margin: 0 0 0 5px;

    ${({ theme: { UnicredHeaderCorPrimaria: cor } }) => Color(cor)}
`;

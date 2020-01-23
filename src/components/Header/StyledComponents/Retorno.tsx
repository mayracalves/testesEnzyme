import styled from 'styled-components';

export default styled.div<any>`
   display: flex;
   align-items: baseline;

   svg {
    color: ${({ theme: { UnicredHeaderCorTerciaria: cor } }) => cor}
    font-size: 16px;
    background: radial-gradient(white 50%, #ffffff00 50%);
    cursor: ${({ possuiRetorno }) => (possuiRetorno ? 'pointer' : 'auto')};
   }
`;

import styled from 'styled-components';

import Titulo from './Titulo';
import Selects from './Selects';
import Descricao from './Descricao';
import Retorno from './Retorno';

const Header: any = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
  margin: 0;
  min-width: 550px;
  min-height: 52px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
`;

Header.Titulo = Titulo;
Header.Selects = Selects;
Header.Descricao = Descricao;
Header.Retorno = Retorno;

export default Header;

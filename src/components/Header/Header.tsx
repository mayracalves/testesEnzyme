import React from 'react';
import {
  array, bool, func, string,
} from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faDotCircle} from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './StyledComponents';
import Select from '../Select/Select';

const Header = ({
  titulo,
  possuiRetorno,
  onChangeCooperativa,
  onChangeAgencia,
  itensCooperativa,
  itensAgencia,
  valorCooperativa,
  valorAgencia,
  onVoltar,
  desabilitarCooperativa,
  desabilitarAgencia,
  exibirCooperativa,
  exibirAgencia,
}) => (
  <HeaderContainer>
    <HeaderContainer.Descricao>
      <HeaderContainer.Retorno possuiRetorno={possuiRetorno}>
        <FontAwesomeIcon
          onClick={possuiRetorno ? onVoltar : () => {
          }}
          icon={possuiRetorno ? faArrowCircleLeft : faDotCircle}
          data-testid={possuiRetorno ? 'icon_fa_arrow_circle_left' : 'icon_fa_dot_circle'}
        />
        <HeaderContainer.Titulo>{titulo}</HeaderContainer.Titulo>
      </HeaderContainer.Retorno>
    </HeaderContainer.Descricao>
    <HeaderContainer.Selects>
      {
        exibirCooperativa && (
          <Select
            data-testid="header_select_cooperativa"
            disabled={desabilitarCooperativa}
            itens={itensCooperativa}
            value={valorCooperativa}
            title="Cooperativa"
            onChange={onChangeCooperativa}
          />
        )
      }
      {
        exibirAgencia && (
          <Select
            data-testid="header_select_agencia"
            disabled={desabilitarAgencia}
            itens={itensAgencia}
            value={valorAgencia}
            title="Agência"
            onChange={onChangeAgencia}
          />
        )
      }
    </HeaderContainer.Selects>
  </HeaderContainer>
);

Header.propTypes = {
  titulo: string,
  possuiRetorno: bool,
  onChangeCooperativa: func,
  onVoltar: func,
  onChangeAgencia: func,
  itensCooperativa: array,
  itensAgencia: array,
  valorCooperativa: string,
  valorAgencia: string,
  desabilitarCooperativa: bool,
  desabilitarAgencia: bool,
  exibirCooperativa: bool,
  exibirAgencia: bool,
};

Header.defaultProps = {
  titulo: 'Plataforma de Crédito',
  desabilitarCooperativa: false,
  desabilitarAgencia: false,
  possuiRetorno: false,
  ocultarCooperativa: false,
  ocultarAgencia: false,
  itensCooperativa: [],
  itensAgencia: [],
  valorAgencia: null,
  valorCooperativa: null,
  exibirCooperativa: false,
  exibirAgencia: false,
  onVoltar: () => {
  },
  onChangeCooperativa: () => {
  },
  onChangeAgencia: () => {
  },
};

export default Header;

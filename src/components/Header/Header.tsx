import React from 'react';
import {
  array, bool, func, string,
} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import HeaderContainer from './StyledComponents';
import Select from '../Select/Select';

const Header = ({
  titulo,
  possuiRetorno,
  onChangeCooperativa,
  onChangeTipoOperacao,
  onChangeAgencia,
  itensCooperativa,
  itensTipoOperacao,
  itensAgencia,
  valorCooperativa,
  valorAgencia,
  valorTipoOperacao,
  onVoltar,
  desabilitarCooperativa,
  desabilitarTipoOperacao,
  desabilitarAgencia,
  exibirCooperativa,
  exibirAgencia,
  exibirTipoOperacao,
}) => (
  <HeaderContainer>
    <HeaderContainer.Descricao>
      <HeaderContainer.Retorno possuiRetorno={possuiRetorno}>
        <FontAwesomeIcon
          onClick={possuiRetorno ? onVoltar : () => {}}
          icon={possuiRetorno ? faArrowCircleLeft : faDotCircle}
          data-testid={possuiRetorno ? 'icon_fa_arrow_circle_left' : 'icon_fa_dot_circle'}
        />
        <HeaderContainer.Titulo>{titulo}</HeaderContainer.Titulo>
      </HeaderContainer.Retorno>
    </HeaderContainer.Descricao>
    <HeaderContainer.Selects>
      {
        exibirTipoOperacao && (
          <Select
            data-testid="header_select_tipo_operacao"
            disabled={desabilitarTipoOperacao}
            opcaoVazia={itensTipoOperacao.length === 0}
            itens={itensTipoOperacao}
            value={valorTipoOperacao}
            title="Tipo Operação"
            onChange={onChangeTipoOperacao}
          />
        )
      }
      {
        exibirCooperativa && (
          <Select
            data-testid="header_select_cooperativa"
            disabled={desabilitarCooperativa}
            opcaoVazia={itensCooperativa.length === 0}
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
            opcaoVazia={itensAgencia.length === 0}
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
  onChangeTipoOperacao: func,
  onVoltar: func,
  onChangeAgencia: func,
  itensCooperativa: array,
  itensTipoOperacao: array,
  itensAgencia: array,
  valorCooperativa: string,
  valorAgencia: string,
  valorTipoOperacao: string,
  desabilitarCooperativa: bool,
  desabilitarAgencia: bool,
  desabilitarTipoOperacao: bool,
  exibirCooperativa: bool,
  exibirAgencia: bool,
  exibirTipoOperacao: bool,
};

Header.defaultProps = {
  titulo: 'Plataforma de Crédito',
  desabilitarCooperativa: false,
  desabilitarAgencia: false,
  possuiRetorno: false,
  desabilitarTipoOperacao: false,
  ocultarCooperativa: false,
  ocultarTipoOperacao: false,
  ocultarAgencia: false,
  itensCooperativa: [],
  itensTipoOperacao: [],
  itensAgencia: [],
  valorAgencia: null,
  valorTipoOperacao: null,
  valorCooperativa: null,
  exibirCooperativa: false,
  exibirAgencia: false,
  exibirTipoOperacao: false,
  onVoltar: () => {},
  onChangeCooperativa: () => {},
  onChangeAgencia: () => {},
  onChangeTipoOperacao: () => {},
};

export default Header;

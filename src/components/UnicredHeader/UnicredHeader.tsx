import React from 'react';
import {
  array, bool, func, string,
} from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import UnicredHeaderContainer from './StyledComponents';
import UnicredSelect from '../UnicredSelect/UnicredSelect';

const UnicredHeader = ({
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
  <UnicredHeaderContainer>
    <UnicredHeaderContainer.Descricao>
      <UnicredHeaderContainer.Retorno possuiRetorno={possuiRetorno}>
        <FontAwesomeIcon
          onClick={possuiRetorno ? onVoltar : () => {}}
          icon={possuiRetorno ? faArrowCircleLeft : faDotCircle}
          data-testid={possuiRetorno ? 'icon_fa_arrow_circle_left' : 'icon_fa_dot_circle'}
        />
        <UnicredHeaderContainer.Titulo>{titulo}</UnicredHeaderContainer.Titulo>
      </UnicredHeaderContainer.Retorno>
    </UnicredHeaderContainer.Descricao>
    <UnicredHeaderContainer.Selects>
      {
        exibirTipoOperacao && (
          <UnicredSelect
            data-testid="unicred_header_select_tipo_operacao"
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
          <UnicredSelect
            data-testid="unicred_header_select_cooperativa"
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
          <UnicredSelect
            data-testid="unicred_header_select_agencia"
            disabled={desabilitarAgencia}
            opcaoVazia={itensAgencia.length === 0}
            itens={itensAgencia}
            value={valorAgencia}
            title="Agência"
            onChange={onChangeAgencia}
          />
        )
      }
    </UnicredHeaderContainer.Selects>
  </UnicredHeaderContainer>
);

UnicredHeader.propTypes = {
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

UnicredHeader.defaultProps = {
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

export default UnicredHeader;

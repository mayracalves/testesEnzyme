import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UnicredHeader from './UnicredHeader';
import {itensAgencia, itensCooperativa, itensTipoOperacao} from "./UnicredHeader.constants";


storiesOf('UnicredHeader', module)
  .add('Normal', () => (
    <UnicredHeader
      possuiRetorno={false}
    />
  ))
  .add('Com Retorno', () => (
    <UnicredHeader
      possuiRetorno
      onVoltar={action('onVoltar')}
    />
  ))
  .add('Com Cooperativa', () => (
    <UnicredHeader
      titulo="Apenas titulo"
      exibirCooperativa
      itensCooperativa={itensCooperativa}
    />
  ))
  .add('Com Agencia', () => (
    <UnicredHeader
      titulo="Apenas titulo"
      exibirAgencia
      itensAgencia={itensAgencia}
    />
  ))
  .add('Com Tipo Operação', () => (
    <UnicredHeader
      titulo="Apenas titulo"
      exibirTipoOperacao
      itensTipoOperacao={itensTipoOperacao}
    />
  ))
  .add('Com Cooperativa, Agencia e Tipo Operação', () => (
    <UnicredHeader
      titulo="Apenas titulo"
      exibirCooperativa
      itensCooperativa={itensCooperativa}
      exibirAgencia
      itensAgencia={itensAgencia}
      exibirTipoOperacao
      itensTipoOperacao={itensTipoOperacao}
    />
  ));


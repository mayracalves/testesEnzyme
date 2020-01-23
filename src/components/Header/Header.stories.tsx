import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header';
import {itensAgencia, itensCooperativa, itensTipoOperacao} from "./Header.constants";


storiesOf('Header', module)
  .add('Normal', () => (
    <Header
      possuiRetorno={false}
    />
  ))
  .add('Com Retorno', () => (
    <Header
      possuiRetorno
      onVoltar={action('onVoltar')}
    />
  ))
  .add('Com Cooperativa', () => (
    <Header
      titulo="Apenas titulo"
      exibirCooperativa
      itensCooperativa={itensCooperativa}
    />
  ))
  .add('Com Agencia', () => (
    <Header
      titulo="Apenas titulo"
      exibirAgencia
      itensAgencia={itensAgencia}
    />
  ))
  .add('Com Tipo Operação', () => (
    <Header
      titulo="Apenas titulo"
      exibirTipoOperacao
      itensTipoOperacao={itensTipoOperacao}
    />
  ))
  .add('Com Cooperativa, Agencia e Tipo Operação', () => (
    <Header
      titulo="Apenas titulo"
      exibirCooperativa
      itensCooperativa={itensCooperativa}
      exibirAgencia
      itensAgencia={itensAgencia}
      exibirTipoOperacao
      itensTipoOperacao={itensTipoOperacao}
    />
  ));


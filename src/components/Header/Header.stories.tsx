import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Header from './Header';
import {itensAgencia, itensCooperativa} from "./Header.constants";


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
  .add('Com Cooperativa, Agencia', () => (
    <Header
      titulo="Apenas titulo"
      exibirCooperativa
      itensCooperativa={itensCooperativa}
      exibirAgencia
      itensAgencia={itensAgencia}
    />
  ));


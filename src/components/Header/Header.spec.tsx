// @ts-nocheck
import { mount } from 'enzyme';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Header from './Header';
import { itensAgencia, itensCooperativa } from './Header.constants';

describe('Header', () => {
  it('deve renderizar header_titulo com valor passado por titulo', () => {
    const wrapper = mount(
      <Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
      />,
    );
    expect(wrapper.find('[data-testid="header_titulo"]').text()).toEqual('Titulo');
  });

  it('nao deve renderizar header_select_cooperativa', () => {
    const wrapper = mount(
      <Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
        exibirAgencia
      />,
    );
    const retorno = wrapper.find('[data-testid="header_select_cooperativa"]').length;
    expect(retorno).toEqual(0);
  });

  it('nao deve renderizar header_select_agencia', () => {
    const wrapper = mount(
      <Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
      />,
    );
    const retorno = wrapper.find('[data-testid="header_select_agencia"]').length;
    expect(retorno).toEqual(0);
  });

  it('deve  executar callback onChangeCooperativa', () => {
    const onChangeCooperativa = jest.fn();
    const wrapper = mount(
      <Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={onChangeCooperativa}
        exibirCooperativa
      />,
    );
    wrapper.find('[data-testid="header_select_cooperativa"]').first().prop('onChange')();
    expect(onChangeCooperativa).toHaveBeenCalled();
  });

  it('deve executar callback onChangeAgencia', () => {
    const onChangeAgencia = jest.fn();
    const wrapper = mount(
      <Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={() => {}}
        onChangeAgencia={onChangeAgencia}
        onChangeCooperativa={() => {}}
        exibirAgencia
      />,
    );
    wrapper.find('[data-testid="header_select_agencia"]').first().prop('onChange')();
    expect(onChangeAgencia).toHaveBeenCalled();
  });

  describe('quando select de agencia for desabilitado', () => {
    let wrapper;
    const onChangeAgencia = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <Header
          possuiRetorno={false}
          titulo="Titulo"
          valorCooperativa="566"
          valorAgencia="Agencia 1"
          itensAgencia={itensAgencia}
          itensCooperativa={itensCooperativa}
          onVoltar={() => {}}
          onChangeAgencia={onChangeAgencia}
          onChangeCooperativa={() => {}}
          exibirAgencia
          desabilitarAgencia
        />,
      );
    });

    it('deve renderizar header_select_agencia com prop disabled igual a true', () => {
      const disabled = wrapper.find('[data-testid="header_select_agencia"]').first().prop('disabled');
      expect(disabled).toEqual(true);
    });

    it('nao deve executar callback de onAgenciaChange', () => {
      wrapper.find('[data-testid="header_select_agencia"]').first().simulate('click');
      expect(onChangeAgencia).not.toHaveBeenCalled();
    });
  });

  describe('quando select de cooperativa for desabilitado', () => {
    let wrapper;
    const onChangeCooperativa = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <Header
          possuiRetorno={false}
          titulo="Titulo"
          valorCooperativa="566"
          valorAgencia="Agencia 1"
          itensAgencia={itensAgencia}
          itensCooperativa={itensCooperativa}
          onVoltar={() => {}}
          onChangeAgencia={() => {}}
          onChangeCooperativa={onChangeCooperativa}
          desabilitarCooperativa
          exibirCooperativa
        />,
      );
    });

    it('deve renderizar header_select_cooperativa com prop disabled igual a true', () => {
      const disabled = wrapper.find('[data-testid="header_select_cooperativa"]').first().prop('disabled');
      expect(disabled).toEqual(true);
    });

    it('nao deve executar callback onChangeCooperativa', () => {
      wrapper.find('[data-testid="header_select_cooperativa"]').first().simulate('click');
      expect(onChangeCooperativa).not.toHaveBeenCalled();
    });
  });

  describe('quando possuiRetorno for false', () => {
    let wrapper;
    const onVoltar = jest.fn();

    beforeEach(() => {
      wrapper = mount(<Header
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={onVoltar}
        onChangeAgencia={action('onChagenAgencia')}
        onChangeCooperativa={action('onChangeCooperativa')}
      />);
    });

    it('deve exibir icon faDotCircle', () => {
      expect(wrapper.find('[data-testid="icon_fa_dot_circle"]').length).toEqual(2);
    });

    it('não deve executar callback de onFechar', () => {
      wrapper.find('[data-testid="icon_fa_dot_circle"]').first().simulate('click');
      expect(onVoltar).not.toHaveBeenCalled();
    });
  });

  describe('quando possuiRetorno for true', () => {
    let wrapper;
    const onVoltar = jest.fn();

    beforeEach(() => {
      wrapper = mount(<Header
        possuiRetorno
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        onVoltar={onVoltar}
        onChangeAgencia={action('onChagenAgencia')}
        onChangeCooperativa={action('onChangeCooperativa')}
      />);
    });

    it('deve exibir icon faArrowCicleLeft', () => {
      expect(wrapper.find('[data-testid="icon_fa_arrow_circle_left"]').length).toEqual(2);
    });

    it('deve executar callback de onFechar', () => {
      wrapper.find('[data-testid="icon_fa_arrow_circle_left"]').first().simulate('click');
      expect(onVoltar).toHaveBeenCalled();
    });
  });
});

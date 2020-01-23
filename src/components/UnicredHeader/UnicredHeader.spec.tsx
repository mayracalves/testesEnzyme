import { mount } from 'enzyme';
import { action } from '@storybook/addon-actions';
import React from 'react';
import UnicredHeader from './UnicredHeader';
import { itensAgencia, itensCooperativa, itensTipoOperacao } from './UnicredHeader.constants';

describe('UnicredHeader', () => {
  it('deve renderizar unicred_header_titulo com valor passado por titulo', () => {
    const wrapper = mount(
      <UnicredHeader
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
        onChangeTipoOperacao={() => {}}
      />,
    );
    expect(wrapper.find('[data-testid="unicred_header_titulo"]').text()).toEqual('Titulo');
  });

  it('nao deve renderizar unicred_header_select_tipo_operacao', () => {
    const wrapper = mount(
      <UnicredHeader
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
        onChangeTipoOperacao={() => {}}
        exibirAgencia
      />,
    );
    const retorno = wrapper.find('[data-testid="unicred_header_select_tipo_operacao"]').length;
    expect(retorno).toEqual(0);
  });

  it('nao deve renderizar unicred_header_select_cooperativa', () => {
    const wrapper = mount(
      <UnicredHeader
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
        onChangeTipoOperacao={() => {}}
        exibirAgencia
      />,
    );
    const retorno = wrapper.find('[data-testid="unicred_header_select_cooperativa"]').length;
    expect(retorno).toEqual(0);
  });

  it('nao deve renderizar unicred_header_select_agencia', () => {
    const wrapper = mount(
      <UnicredHeader
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={() => {}}
        onChangeAgencia={() => {}}
        onChangeCooperativa={() => {}}
        onChangeTipoOperacao={() => {}}
        exibirTipoOperacao
      />,
    );
    const retorno = wrapper.find('[data-testid="unicred_header_select_agencia"]').length;
    expect(retorno).toEqual(0);
  });

  // it('deve executar callback onChangeTipoOperacao', () => {
  //   const onChangeTipoOperacao = jest.fn();
  //   const wrapper = mount(
  //     <UnicredHeader
  //       possuiRetorno={false}
  //       titulo="Titulo"
  //       valorCooperativa="566"
  //       valorAgencia="Agencia 1"
  //       valorTipoOperacao="Desconto"
  //       itensAgencia={itensAgencia}
  //       itensCooperativa={itensCooperativa}
  //       itensTipoOperacao={itensTipoOperacao}
  //       onVoltar={() => {}}
  //       onChangeAgencia={() => {}}
  //       onChangeCooperativa={() => {}}
  //       onChangeTipoOperacao={onChangeTipoOperacao}
  //       exibirTipoOperacao
  //     />,
  //   );
  //   wrapper.find('[data-testid="unicred_header_select_tipo_operacao"]').first().prop('onChange')();
  //   expect(onChangeTipoOperacao).toHaveBeenCalled();
  // });
  //
  // it('deve  executar callback onChangeCooperativa', () => {
  //   const onChangeCooperativa = jest.fn();
  //   const wrapper = mount(
  //     <UnicredHeader
  //       possuiRetorno={false}
  //       titulo="Titulo"
  //       valorCooperativa="566"
  //       valorAgencia="Agencia 1"
  //       valorTipoOperacao="Desconto"
  //       itensAgencia={itensAgencia}
  //       itensCooperativa={itensCooperativa}
  //       itensTipoOperacao={itensTipoOperacao}
  //       onVoltar={() => {}}
  //       onChangeAgencia={() => {}}
  //       onChangeCooperativa={onChangeCooperativa}
  //       onChangeTipoOperacao={() => {}}
  //       exibirCooperativa
  //     />,
  //   );
  //   wrapper.find('[data-testid="unicred_header_select_cooperativa"]').first().prop('onChange')();
  //   expect(onChangeCooperativa).toHaveBeenCalled();
  // });
  //
  // it('deve executar callback onChangeAgencia', () => {
  //   const onChangeAgencia = jest.fn();
  //   const wrapper = mount(
  //     <UnicredHeader
  //       possuiRetorno={false}
  //       titulo="Titulo"
  //       valorCooperativa="566"
  //       valorAgencia="Agencia 1"
  //       valorTipoOperacao="Desconto"
  //       itensAgencia={itensAgencia}
  //       itensCooperativa={itensCooperativa}
  //       itensTipoOperacao={itensTipoOperacao}
  //       onVoltar={() => {}}
  //       onChangeAgencia={onChangeAgencia}
  //       onChangeCooperativa={() => {}}
  //       onChangeTipoOperacao={() => {}}
  //       exibirAgencia
  //     />,
  //   );
  //   const onChange = wrapper.find('[data-testid="unicred_header_select_agencia"]').first().prop('onChange')();
  //   expect(onChangeAgencia).toHaveBeenCalled();
  // });

  describe('quando select de agencia for desabilitado', () => {
    let wrapper;
    const onChangeAgencia = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <UnicredHeader
          possuiRetorno={false}
          titulo="Titulo"
          valorCooperativa="566"
          valorAgencia="Agencia 1"
          valorTipoOperacao="Desconto"
          itensAgencia={itensAgencia}
          itensCooperativa={itensCooperativa}
          itensTipoOperacao={itensTipoOperacao}
          onVoltar={() => {}}
          onChangeAgencia={onChangeAgencia}
          onChangeCooperativa={() => {}}
          onChangeTipoOperacao={() => {}}
          exibirAgencia
          desabilitarAgencia
        />,
      );
    });

    it('deve renderizar unicred_header_select_agencia com prop disabled igual a true', () => {
      const disabled = wrapper.find('[data-testid="unicred_header_select_agencia"]').first().prop('disabled');
      expect(disabled).toEqual(true);
    });

    it('nao deve executar callback de onAgenciaChange', () => {
      wrapper.find('[data-testid="unicred_header_select_agencia"]').first().simulate('click');
      expect(onChangeAgencia).not.toHaveBeenCalled();
    });
  });

  describe('quando select de cooperativa for desabilitado', () => {
    let wrapper;
    const onChangeCooperativa = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <UnicredHeader
          possuiRetorno={false}
          titulo="Titulo"
          valorCooperativa="566"
          valorAgencia="Agencia 1"
          valorTipoOperacao="Desconto"
          itensAgencia={itensAgencia}
          itensCooperativa={itensCooperativa}
          itensTipoOperacao={itensTipoOperacao}
          onVoltar={() => {}}
          onChangeAgencia={() => {}}
          onChangeCooperativa={onChangeCooperativa}
          onChangeTipoOperacao={() => {}}
          desabilitarCooperativa
          exibirCooperativa
        />,
      );
    });

    it('deve renderizar unicred_header_select_cooperativa com prop disabled igual a true', () => {
      const disabled = wrapper.find('[data-testid="unicred_header_select_cooperativa"]').first().prop('disabled');
      expect(disabled).toEqual(true);
    });

    it('nao deve executar callback onChangeCooperativa', () => {
      wrapper.find('[data-testid="unicred_header_select_cooperativa"]').first().simulate('click');
      expect(onChangeCooperativa).not.toHaveBeenCalled();
    });
  });

  describe('quando select de tipo operacao for desabilitado', () => {
    let wrapper;
    const onChangeTipoOperacao = jest.fn();

    beforeEach(() => {
      wrapper = mount(
        <UnicredHeader
          possuiRetorno={false}
          titulo="Titulo"
          valorCooperativa="566"
          valorAgencia="Agencia 1"
          valorTipoOperacao="Desconto"
          itensAgencia={itensAgencia}
          itensCooperativa={itensCooperativa}
          itensTipoOperacao={itensTipoOperacao}
          onVoltar={() => {}}
          onChangeAgencia={() => {}}
          onChangeCooperativa={() => {}}
          onChangeTipoOperacao={() => {}}
          desabilitarTipoOperacao
          exibirTipoOperacao
        />,
      );
    });

    it('deve renderizar unicred_header_select_tipo_operacao com prop disabled igual a true', () => {
      const disabled = wrapper.find('[data-testid="unicred_header_select_tipo_operacao"]').first().prop('disabled');
      expect(disabled).toEqual(true);
    });

    it('nao deve executar callback onChangeTipoOperacao', () => {
      wrapper.find('[data-testid="unicred_header_select_tipo_operacao"]').first().simulate('click');
      expect(onChangeTipoOperacao).not.toHaveBeenCalled();
    });
  });

  describe('quando possuiRetorno for false', () => {
    let wrapper;
    const onVoltar = jest.fn();

    beforeEach(() => {
      wrapper = mount(<UnicredHeader
        possuiRetorno={false}
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={onVoltar}
        onChangeAgencia={action('onChagenAgencia')}
        onChangeCooperativa={action('onChangeCooperativa')}
        onChangeTipoOperacao={action('onChagenTipoOperacao')}
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
      wrapper = mount(<UnicredHeader
        possuiRetorno
        titulo="Titulo"
        valorCooperativa="566"
        valorAgencia="Agencia 1"
        valorTipoOperacao="Desconto"
        itensAgencia={itensAgencia}
        itensCooperativa={itensCooperativa}
        itensTipoOperacao={itensTipoOperacao}
        onVoltar={onVoltar}
        onChangeAgencia={action('onChagenAgencia')}
        onChangeCooperativa={action('onChangeCooperativa')}
        onChangeTipoOperacao={action('onChagenTipoOperacao')}
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

// @ts-nocheck
import React from 'react';
import Home from './Home.class';
import {mount, shallow, ShallowWrapper} from "enzyme";
import Header from "../components/Header/Header";
import API from "../api";
import {itensAgencia, itensCooperativa} from "../components/Header/Header.constants";

describe('Unit Test: Home', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Home/>, {disableLifecycleMethods: true});
    jest.spyOn(wrapper.instance(), 'setState');
  });

  it('deve renderizar Header', () => {
    wrapper.instance().setState({erro: false, carregando: false});
    expect(wrapper.find(Header).length > 0).toEqual(true);
  });

  it('deve renderizar home_carregando', () => {
    wrapper.instance().setState({erro: false, carregando: true});
    expect(wrapper.find('[data-testid="home_carregando"]').length > 0).toEqual(true);
  });

  it('deve renderizar home_erro', () => {
    wrapper.instance().setState({erro: true, carregando: false});
    expect(wrapper.find('[data-testid="home_erro"]').length > 0).toEqual(true);
  });

  describe('componentDidMount', () => {
    it('deve chamar carregarElementos', () => {
      wrapper.instance().carregarElementos = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().carregarElementos).toHaveBeenCalled();
    });
  });

  describe('gerenciarTrocaDeCooperativa', () => {
    it('deve chamar setState com valor de cooperativa', () => {
      wrapper.instance().gerenciarTrocaDeCooperativa('mockCooperativa');
      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        cooperativa: 'mockCooperativa',
      });
    });
  });

  describe('gerenciarTrocaDeAgencia', () => {
    it('deve chamar setState com valor de agencia', () => {
      wrapper.instance().gerenciarTrocaDeAgencia('mockAgencia');
      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        agencia: 'mockAgencia',
      });
    });
  });

  describe('carregarElementos()', () => {
    beforeEach(() => {
      const mockCooperativa = {value: 'mockCooperativa'};
      const mockAgencia = {value: 'mockAgencia'};
      API.buscarAgencias = jest.fn().mockResolvedValue([mockAgencia]);
      API.buscarCooperativas = jest.fn().mockResolvedValue([mockCooperativa]);
    });

    it('deve chamar buscarAgencias, buscarCooperativas e definir agencia e cooperativa e carregando', async () => {
      await wrapper.instance().carregarElementos();
      expect(API.buscarAgencias).toHaveBeenCalled();
      expect(API.buscarCooperativas).toHaveBeenCalled();
      expect(wrapper.instance().state.carregando).toEqual(false);
    });

    it('deve definir erro como true quando buscarAgencias falhar e definir carregando', async () => {
      API.buscarAgencias = jest.fn().mockRejectedValue({});
      await wrapper.instance().carregarElementos();
      expect(wrapper.instance().state.erro).toEqual(true);
      expect(wrapper.instance().state.carregando).toEqual(false);
    });

    it('deve definir erro como true quando buscarCooperativas falhar e definir carregando', async () => {
      API.buscarCooperativas = jest.fn().mockRejectedValue({});
      await wrapper.instance().carregarElementos();
      expect(wrapper.instance().state.erro).toEqual(true);
      expect(wrapper.instance().state.carregando).toEqual(false);
    });
  });
});

describe('Integration Test: Home', () => {
  let home;

  beforeEach(async () => {

    API.buscarAgencias = jest.fn().mockResolvedValue(itensAgencia);
    API.buscarCooperativas = jest.fn().mockResolvedValue(itensCooperativa);

    home = mount(
      <Home />
    );

    await new Promise(resolve => setTimeout(() => resolve(),1000));
    home.update();
  });

  it('deve alterar valor de home_cooperativa_selecionada quando trocar valor da cooperativa', () => {
    const event = {currentTarget: {value: 'mockCooperativa'}};
    home.find('[data-testid="select_Cooperativa"]').first().prop('onChange')(event);
    const text = home.find('[data-testid="home_cooperativa_selecionada"]').text();
    expect(text).toEqual('Cooperativa Selecionada: mockCooperativa');
  });

  it('deve alterar valor de home_agencia_selecionada quando trocar valor de agencia', () => {
    const event = {currentTarget: {value: 'mockAgencia'}};
    home.find('[data-testid="select_Agência"]').first().prop('onChange')(event);
    const text = home.find('[data-testid="home_agencia_selecionada"]').text();
    expect(text).toEqual('Agencia Selecionada: mockAgencia');
  });

});
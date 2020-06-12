// @ts-nocheck
import API from "../api";
import {itensAgencia, itensCooperativa} from "../components/Header/Header.constants";
import {mount} from "enzyme";
import Home from "./Home.class";
import React from "react";
import store from "../store/store";

describe('Integration Test: Home MobX', () => {
  let home;

  beforeEach(async () => {

    API.buscarAgencias = jest.fn().mockResolvedValue(itensAgencia);
    API.buscarCooperativas = jest.fn().mockResolvedValue(itensCooperativa);

    home = mount(
      <Home store={store}/>
    );

    await new Promise(resolve => setTimeout(() => resolve(),1000));
    home.update();
  });

  it('deve alterar valor de home_cooperativa_selecionada quando trocar valor da cooperativa', () => {

  });

  it('deve alterar valor de home_agencia_selecionada quando trocar valor de agencia', () => {
    home.find('[data-testid="select_Agência"]').first().prop('onChange')({currentTarget: {value: 'mock'}});
    const text = home.find('[data-testid="home_agencia_selecionada"]').text();
    expect(text.includes('mock')).toEqual(true);
  });

});
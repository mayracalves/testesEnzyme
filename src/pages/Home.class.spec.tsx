// @ts-nocheck
import React from 'react';
import Home from './Home.class';
import {mount, shallow, ShallowWrapper} from "enzyme";
import Header from "../components/Header/Header";
import API from "../api";
import {itensAgencia, itensCooperativa} from "../components/Header/Header.constants";

describe('Integration Test: Home', () => {
  let home;

  beforeEach((done) => {
    // jest.useFakeTimers();
    API.buscarAgencias = jest.fn().mockResolvedValue(itensAgencia);
    API.buscarCooperativas = jest.fn().mockResolvedValue(itensCooperativa);

    home = mount(
      <Home />
    );

    setImmediate(() => {
      home.update();
      done();
    });
  });

  it('deve alterar valor de home_cooperativa_selecionada quando trocar valor da cooperativa', () => {
    // console.log(home.debug());
    home.find('[data-testid="select_Agência"]').first().prop('onChange')({currentTarget: {value: 'mock'}});
    const text = home.find('[data-testid="home_agencia_selecionada"]').text();
    expect(text.includes('mock')).toEqual(true);
  });

  it('deve alterar valor de home_agencia_selecionada quando trocar valor de agencia', () => {

  });

});
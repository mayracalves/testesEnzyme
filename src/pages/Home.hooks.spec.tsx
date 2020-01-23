import API from "../api";
import {itensAgencia, itensCooperativa} from "../components/Header/Header.constants";
import {mount} from "enzyme";
import Home from "./Home.hooks";
import React from "react";
import { act } from "react-dom/test-utils";

const time = (time) => new Promise(resolve => setTimeout(() => resolve(),time))

async function updateWrapper(wrapper) {
  await act(async () => {
    await time(10);
    wrapper.update();
  });
}

describe('Integration Test: Home Hooks', () => {
  let home;

  beforeEach(async () => {

    API.buscarAgencias = jest.fn().mockResolvedValue(itensAgencia);
    API.buscarCooperativas = jest.fn().mockResolvedValue(itensCooperativa);

    home = mount(
      <Home />
    );

    await updateWrapper(home);
  });

  it('deve alterar valor de home_cooperativa_selecionada quando trocar valor da cooperativa', async() => {
    await act(async () => {
      const event = {currentTarget: {value: 'mockCooperativa'}};
      home.find('[data-testid="select_Cooperativa"]').first().prop('onChange')(event);
      await time(10);
      home.update();
      const text = home.find('[data-testid="home_cooperativa_selecionada"]').text();
      expect(text).toEqual('Cooperativa Selecionada: mockCooperativa');
    });
  });

  it('deve alterar valor de home_agencia_selecionada quando trocar valor de agencia', async () => {
    await act(async () => {
      const event = {currentTarget: {value: 'mockAgencia'}};
      await time(10);
      home.update();
      home.find('[data-testid="select_Agência"]').first().prop('onChange')(event);
      const text = home.find('[data-testid="home_agencia_selecionada"]').text();
      expect(text).toEqual('Agencia Selecionada: mockAgencia');
    });
  });

});
import React from "react";
import Home from "./Home.class";
import API from "../../src/api";
import { shallow } from "enzyme";

describe("Home", () => {
  const options = {
    disableLifecycleMethods: true,
  };

  describe("render", () => {
    it("deve renderizar home_carregando", () => {
      const wrappeer = shallow(<Home />, options);
      // @ts-ignore
      //wrappeer.instance().carregarElementos() = jest.fn();
      wrappeer.setState({
        carregando: true,
      });
      expect(wrappeer.find('[data-testid="home_carregando"]')).toBeTruthy();
      expect(wrappeer.find('[data-testid="home_carregando"]')).toHaveLength(1);
    });
  });

  describe("componentDiMount", () => {
    it("deve chamar carregarElementos", () => {
      const wrapper = shallow<Home>(<Home />, options);
      wrapper.instance().carregarElementos = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().carregarElementos).toHaveBeenCalled();
    });
  });

  describe('carregarElementos', () => {
    it('deve definir agencias conforme o retorno de buscar agencias', async () => {
      const mockAgencias = [{ value: 'mockAgencia' }]
      const mockACooperativas = [{ value: 'mockACooperativa' }]
      API.buscarAgencias = jest
        .fn()
        .mockResolvedValue(mockAgencias);
      API.buscarCooperativas = jest
        .fn()
        .mockResolvedValue(mockACooperativas);

      const wrapper = shallow<Home>(<Home />, options);
      await wrapper.instance().carregarElementos();
      expect(wrapper.instance().state.agencias).toEqual(mockAgencias);
      expect(wrapper.instance().state.cooperativas).toEqual(mockACooperativas);
      expect(wrapper.instance().state.carregando).toEqual(false);
    });
  }); 
});

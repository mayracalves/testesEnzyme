import React from "react";
import Label from "./Label";
import { shallow } from "enzyme";

describe("Label", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Label nome={"meu label"} descricaoLabel={"descricao label"} />
    );
  });

  it('deve renderizar htmlFor igual valor passado para nome', () => {
      //console.log(wrapper.debug());
      const htmlForProp = wrapper.find('[data-testid="label_container"]').prop('htmlFor');
      expect(htmlForProp).toEqual('meu label');
  });
  
  it('deve renderizar texto igual a descricao', () => {
      const htmlForProp = wrapper.find('[data-testid="label_container"]').text();
      expect(htmlForProp).toEqual('descricao label');
  });

});

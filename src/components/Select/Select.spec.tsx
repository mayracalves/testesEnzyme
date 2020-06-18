import React from "react";
import { shallow, mount } from "enzyme";
import Select from "./Select";
import styled from "styled-components";

describe("Select", () => {
  const itensMock = [
    {
      title: "titleMock",
      value: "valueMock",
    },
    {
      title: "titleMock 2",
      value: "valueMock 2",
    },
    {
      title: "titleMock 3 ",
      value: "valueMock 3",
    },
  ];

  let wrapper;
  let onChangesMock;

  beforeEach(() => {
    onChangesMock = jest.fn();
    wrapper = shallow(
      <Select itens={itensMock} title={"mock_title"} onChange={onChangesMock} />
    );
  });

  xit("deve renderizar tres elementos de select", () => {
    // console.log(wrapper.debug());
    //const options = wrapper.find('.option');
    //const options = wrapper.find('[data-testid="select-option"]');
    const options0 = wrapper.find('[data-testid="select-option_0"]');
    const options1 = wrapper.find('[data-testid="select-option_1"]');
    //console.log("oi", options.debug());
    //expect(options.lenght).toEqual(3);
    expect(options0).toBeTruthy();
    expect(options1).toBeTruthy();
  });

  xit("deve executar o callback do onChanges", () => {
    const onChanges = wrapper
      .find('[data-testid="select_mock_title"]')
      .prop("onChange");
    onChanges({
      currentTarget: {
        value: "mockValue",
      },
    });
    expect(onChangesMock).toHaveBeenCalled();
    expect(onChangesMock).toHaveBeenCalledWith('mockValue');
    expect(onChangesMock).toHaveBeenCalledTimes(1);
  });

  xit("usando o mount", () => {
    const wrapper2 = mount(
      <Select itens={itensMock} title={"mock_title"} onChange={onChangesMock} />
    );

    const label = wrapper2.find('[data-testid="label_container"]').last();
    //expect(label).toHaveStyleRule('', '')
    console.log(label.debug());
  });





});

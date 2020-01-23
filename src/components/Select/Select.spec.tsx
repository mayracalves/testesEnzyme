import {render, shallow, mount, ReactWrapper} from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import Select from './Select';

const itensSelects = [
  {
    title: 'CONFEDERACAO 1',
    value: '9008',
  },
  {
    title: 'CONFEDERACAO 2',
    value: '1111',
  },
];

describe('Unit Test: Select', () => {
  let wrapper: ReactWrapper;
  let onChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
        <Select
          onChange={onChange}
          title="mockTitulo"
          itens={itensSelects}
          disabled={false}
          opcaoVazia={true}
        />
    )
  });

  it('deve montar 3 options', () => {
    const options = wrapper.find('option').length;
    expect(options).toEqual(3);
  });

  it('deve renderizar select_selecione', () => {
    const foiRenderizado = wrapper.find('[data-testid="select_selecione"]').length > 0;
    expect(foiRenderizado).toEqual(true);
  });

  it('deve executar callback onChange', () => {
    wrapper.find('[data-testid="select_mockTitulo"]').first().simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});

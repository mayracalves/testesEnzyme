import { mount, ReactWrapper } from 'enzyme';
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

  it('deve montar 2 options', () => {
    const options = wrapper.find('option').length;
    expect(options).toEqual(2);
  });

  it('deve executar callback onChange', () => {
    wrapper.find('[data-testid="select_mockTitulo"]').first().simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});

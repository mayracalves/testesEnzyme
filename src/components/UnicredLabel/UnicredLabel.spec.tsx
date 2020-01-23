import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import UnicredLabel from './UnicredLabel';

describe('Unit Test: UnicredLabel', () => {
  let wrapperS: ShallowWrapper;

  beforeEach(() => {
    wrapperS = shallow(
        <UnicredLabel
            descricaoLabel="mockDescricaoLavel"
            nome="mockNome"
        />
    );
  });

  it('deve renderizar htmlFor com valor igual passado por parâmetro', () => {
    const htmlFor = wrapperS.find('Label').prop('htmlFor');
    expect(htmlFor).toEqual('mockNome');
  });

  it('deve renderizar Label com texto passado por parâmetro', () => {
    const descricao = wrapperS.find('[htmlFor="mockNome"]').text();
    expect(descricao).toEqual('mockDescricaoLavel');
  });
});

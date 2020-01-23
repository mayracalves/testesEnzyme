import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import Label from './Label';

describe('Unit Test: Label', () => {
  let wrapperS: ShallowWrapper;

  beforeEach(() => {
    wrapperS = shallow(
        <Label
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

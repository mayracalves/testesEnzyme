import React from 'react';
import PropTypes from 'prop-types';

import UniSelect from './StyledComponents';
import UnicredLabel from '../UnicredLabel/UnicredLabel';

const UnicredSelect = ({
  itens,
  onChange,
  title,
  opcaoVazia,
  value,
  disabled,
}) => (
  <UniSelect>
    <UnicredLabel
      nome={title}
      descricaoLabel={title}
    />
    <UniSelect.Select
      data-testid={`select_${title}`}
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
      disabled={disabled}
      autoComplete="nope"
    >
      {/*{*/}
      {/*  opcaoVazia && <UniSelect.Option data-testid="select_selecione"> Selecione </UniSelect.Option>*/}
      {/*}*/}
      {
        itens.map(item => (
          <UniSelect.Option
            key={item.value}
            value={item.value}
          >
            {item.title}
          </UniSelect.Option>
        ))
      }
    </UniSelect.Select>
  </UniSelect>
);

UnicredSelect.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.object),
  opcaoVazia: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

UnicredSelect.defaultProps = {
  value: 'Selecione',
  opcaoVazia: true,
  title: '',
  itens: [],
  onChange: () => ({}),
};

export default UnicredSelect;

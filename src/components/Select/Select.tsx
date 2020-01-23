import React from 'react';
import PropTypes from 'prop-types';

import UniSelect from './StyledComponents';
import Label from '../Label/Label';

const Select = ({
  itens,
  onChange,
  title,
  opcaoVazia,
  value,
  disabled,
}) => (
  <UniSelect>
    <Label
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

Select.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.object),
  opcaoVazia: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  value: 'Selecione',
  opcaoVazia: true,
  title: '',
  itens: [],
  onChange: () => ({}),
};

export default Select;

import React from "react";
import PropTypes from "prop-types";
import UniSelect from "./StyledComponents";
import Label from "../Label/Label";

const Select = ({ itens, onChange, title, value, disabled }) => (
  <UniSelect>
    <Label nome={title} descricaoLabel={title} data-testid="select_label"/>
    <UniSelect.Select
      data-testid={`select_${title}`}
      onChange={e => onChange(e.currentTarget.value)}
      value={value}
      disabled={disabled}
      autoComplete="nope"
    >
      {itens.map((item, index) => (
        <UniSelect.Option
          data-testid={`select_option_${index}`}
          //className={'option'}
          key={item.value}
          value={item.value}
        >
          {item.title}
        </UniSelect.Option>
      ))}
    </UniSelect.Select>
  </UniSelect>
);

Select.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  itens: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  value: "Selecione",
  title: "",
  itens: [],
  onChange: () => ({}),
};

export default Select;

import React from 'react';
import PropTypes from 'prop-types';

import Label from './StyledComponents';

const UnicredLabel = ({ nome, descricaoLabel }) => (
  <Label htmlFor={nome}>{descricaoLabel}</Label>
);

UnicredLabel.propTypes = {
  nome: PropTypes.string.isRequired,
  descricaoLabel: PropTypes.string.isRequired,
};

export default UnicredLabel;

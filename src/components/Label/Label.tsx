import React from "react";
import PropTypes from "prop-types";

import Container from "./StyledComponents";

const Label = ({ nome, descricaoLabel }) => (
  <Container data-testid="label_container" htmlFor={nome}>
    {descricaoLabel}
  </Container>
);

Label.propTypes = {
  nome: PropTypes.string.isRequired,
  descricaoLabel: PropTypes.string.isRequired,
};

export default Label;

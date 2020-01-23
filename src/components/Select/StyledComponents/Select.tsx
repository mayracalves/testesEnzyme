import React from 'react';
import styled from 'styled-components';
import Seta from '../../../assets/images/setaMenos.svg';

const Select = styled.select`
  width: 100%;
  height: 37px;
  border: none;
  border-bottom: 3px solid #48D2A0;
  padding: 0 38px 0 5px;
  font-size: 14px;
  color: #7F7F80;
  appearance: none;
  background-color: #eef2f4;
  background-image: url(${Seta});
  background-repeat: no-repeat;
  background-position: calc(100% - 5px);
  background-size: 10px;
  ::placeholder {
    font-size: 14px;
    color: #7F7F80;
  }
  :focus {
    outline: none;
  }
`;

Select.displayName = 'Select';

export default Select;
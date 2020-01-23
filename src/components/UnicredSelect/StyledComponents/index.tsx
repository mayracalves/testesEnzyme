import styled from 'styled-components';
import Select from './Select';
import Option from './Option';

const UniSelect: any = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;
`;

UniSelect.Select = Select;
UniSelect.Option = Option;

export default UniSelect;
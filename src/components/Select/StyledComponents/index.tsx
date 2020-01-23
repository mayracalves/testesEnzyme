import styled from 'styled-components';
import Select from './Select';
import Option from './Option';

const Container: any = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  cursor: pointer;
`;

Container.Select = Select;
Container.Option = Option;

export default Container;
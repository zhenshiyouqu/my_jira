import styled from 'styled-components';
import {Button, Flex, Space} from 'antd';

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
`;


export const SearchButton = styled(Button)`
  background-color: ${props => props.isclicked? "blue":"white"};
  color: #61dafb;
`;

export const ClearButton = styled.button`
  height: 32px;
  line-height: 32px;
  margin-left: 15px;
  padding-left: 12px;
  border-left: 1px solid #dfe1e6;
  color: #42526E;
  font-size: 14.5px;
  cursor: pointer;
  user-select: none;
  
`;

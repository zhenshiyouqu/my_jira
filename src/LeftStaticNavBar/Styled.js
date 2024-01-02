import styled from 'styled-components';
import {Button, Flex, Space} from 'antd';

export const StaticNavBar=styled.div`
    position: fixed;
    z-index: 99;
    height: 100vh;
    width: 230px;
    background: rgb(244, 245, 247);
    border-right: 1px solid rgb(223, 225, 230);
    overflow: hidden auto;

`

export const ItemDiv = styled.div`
  display:flex;
  justifyContent:space-between;
  alignItems:end;
  padding:0% 15% ;
  height:50px;
  &:hover {
    background: white;
  }
`
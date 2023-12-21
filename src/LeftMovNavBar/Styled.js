import {Button, Flex} from "antd";
import styled from "styled-components";

export const StyledFlex = styled(Flex)`
  background-color: aqua;
`;

export const StyledButton = styled(Button)`
  background-color: white;
`;

export const NavLeft=styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 68px;
  background: #0747A6;
  transition: all 0.1s;
  transform: translateZ(0px);
  &:hover {
      width: 150px;
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
  }
`;

export const ItemText = styled.div`
  //position: relative;
  padding-left: 10px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  font-size: 12px;
  ${NavLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;
export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 20px;
  color: #deebff;
  transition: color 0.1s;
  cursor: pointer;
  user-select: none;
  padding: 10px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
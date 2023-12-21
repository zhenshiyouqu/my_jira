import {Button, Flex} from "antd";
import styled from "styled-components";

export const StyledFlex = styled(Flex)`
  background-color: aqua;
`;

export const StyledButton = styled(Button)`
  background-color: white;
`;

export const LeftMovNavBarDiv=styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  height: 100vh;
  width: 40px;
  background: rgb(7, 71, 166);
  transition: all 0.1s ease 0s;
  transform: translateZ(0px);
  &:hover {
    background: red; // <Thing> when hovered
    width: 100px;
  }
`;
export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;

export const Item = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 42px;
  padding-left: 64px;
  color: #deebff;
  transition: color 0.1s;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  i {
    position: absolute;
    left: 18px;
  }
`;
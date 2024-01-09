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
  overflow-x: hidden;
  height: 100%;
  width: 68px;
  background: #0747A6;
  transition: all 0.1s;
  transform: translateZ(0px);
  &:hover {
      width: 200px;
  }
`;


export const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
`;



export const ItemText = styled.div`
  position: relative;
  right: 12px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  transition: all 0.1s;
  transition-property: right, visibility, opacity;
  font-family: "CircularStdBold",sans-serif; font-weight: normal;
  font-size:12px;
  ${NavLeft}:hover & {
    right: 0;
    visibility: visible;
    opacity: 1;
  }
`;
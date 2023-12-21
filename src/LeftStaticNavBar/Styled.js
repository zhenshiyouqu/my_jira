import styled from 'styled-components';
import {Button, Flex, Space} from 'antd';

export const LeftStaticNavBarDiv = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 99; 
  left: 68px;
  width: 230px;
  padding: 0 16px 24px;
  background: #61dafb;
  border-right: 1px solid #dfe1e6;
  overflow: auto ;
  font-size: 16px;
  font-family: Calibri,serif;
  font-weight: normal;
`;

export const ProjectInfo = styled.div`
  display: flex;
  padding: 24px 4px;
`;

export const ProjectTexts = styled.div`
  padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
  color: black;
  font-size: 15px;
  font-weight: normal;
`;
export const ProjectCategory = styled.div`
  color: white;
  font-size: 13px;
`;

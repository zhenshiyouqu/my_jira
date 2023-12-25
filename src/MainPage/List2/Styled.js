import styled,{css} from 'styled-components';

export const Lists = styled.div`
  display: flex;
  margin: 26px -5px 0;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  width: 25%;
  border-radius: 3px;
  background: #F4F5F7;
`;

export const Title = styled.div`
  padding: 13px 10px 17px;
  text-transform: uppercase;
  color: #5E6C84;
  font-size: 12.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const IssuesCount = styled.span`
  text-transform: lowercase;
  font-size: 13px;
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;


export const Issue = styled.div`
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
    cursor: pointer;
    user-select: none;
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: #ebecf0;
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Titlee = styled.p`
  padding-bottom: 11px;
  font-size: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
`;
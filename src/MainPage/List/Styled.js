import styled from 'styled-components';

export const ListContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 400px;
    max-width: 25%;
    align-content: center;
    padding: 20px;
    max-height: 100%;
`;

export const ListItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 400px;
    border-radius: 10px;
    background-color: gray;
    align-content: center;
    padding: 10px 20px;
    max-width: 90%;
`;
export const ListItemItemDiv = styled.div`
    //boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 2px 0px";
    border-radius: 3px;
    height: 20%;
    max-height: 30%;
    cursor: pointer;
    background-color: aliceblue;
    margin: 0 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;


import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const data = [
    {
        title: "New",
        cardItems: [
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "nihao",
                linkWorkId: "122",
                type: "requirement"
            },
        ],
    },
    {
        title: "In Progress",
        cardItems: [
            {
                description: "123d",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "123",
                linkWorkId: "122",
                type: "requirement"
            },
        ],
    },
    {
        title: "Done",
        cardItems: [
            {
                description: "123dfd",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "12123",
                linkWorkId: "12232",
                type: "requirement"
            },
        ],
    },
    {
        title: "Put Off",
        cardItems: [
            {
                description: "123dfdff",
                linkWorkId: "1234",
                type: "Bug"
            },
            {
                description: "1212fd3",
                linkWorkId: "1223fg2",
                type: "requirement"
            },
        ],
    }


];

const CardListContainer = styled.div`
    display: flex;
`;

const CardList = props => {
    return (
        <DragDropContext
            onDragEnd={result => console.log(result)}
        >
            <CardListContainer>
                {
                    data.map((cardList, index) => {
                        return (
                            // 每一个卡片
                            <Droppable droppableId={"droppableId"+index} index={index} >
                                {
                                    (provided) => (
                                        <CardContainer
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <Title >{cardList.title} </Title>
                                            {
                                                cardList.cardItems.map((cardItem, index) => {
                                                    console.log("index="+index)
                                                    return (
                                                        //每一个卡片的item
                                                        <Draggable draggableId={cardItem.description+cardItem.type+cardItem.linkWorkId} index={index}  >
                                                            {
                                                                (provided) => (
                                                                    <CardItemContainer
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        ref={provided.innerRef}
                                                                    >
                                                                        <h4>{cardItem.description}</h4>
                                                                        <div>{cardItem.type}</div>
                                                                    </CardItemContainer>
                                                                )
                                                            }
                                                        </Draggable>
                                                    )
                                                })
                                            }
                                        </CardContainer>
                                    )
                                }
                            </Droppable>
                        )
                    })
                }
            </CardListContainer>
        </DragDropContext>
    );
};

const CardContainer = styled.div`
    width: 25%;
    margin-right: 8px;
    min-height: 500px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    padding: 8px;
    background-color: #f5f5f5;
    box-shadow: 0 1px 0 rgba(9,30,66,.25);
`;

const Title = styled.h2`
    padding-left: 10px;
`;


const CardItemContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 8px;
    background-color: white;
    padding: 8px;
`;



export default CardList;

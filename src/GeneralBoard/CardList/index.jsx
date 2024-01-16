import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const data = [
    {
        index: 0,
        title: "New",
        cardItems: [
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
        ],
    },
    {
        index: 1,
        title: "In Progress",
        cardItems: [
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
        ],
    },
    {
        index: 2,
        title: "Done",
        cardItems: [
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
            {
                description: "good",
                linkWorkId: "12",
                type: "Bug"
            },
        ],
    }

];

const CardListContainer = styled.div`
    display: flex;
`;

const CardList = props => {
    return (
        // <DragDropContext
        // onDragEnd={result => console.log(result)}
        // >
        //     {
        //         data.map((cardList, index) => {
        //             console.log(cardList)
        //             return (
        //                 <Card cardList={cardList}/>
        //             )
        //         })
        //     }
        // </DragDropContext>
        <DragDropContext
            onDragEnd={result => console.log(result)}
        >
            {
                data.map((cardList, index) => {
                    console.log(cardList)
                    return (
                        <Droppable draggableId="draggable-1">
                            {
                                (provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                    >
                                        <Draggable draggableId="asdfsa" index={1}>
                                            {
                                                (provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <h4>Draggable-1</h4>
                                                    </div>
                                                )
                                            }
                                        </Draggable>
                                    </div>
                                )
                            }
                        </Droppable>
                    )
                })
            }


        </DragDropContext>
    );
};

const CardContainer = styled.div`
    margin: 8px;
    width: 220px;
    border: 1px solid lightgrey;
    border-radius: 2px;
`;

const Title = styled.h3`
`;

const Card = ({cardList}) => {
    return (
        <Draggable draggableId={cardList.index} index={cardList.index}>
            {
                (provided) => (
                    <CardContainer
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                    >
                        {
                            cardList.cardItems.map((cardItem, index) => {
                                console.log(cardItem)
                                return (
                                    <CardItem cardItem={cardItem}/>
                                )
                            })
                        }
                    </CardContainer>
                )
            }
        </Draggable>
        // <CardContainer>
        //     <Title>{cardList.title}</Title>
        //         {
        //             cardList.cardItems.map((cardItem, index) => {
        //                 console.log(cardItem)
        //                 return (
        //                     <CardItem cardItem={cardItem}   ></CardItem>
        //                 )
        //             })
        //         }
        // </CardContainer>
    );
};

const CardItemContainer = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;

`;

const CardItem = ({cardItem}) => {
    return (
        <Draggable draggableId={cardItem.index} index={cardItem.index}>
            {
                (provided) => (
                    <CardItemContainer
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div>{cardItem.description}</div>
                        <div>{cardItem.type}</div>
                    </CardItemContainer>
                )
            }
        </Draggable>

        // <CardItemContainer>
        //     <div>{cardItem.description}</div>
        //     <div>{cardItem.type}</div>
        // </CardItemContainer>
    );
};


export default CardList;

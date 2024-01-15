import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const initialTasks = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Take out the garbage'},
        'task-2': {id: 'task-2', content: 'Watch my favorite show'},
        'task-3': {id: 'task-3', content: 'Charge my phone'},
        'task-4': {id: 'task-4', content: 'Cook dinner'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1'],
}


const DragTest = props => {
    // const onDragEnd = (result) => {
    //
    // }
    //
    // return (
    //     <DragDropContext
    //         onDragEnd={onDragEnd}
    //     >
    //         {
    //             initialTasks.columnOrder.map((columnId) => {
    //                 const column = initialTasks.columns[columnId];
    //                 const tasks = column.taskIds.map(taskId => initialTasks.tasks[taskId]);
    //                 return <Column key={column.id} column={column} tasks={tasks}/>
    //             })
    //         }
    //     </DragDropContext>
    // );

    return (
        <DragDropContext
            onDragEnd={result => console.log(result)}
        >

            {/*<Droppable draggableId="draggable-1">*/}
            {/*    {*/}
            {/*        (provided) => (*/}
            {/*            <div*/}
            {/*                ref={provided.innerRef}*/}
            {/*                {...provided.draggableProps}*/}
            {/*            >*/}
            {/*                <Draggable draggableId="asdfsa" index={1}>*/}
            {/*                    {*/}
            {/*                        (provided) => (*/}
            {/*                            <div*/}
            {/*                                ref={provided.innerRef}*/}
            {/*                                {...provided.draggableProps}*/}
            {/*                                {...provided.dragHandleProps}*/}
            {/*                            >*/}
            {/*                                <h4>Draggable-1</h4>*/}
            {/*                            </div>*/}
            {/*                        )*/}
            {/*                    }*/}
            {/*                </Draggable>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</Droppable>*/}



            {/*<Draggable draggableId="dsafdsf" >*/}
            {/*    {*/}
            {/*        (provided) => (*/}
            {/*            <div*/}
            {/*                ref={provided.innerRef}*/}
            {/*                {...provided.draggableProps}*/}
            {/*                {...provided.dragHandleProps}*/}
            {/*            >*/}
            {/*                <Draggable draggableId="draggable-1" index={2}*/}
            {/*                >*/}
            {/*                    {*/}
            {/*                        (provided) => (*/}
            {/*                            <div*/}
            {/*                                ref={provided.innerRef}*/}
            {/*                                {...provided.draggableProps}*/}
            {/*                                {...provided.dragHandleProps}*/}
            {/*                            >*/}
            {/*                                <h4>Draggable-1</h4>*/}
            {/*                            </div>*/}
            {/*                        )*/}
            {/*                    }*/}
            {/*                </Draggable>*/}
            {/*            </div>*/}

            {/*        )*/}
            {/*    }*/}
            {/*</Draggable>*/}


        </DragDropContext>
    )

};

const Column = (props) => {
    return (
        <Container>
            <Title>{props.column.title}</Title>
            <Draggable draggableId={props.column.id} index={props.index}>
                {
                    (provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                        >
                            sadf
                        </div>
                    )
                }
            </Draggable>

            {/*<TaskList>*/}
            {/*    { props.tasks.map((task,index) => <Task key={task.id} task={task} index={index}/>)}*/}
            {/*</TaskList>*/}
        </Container>
    )
}

const Task = (Props) => {
    return (
        <Draggable
            draggableId={Props.task.id}
            index={Props.index}
        >
            {
                (provided) => (
                    <TaskContainer
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {Props.task.content}
                    </TaskContainer>
                )
            }
        </Draggable>

    )
}


DragTest.propTypes = {};
const TaskContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
`;

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;

`;
const Title = styled.h3`
    padding: 8px;

`;
const TaskList = styled.div`
    padding: 8px;
`;


export default DragTest;

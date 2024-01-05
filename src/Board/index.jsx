import React, {Fragment} from 'react';

import Filters from "./Filters";
import Header from "./Header";
import List from "./List";


const Board = props => {
    return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <Header/>
                <Filters/>
                <List/>
            </div>
    );
};

Board.propTypes = {};

export default Board;

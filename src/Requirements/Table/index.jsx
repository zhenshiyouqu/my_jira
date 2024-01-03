import React from 'react';
import PropTypes from 'prop-types';
import {TableCell, TableRow} from "../Styled";

const Table = props => {
    const data = [{
        project:"Project",
        owner:"Owner",
        status:"Status"
    },{
        project:"11",
        owner:"334",
        status:"2"
    }]


    return (
        <>
            <div className="grid" style={{display:"table",borderCollapse:"collapse"}}>
                <TableRow className="row">
                    <TableCell className="cell">1,1</TableCell>
                    <TableCell className="cell">1,2</TableCell>
                    <TableCell className="cell">1,3</TableCell>
                </TableRow>
                <TableRow className="row">
                    <TableCell className="cell">2,1</TableCell>
                    <TableCell className="cell">2,2</TableCell>
                    <TableCell className="cell">2,3</TableCell>
                </TableRow>
                <TableRow class="row">
                    <TableCell class="cell">3,1</TableCell>
                    <TableCell class="cell">3,2</TableCell>
                    <TableCell class="cell">3,3</TableCell>
                </TableRow>
            </div>


        </>
    );
};

Table.propTypes = {
    
};

export default Table;

import React from 'react';
import PropTypes from 'prop-types';
import {TableCell, TableRow} from "../Styled";

const Table = props => {
    const data = [{
        project:"Project",
        owner:"Owner",
        status:"Status",
        due_date:"Due date",
        priority:"Priority",
        notes:"Notes",
        budget:"Budget",
        files:"Files",
        last:"Last updated"
    },{
        project:"342",
        owner:"34",
        status:"123",
        due_date:"Due 4",
        priority:"34",
        notes:"34",
        budget:"12",
        files:"4325",
        last:"sadfads"
    },{
        project:"342",
        owner:"34",
        status:"123",
        due_date:"Due 4",
        priority:"34",
        notes:"34",
        budget:"12",
        files:"4325",
        last:"sadfads"
    }]


    return (
        <div style={{marginTop:"50px"}}>
            <div className="grid" style={{display:"table",borderCollapse:"collapse",margin:"50px"}}>
                {
                    data.map(
                        (d)=>(
                            <TableRow className="row">
                                <TableCell className="cell">{d.project}</TableCell>
                                <TableCell className="cell">{d.owner}</TableCell>
                                <TableCell className="cell">{d.status}</TableCell>
                                <TableCell className="cell">{d.due_date}</TableCell>
                                <TableCell className="cell">{d.priority}</TableCell>
                                <TableCell className="cell">{d.notes}</TableCell>
                                <TableCell className="cell">{d.budget}</TableCell>
                                <TableCell className="cell">{d.files}</TableCell>
                                <TableCell className="cell">{d.last}</TableCell>

                            </TableRow>
                        )
                    )
                }
            </div>


        </div>
    );
};

Table.propTypes = {
    
};

export default Table;

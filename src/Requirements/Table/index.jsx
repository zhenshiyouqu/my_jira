import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {TableCell, TableRow} from "../Styled";
import axios from "axios";
import Result from "../../class/Result";
import Requirement from "../../class/Requirement";

const Table = props => {
    const [datas,setDatas] = useState(
        new Result(200,null,[new Requirement()])
    )

    useEffect(() => {
        //
        axios.get("http://localhost:8080/requirement/get/requirements?ownerId=1").then((res) => {
            if (res.data.code === 200){
                setDatas(res.data)
                console.log(res.data);
            }
        } ).catch((err) => {console.log(err)})
    }, []);

    return (
        <>
            <div className="grid" style={{display:"table",borderCollapse:"collapse"}}>
                {datas.data.map((item) => (
                    <TableRow className="row">
                        <TableCell className="cell">{item.id}</TableCell>
                        <TableCell className="cell">{item.requirement_name}</TableCell>
                        <TableCell className="cell">{item.detailId}</TableCell>
                        <TableCell className="cell">{item.ownerId}</TableCell>
                        <TableCell className="cell">{item.status}</TableCell>
                        <TableCell className="cell">{item.dueDate}</TableCell>
                        <TableCell className="cell">{item.priority}</TableCell>
                        <TableCell className="cell">{item.createTime}</TableCell>
                        <TableCell className="cell">{item.last_updated_time}</TableCell>
                        <TableCell className="cell">{item.last_update}</TableCell>
                    </TableRow>
                ))}
            </div>
        </>
    );
};

Table.propTypes = {
    
};

export default Table;

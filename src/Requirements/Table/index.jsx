import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Result from "../../class/Result";
import Requirement from "../../class/Requirement";
import styled from "styled-components";

const Table = props => {
    const [datas, setDatas] = useState(
        new Result(200, null, [new Requirement()])
    )

    useEffect(() => {
        //
        axios.get("http://localhost:8080/requirement/get/requirements?ownerId=1").then((res) => {
            if (res.data.code === 200) {
                setDatas(res.data)
                console.log(res.data);
            }
        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return (
        <div style={{}}>
            <div className="grid" style={{display: "table", borderCollapse: "collapse"}}>
                <TableRow className="row">
                    {
                        Object.keys(datas.data[0]).map(key => (
                            <TableCell className="cell">{key}</TableCell>
                        ))
                    }
                </TableRow>
                {datas.data.map((item) => (
                    <TableRow className="row">
                        {
                            Object.keys(item).map(key => (
                                <TableCell contenteditable="true">{item[key]}</TableCell>
                            ))
                        }
                    </TableRow>
                ))}
            </div>
        </div>
    );
};

const TableRow = styled.div`
    display: table-row;
`;
const TableCell = styled.div`
    display: table-cell;
    border: 2px solid gray;
    padding: 10px 50px;
    text-align: center;
    font-size: 15px;
    font-family: "Microsoft YaHei UI", serif;
    
    &:hover {
        background-color: rgba(253, 255, 212, 0.59);
        border: 2px solid greenyellow;
        cursor: text;
    }
`;
Table.propTypes = {};

export default Table;

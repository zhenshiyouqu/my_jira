import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Result from "../../class/Result";
import Requirement from "../../class/Requirement";
import styled from "styled-components";

//

const Table = ({edited, changeEdit}) => {
    const [datas, setDatas] = useState([new Requirement()])
    //数据缓存，每次重新渲染会清空
    const cache = null;
    //组件的引用，用来判断是否在外部点击
    const TableRef = useRef(null);
    //获取所有需求的数据,渲染后调用
    function click() {

    }
    const inputChange = (item, key) => (e) => {
        console.log(item)
        console.log(key)
        const userInput = e.currentTarget.textContent;
        console.log(userInput)
        if (!edited) {
            changeEdit()
        }
    }

    const handleClickOutside = (event) => {
        if (TableRef.current && !TableRef.current.contains(event.target)) {
            if (edited) {
                console.log("点击了外部")
            }
        }
    }
    useEffect(() => {
        axios.get("http://localhost:8080/requirement/get/requirements?ownerId=1").then((res) => {
            if (res.data.code === 200) {
                setDatas(res.data.data)
                console.log(res.data);
            }
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    //点击TableRef以外的地方，调用某个函数
    useEffect(() => {

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [TableRef, changeEdit, edited, handleClickOutside]);



    return (
        <div ref={TableRef} style={{}}>
            <div className="grid" style={{display: "table", borderCollapse: "collapse"}}>
                <TableRow className="row">
                    {
                        Object.keys(datas[0]).map(key => (
                            <TableCell className="cell">{key}</TableCell>
                        ))
                    }
                </TableRow>
                {datas.map((item) => (
                    <TableRow className="row">
                        {
                            Object.keys(item).map(key => (
                                <TableCell contenteditable="true" onClick={click}
                                           onInput={inputChange(item, key)}>{item[key]}</TableCell>
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

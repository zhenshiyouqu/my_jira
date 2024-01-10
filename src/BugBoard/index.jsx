import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import BugPage from "./BugPage";
import {BoarderHeaderFixed} from "../general/Styled";
import axios from "axios";
import Bug from "../class/Bug";

const BugBoard = props => {
    const [bugs, setBugs] = useState([new Bug()])
    useEffect(() => {
        //     请求：/get/bugs
        axios.get("http://localhost:8080/bug/get/bugs?creatorId=1").then((res) => {
            console.log(res.data)
            if (res.data.code === 200) {
                setBugs(res.data.data)
            }
        }).catch((err) => {
                console.log(err)
            }
        )
    }, [
    ]);

    return (

        <>
            <BoardHeader/>
            <BugPage bugs = {bugs}/>
        </>
    );
};

BugBoard.propTypes = {

};
const BoardHeader = props => {
    const [edited, setEdited] = useState(false)

    const changeEdit = () => {
        console.log(edited)
        setEdited(!edited)
    }

    function handleClick() {
        if (edited) {
            //保存编辑
            changeEdit()
        }
    }
    return (
        <div style={{height: "200px", width: "82%"}}>
            <BoarderHeaderFixed>
                <div style={{display: "flex", alignItems: "center", flexGrow: "1"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <ButtonIconIcon size={40} text={"Requirment"} iconSize={1} className1={"bi bi-info-circle"}
                                        className2={"bi bi-star"}/>
                    </div>
                    <div style={{marginLeft: "auto"}}>
                        <ButtonIconIcon size={12} text={"CurrentUser"} fontWeight={700}
                                        className1={"bi bi-person-circle"} className2={"bi bi-three-dots-vertical"}/>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>
                        Manage any type of project. Assign owners, set timelines and keep track of where your project
                        stands.
                    </div>
                    <a href="www.baidu.com">
                        <span>See More</span>
                    </a>
                </div>
                <div style={{display: "flex", margin: "20px 0"}}>
                    <IconButton gap={6} size={20} className="bi bi-projector" text="New"/>
                    <IconButton gap={6} size={20} className="bi bi-search" text="Search"/>
                    <IconButton gap={6} size={20} className="bi bi-sort-down-alt" text="Sort"/>
                    <IconButton gap={6} size={20} className="bi bi-person-add" text="Person"/>
                    <IconButton gap={6} size={edited ? 25 : 20}
                                className="bi bi-save" text="Save Edit" onClick={handleClick}
                                color={
                                    edited ? "green" : "rgba(93,92,89,0.59)"
                                }/>
                </div>
            </BoarderHeaderFixed>
        </div>

    );
};
export default BugBoard;
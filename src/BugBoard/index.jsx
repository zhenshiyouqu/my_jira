import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import BugPage from "./BugPage";
import {BoarderHeaderFixed, MyLink} from "../general/Styled";
import axios from "axios";
import Bug from "../class/Bug";
import {Button, Modal} from "antd";
import BugCreatePage from "./BugCreatePage";
import BoardHead from "../BoardHead";
import {Link} from "react-router-dom";
import {getBugs} from "../back/ApiService";

const BugBoard = props => {
    const [bugs, setBugs] = useState([new Bug()])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const showModal = () => {
        setOpen(true)
    }


    useEffect(() => {
        //     请求：/get/bugs
        // axios.get("http://localhost:8080/bug/get/bugs?creatorId=1").then((res) => {
        //     console.log(res.data)
        //     if (res.data.code === 200) {
        //         setBugs(res.data.data)
        //     }
        // }).catch((err) => {
        //         console.log("err=>", err)
        //     }
        // )
        getBugs().then((res) => {
            setBugs(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [
    ]);

    return (
        <>
            <BoardHead title="BUG" text=" at FlowParserMixin.parseExpression" user="Less" refurl="www.baidu.com"
            items={
                [
                    {
                        title:"Home",
                    },
                    {
                        title:"Project"
                    },
                    {
                        title:"Bug",
                    },
                ]
            }
            />
            <ButtonMenu/>
            <BugPage bugs = {bugs}/>
            <Modal open={open} title="Title" width={1000}
                   footer={null} onCancel={()=>{setOpen(false)}}
                   onOk={()=>{setOpen(false)}}
            >
                <BugCreatePage/>
            </Modal>
        </>
    );
};

BugBoard.propTypes = {

};
const ButtonMenu = props => {
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
        <div style={{width:"100%"}}>
            <div style={{display:"flex",margin:"20px 0"}} >
                <IconButton gap={6} size={20} className="bi bi-projector" text="New" />
                <IconButton gap={6} size={20} className="bi bi-search" text="Search" />
                <IconButton gap={6} size={20} className="bi bi-sort-down-alt" text="Sort" />
                <IconButton gap={6} size={20} className="bi bi-person-add" text="Person" />
                <IconButton gap={6} size={edited ? 25 : 20}
                            className="bi bi-save" text="Save Edit" onClick={handleClick}
                            color = {
                                edited ? "green" : "rgba(93,92,89,0.59)"
                            }/>
            </div>
        </div>
    );
};
export default BugBoard;
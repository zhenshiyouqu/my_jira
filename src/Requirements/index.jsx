import React, {Fragment, useState} from 'react';
import Table from "./Table";
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import {BoarderHeaderFixed} from "../general/Styled";
import ReqCreatePage from "./ReqCreatePage";
import BugCreatePage from "../BugBoard/BugCreatePage";
import {Modal} from "antd";
import BoardHead from "../BoardHead";

// 该页面展示所有的需求，包括不属于自己的需求，若需求属于自己，则可以编辑，否则只能查看
// 可通过过滤器查看自己的需求等等
const Requirements = props => {
    const [edited, setEdited] = useState(false)

    const [open,setOpen] = useState(false)
    const onOpen = () => {
        setOpen(true)
    }

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
            <>
                <BoardHead title="REQUIREMENT" text=' at FlowParserMixin.parseExpression' user="Dee" refurl="www.baidu.com"
                           items={
                               [
                                   {
                                       title:"Home",
                                   },
                                   {
                                       title:"Project"

                                   },
                                   {
                                       title:"Requirement",
                                   },
                               ]
                           }
                />
                <ButtonMenu/>
                <Table edited={edited} changeEdit = {changeEdit}/>
                <Modal open={open} title="Title" width={1000}
                       footer={null} onCancel={()=>{setOpen(false)}}
                       onOk={()=>{setOpen(false)}}
                >
                    <ReqCreatePage/>
                </Modal>
            </>
    );
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
Requirements.propTypes = {};

export default Requirements;

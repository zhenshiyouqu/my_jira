import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlanTable from "./PlanTable";
import {BoarderHeaderFixed} from "../general/Styled";
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import BoardHead from "../BoardHead";

const PlanBoard = props => {
    const [open, setOpen] = useState(false)


    return (
        <>
            <BoardHead title="PLAN" text=" at FlowParserMixin.parseExpression" user="less" refurl="www.baidu.com"
                       items={
                           [
                               {
                                   title:"Home",
                               },
                               {
                                   title:"Project"

                               },
                               {
                                   title:"Plan",
                               },
                           ]
                       }
            />
            <ButtonMenu/>
            <IconButton size={20} className={"bi bi-plus-lg"} onClick={()=>{setOpen(!open)}}/>
            {
                open && <PlanTable/>
            }
        </>
    );
};

PlanBoard.propTypes = {

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



export default PlanBoard;
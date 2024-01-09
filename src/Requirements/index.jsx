import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import Table from "./Table";
import IconButton from "../general/IconButton";
import styled from 'styled-components';
import {mixin} from "../general/Styled";
import ButtonIcon from "../general/ButtonIcon";
import ButtonIconIcon from "../general/ButtonIconIcon";

// 该页面展示所有的需求，包括不属于自己的需求，若需求属于自己，则可以编辑，否则只能查看
// 可通过过滤器查看自己的需求等等
const Requirements = props => {
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
                <div style={{display:"flex",alignItems:"center",flexGrow: "1"}}>
                    <div style={{display:"flex",alignItems:"center"}}>
                        <ButtonIconIcon size={40} text={"Requirment"} iconSize={1} className1={"bi bi-info-circle"} className2={"bi bi-star"} />
                    </div>
                    <div style={{marginLeft:"auto"}}>
                        <ButtonIconIcon size={12} text={"CurrentUser"} fontWeight={700} className1={"bi bi-person-circle"} className2={"bi bi-three-dots-vertical"} />
                    </div>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <div>
                        Manage any type of project. Assign owners, set timelines and keep track of where your project stands.
                    </div>
                    <a href="www.baidu.com">
                        <span>See More</span>
                    </a>
                </div>
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
                <Table edited={edited} changeEdit = {changeEdit}/>
            </div>

    );
};

Requirements.propTypes = {};

export default Requirements;

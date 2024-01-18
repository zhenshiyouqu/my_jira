import React from 'react';
import PropTypes from 'prop-types';
import {BoarderHeaderFixed} from "../general/Styled";
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import {Breadcrumb} from "antd";

const BoardHead = ({title,text,refurl,user,items}) => {
    return (
        <div style={{height: "100px", width: "82%"}}>
            <BoarderHeaderFixed>
                <Breadcrumb
                items={items}
                />
                <div style={{display: "flex", alignItems: "center", flexGrow: "1"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <ButtonIconIcon size={40} text={title} iconSize={1} className1={"bi bi-info-circle"}
                                        className2={"bi bi-star"}/>
                    </div>
                    <div style={{marginLeft: "auto"}}>
                        <ButtonIconIcon size={12} text={user} fontWeight={700}
                                        className1={"bi bi-person-circle"} className2={"bi bi-three-dots-vertical"}/>
                    </div>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>
                        {text}
                    </div>
                    <a href="www.baidu.com">
                        <span>See More</span>
                    </a>
                </div>
            </BoarderHeaderFixed>
        </div>
    );
};

BoardHead.propTypes = {};

export default BoardHead;

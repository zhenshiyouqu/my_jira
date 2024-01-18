import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ButtonIconIcon from "../general/ButtonIconIcon";
import IconButton from "../general/ButtonIcon";
import CardList from "./CardList";
import DragTest from "./DragTest";
import BoardHead from "../BoardHead";

const GeneralBoard = props => {
    return (
        <>
            <BoardHead title="BOARD" text="if you want . i can show you." refurl="www.baidu.com" user="BobLess"
                       items={
                           [
                               {
                                   title:"Home",
                               },
                               {
                                   title:"Project"

                               },
                               {
                                   title:"Board",
                               },
                           ]
                       }/>
            <ButtonMenu/>
            {/*<DragTest/>*/}
            <CardList/>
        </>
    );
};

GeneralBoard.propTypes = {

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

export default GeneralBoard;

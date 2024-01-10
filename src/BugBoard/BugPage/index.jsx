import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "../../general/IconButton";
import {calc} from "antd/es/theme/internal";
import styled from 'styled-components';
import { css } from 'styled-components';
import Bug from "../../class/Bug";
const BugPage = ({bugs}) =>{
    return (
        <BugItemContainer>
            {
                bugs.map((bug,index)=>{
                    return <BugItem bug={bug}/>
                })
            }
        </BugItemContainer>
    )
}

const BugItemContainer = styled.div`
    overflow: auto;
    height: calc(100vh - 250px);
`



const BugItem = ({bug}) => {
    console.log(bug)
    return (
        <div style={{display: "flex",marginBottom:"20px",height:"200px"}}>
            {/*图片*/}
            <div style={{flex:"0 0",height:"100%"}}>
                {/*todo:点击图片跳转到详情去*/}
                <img src={"https://youimg1.c-ctrip.com/target/100r10000000pycel4E0E.jpg"} style={{width:"auto",height:"100%"}}/>
            </div>
            <div style={{flex:"1 1 100%",marginLeft:"20px",height:"100%",position:"relative",minWidth:"300px"}}>
                <div style={{display:"flex",height:"30%"}}>
                    {/*头像*/}
                    <div style={{flex:"0 0 100px"}}>
                        <img src={"https://youimg1.c-ctrip.com/target/100r10000000pycel4E0E.jpg"} style={{width:"100%",height:"auto"}} alt={"你好"}/>
                    </div>
                    {/*描述这个人*/}
                    <div style={{marginLeft:"20px",width:"200px"}}>
                        {/*人名 岗位*/}
                        <div style={{fontSize:"20px"}} >Bob Lee{bug.creator_id}</div>
                        {/*当前阶段*/}
                        <div style={{color:"gray",fontSize:"15px"}}>
                            当前阶段：{bug.status}
                        </div>
                    </div>
                </div>
                {/*缺陷的描述*/}
                <div style={{height:"50%",fontSize:"15px",color:"gray",overflow:"hidden",textOverflow:"ellipsis"}}>
                    {bug.description}
                </div>
                {/*点赞 收藏 评论 编辑 详情*/}
                <div style={{position:"absolute", height:"20%",bottom:"0",display:"flex"}}>
                    <IconButton size={15} className={"bi bi-hand-thumbs-up"} text={"200"} />
                    <IconButton size={15} className={"bi bi-star"} text={"300"} />
                    <IconButton size={15} className={"bi bi-chat"} text={"20"} />
                    <IconButton size={15} className={"bi bi-pencil-square"} text={"Edit"} />
                    <IconButton size={15} className={"bi bi-three-dots-vertical"} text={"Detail"} />
                </div>
            </div>
        </div>
    );
};

BugPage.propTypes = {};

export default BugPage;

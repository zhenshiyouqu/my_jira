import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Card, Flex, Space} from 'antd';
import {ListContainerDiv, ListItemDiv, ListItemItemDiv} from "./Styled";

const List = props => {
    const elements = [1,2,3,4]

    return (
        // 整个大框架
        <div style={{display:"flex",marginTop:"30px",width:"100%"}}>

                    {/*{elements.map((element, index) => (*/}
                    {/*    <div key={index}>{element}</div> // key是必需的，这里使用了数组索引作为每个元素的key*/}
                    {/*))*/}
                    {/*}*/}

            {
                elements.map(
                    (s) => (
                        <ListContainerDiv>
                            {/*其中一个列表*/}
                            <ListItemDiv>
                                <div style={{padding:"10px 5px"}}>BackLog 3 of 4</div>
                                {/*其中一个卡片*/}
                                <ListItemItemDiv>
                                    <div style={{overflow:"hidden"}}>
                                        但凡你的萨芬第三方但凡你的萨芬第三方但凡你的萨芬第三方但凡你的萨芬第三方
                                    </div>
                                    <div style={{marginTop: "auto"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-arrow-down-right-square-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12zM5.904 5.197 10 9.293V6.525a.5.5 0 0 1 1 0V10.5a.5.5 0 0 1-.5.5H6.525a.5.5 0 0 1 0-1h2.768L5.197 5.904a.5.5 0 0 1 .707-.707z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                             className="bi bi-award-fill" viewBox="0 0 16 16">
                                            <path
                                                d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                                            <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                                        </svg>
                                    </div>
                                </ListItemItemDiv>
                            </ListItemDiv>
                        </ListContainerDiv>
                    )
                )
            }

        </div>
    );
};

List.propTypes = {};

export default List;

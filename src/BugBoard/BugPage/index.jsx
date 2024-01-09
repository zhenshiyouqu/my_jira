import React from 'react';
import PropTypes from 'prop-types';

const BugPage = props => {
    return (
        <div style={{display: "flex",marginBottom:"20px"}}>
            {/*图片*/}
            <div style={{flex:"0 0 300px"}}>
                {/*todo:点击图片跳转到详情去*/}
                <img src={"https://youimg1.c-ctrip.com/target/100r10000000pycel4E0E.jpg"} style={{width:"100%",height:"auto"}}/>
            </div>
            <div style={{flex:"1 1 100%",marginLeft:"20px"}}>
                <div style={{display:"flex"}}>
                    {/*头像*/}
                    <div style={{flex:"0 0 100px"}}>
                        <img src={"https://youimg1.c-ctrip.com/target/100r10000000pycel4E0E.jpg"} style={{width:"100%",height:"auto"}} alt={"你好"}/>
                    </div>
                    {/*描述这个人*/}
                    <div>
                        {/*人名 岗位*/}
                        <div style={{fontSize:"20px"}} >Bob Lee</div>
                        {/*当前阶段*/}
                        <div style={{color:"gray",fontSize:"15px"}}>当前阶段：开发中</div>
                    </div>
                </div>
                {/*缺陷的描述*/}
                <div>
                    <span style={{color:"gray",fontSize:"15px"}}>为开发人员分享快速参考备忘清单【速查表】。这是英文版 Reference 的中文版本，目的是为了方便自己的技术栈查阅，如果您提供一个清单，我将抽空搬运，立即撸起来 :)。如果您发现此处的备忘单不合适，您可以通过提交 PR 来修复它或提供更好的备忘清单，只针对【中文】用户。以下是开源天使提供的一些备忘清单和快速参考 :)。</span>
                </div>
                {/*点赞 收藏 评论*/}
                <div style={{marginBottom:"0",display:"flex"}}>
                    <button>点赞</button>
                    <button>收藏</button>
                    <button>评论</button>
                </div>
            </div>

        </div>
    );
};

BugPage.propTypes = {};

export default BugPage;

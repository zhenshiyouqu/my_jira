import React from 'react';
import PropTypes from 'prop-types';
import {Form, Radio, Upload} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";


const BugCreatePage = props => {
    return (
        // Bug表字段：id, name, description, creatorId, ownerId, projectId, status, priority, severity, createTime, updateTime提交
        <Form  layout={"vertical"}>
            <Form.Item label={<span style={{ fontSize:"20px",fontWeight:"700" }}>Title</span>} required={true}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item label="Description" required={true}>
                {/*<input style={{width:"200px",height:"30px"}} type="text" />*/}
                <TextArea rows={4}/>
                <div>
                    <span style={{fontSize:"10",fontWeight:"200"}}>填写说明：有重现步骤、预期结果</span>
                </div>
            </Form.Item>
            <Form.Item label="Bug Screenshot/Vedio" required={true}>
                {/*<input style={{width:"200px",height:"30px"}} type="text" />*/}
                <Upload action="/upload.do" listType="picture-card">
                    <button style={{border: 0, background: 'none'}} type="button">
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Upload</div>
                    </button>
                </Upload>
            </Form.Item>
            <Form.Item label="Connect Requirement" required={true}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item label="Processor" required={true}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item label="Identifier" required={true}>
                <input style={{width: "200px", height: "30px"}} type="text"/>
            </Form.Item>
            <Form.Item label="Env" required={true}>
                <Radio.Group defaultValue={3}>
                    <Radio value={1}>Pro</Radio>
                    <Radio value={2}>Uat</Radio>
                    <Radio value={3}>Sit</Radio>
                    <Radio value={4}>Dev</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="优先级" required={true}>
                <Radio.Group defaultValue={4}>
                    <Radio value={1}>S</Radio>
                    <Radio value={2}>A</Radio>
                    <Radio value={3}>B</Radio>
                    <Radio value={4}>C</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>

    );
};

const TextInput = (props) => {
    return (
        <li>
            <label style={{fontSize: "25px"}}>你好</label>
            <input style={{width: "200px", height: "30px"}} type="text"/>
        </li>
    );
}

BugCreatePage.propTypes = {};

export default BugCreatePage;